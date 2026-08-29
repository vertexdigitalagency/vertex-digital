"use server";

import { headers } from "next/headers";
import { createHash } from "crypto";
import { contactFieldsSchema } from "@/lib/validation/contact";
import { getSubmissionStore } from "@/lib/db";
import { getRateLimiter } from "@/lib/rate-limit";
import { getEmailProvider } from "@/lib/email";
import { contactNotificationEmail, contactConfirmationEmail } from "@/lib/email/templates";
import { SITE } from "@/lib/constants";
import type { ContactPayload } from "@/lib/db/types";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<string, string>>;
}

// Submissions faster than this (ms, measured from when the form rendered)
// are almost certainly scripted rather than typed by a person.
const MIN_FILL_TIME_MS = 1500;

function hashIp(ip: string): string {
  // Never store or rate-limit on the raw IP — only a one-way hash of it.
  return createHash("sha256").update(ip).digest("hex");
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const honeypot = String(formData.get("website") ?? "");
  const renderedAt = Number(formData.get("renderedAt") ?? 0);

  // Spam signals are checked but never explained back to the client — if a
  // bot knew *why* it was rejected, it could adapt around the check.
  const looksAutomated =
    honeypot.length > 0 || !renderedAt || Date.now() - renderedAt < MIN_FILL_TIME_MS;

  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    company: String(formData.get("company") ?? ""),
    projectType: String(formData.get("projectType") ?? ""),
    budget: String(formData.get("budget") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const parsed = contactFieldsSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return {
      status: "error",
      message: "Please check the highlighted fields and try again.",
      fieldErrors,
    };
  }

  if (looksAutomated) {
    // Pretend success so an automated submitter has no signal to adapt to.
    return {
      status: "success",
      message: "Thanks — your message is in. We reply within one business day.",
    };
  }

  const headerList = await headers();
  const rawIp =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headerList.get("x-real-ip") ||
    "unknown";
  const ipHash = hashIp(rawIp);

  const rateLimiter = getRateLimiter();
  if (await rateLimiter.isLimited(ipHash)) {
    return {
      status: "error",
      message: "You've submitted a few requests recently — please try again shortly.",
    };
  }

  const payload: ContactPayload = {
    name: parsed.data.name,
    email: parsed.data.email,
    company: parsed.data.company || null,
    projectType: parsed.data.projectType || null,
    budget: parsed.data.budget || null,
    message: parsed.data.message,
  };

  try {
    await getSubmissionStore().create({
      type: "contact",
      status: "new",
      payload,
      ipHash,
    });
  } catch (err) {
    // Log the real error server-side only — never surface internals to the client.
    console.error("[contact] Failed to store submission:", err);
    return {
      status: "error",
      message: "Something went wrong on our end — please try emailing us directly instead.",
    };
  }

  // Email is best-effort: the lead is already safely stored, so a provider
  // outage here should never turn a successful submission into an error for
  // the visitor. Both sends run even if one fails.
  const emailProvider = getEmailProvider();
  const notification = contactNotificationEmail(payload);
  const confirmation = contactConfirmationEmail(payload);

  console.log("ADMIN EMAIL:", SITE.email);
  console.log("CLIENT EMAIL:", payload.email);

  const [notifyResult, confirmResult] = await Promise.allSettled([
    emailProvider.send({
      to: SITE.email,
      subject: notification.subject,
      html: notification.html,
      text: notification.text,
      replyTo: payload.email,
    }),
    emailProvider.send({
      to: payload.email,
      subject: confirmation.subject,
      html: confirmation.html,
      text: confirmation.text,
    }),
  ]);

  if (notifyResult.status === "rejected") {
    console.error("[contact] Notification email threw:", notifyResult.reason);
  }
  if (confirmResult.status === "rejected") {
    console.error("[contact] Confirmation email threw:", confirmResult.reason);
  }

  return {
    status: "success",
    message: "Thanks — your message is in. We reply within one business day.",
  };
}
