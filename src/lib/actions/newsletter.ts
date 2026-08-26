"use server";

import { headers } from "next/headers";
import { createHash } from "crypto";
import { newsletterSchema } from "@/lib/validation/newsletter";
import { getSubmissionStore } from "@/lib/db";
import { getRateLimiter } from "@/lib/rate-limit";
import { getEmailProvider } from "@/lib/email";
import { newsletterConfirmationEmail } from "@/lib/email/templates";

export interface NewsletterFormState {
  status: "idle" | "success" | "error";
  message: string;
}

function hashIp(ip: string): string {
  return createHash("sha256").update(ip).digest("hex");
}

export async function subscribeToNewsletter(
  _prevState: NewsletterFormState,
  formData: FormData
): Promise<NewsletterFormState> {
  const raw = { email: String(formData.get("email") ?? "") };
  const parsed = newsletterSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      status: "error",
      message: parsed.error.issues[0]?.message ?? "Please enter a valid email address.",
    };
  }

  const headerList = await headers();
  const rawIp =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headerList.get("x-real-ip") ||
    "unknown";
  const ipHash = hashIp(rawIp);

  const rateLimiter = getRateLimiter();
  if (await rateLimiter.isLimited(`newsletter:${ipHash}`)) {
    return {
      status: "error",
      message: "Too many attempts — please try again shortly.",
    };
  }

  try {
    await getSubmissionStore().create({
      type: "newsletter",
      status: "subscribed",
      payload: { email: parsed.data.email },
      ipHash,
    });
  } catch (err) {
    // A unique-constraint violation (already subscribed) shouldn't read as
    // an error to the visitor — treat it the same as a fresh success.
    const message = err instanceof Error ? err.message : String(err);
    if (!message.toLowerCase().includes("unique")) {
      console.error("[newsletter] Failed to store subscription:", err);
      return {
        status: "error",
        message: "Something went wrong on our end — please try again.",
      };
    }
  }

  const emailProvider = getEmailProvider();
  const confirmation = newsletterConfirmationEmail(parsed.data.email);
  try {
    await emailProvider.send({
      to: parsed.data.email,
      subject: confirmation.subject,
      html: confirmation.html,
      text: confirmation.text,
    });
  } catch (err) {
    console.error("[newsletter] Confirmation email threw:", err);
  }

  return { status: "success", message: "You're on the list — check your inbox." };
}
