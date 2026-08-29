import type { ContactPayload } from "@/lib/db/types";
import { SITE } from "@/lib/constants";
import { SITE_URL } from "@/lib/seo";

interface EmailContent {
  subject: string;
  html: string;
  text: string;
}

const WRAPPER_STYLE =
  "font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a2e;";
const HEADER_STYLE =
  "background: linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%); padding: 28px 32px; border-radius: 12px 12px 0 0;";
const BODY_STYLE = "background: #ffffff; padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;";
const LABEL_STYLE = "color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 4px;";
const VALUE_STYLE = "color: #1a1a2e; font-size: 15px; margin: 0 0 20px; line-height: 1.5;";
const FOOTER_STYLE = "color: #9ca3af; font-size: 12px; text-align: center; margin-top: 24px;";

/** Sent to the Vertex Digital team when a new contact form lead comes in. */
export function contactNotificationEmail(payload: ContactPayload): EmailContent {
  const subject = `New project inquiry from ${payload.name}`;

  const rows: [string, string | null][] = [
    ["Name", payload.name],
    ["Email", payload.email],
    ["Company", payload.company],
    ["Project type", payload.projectType],
    ["Budget", payload.budget],
  ];

  const rowsHtml = rows
    .filter(([, value]) => value)
    .map(
      ([label, value]) =>
        `<p style="${LABEL_STYLE}">${label}</p><p style="${VALUE_STYLE}">${escapeHtml(value!)}</p>`
    )
    .join("");

  const html = `
    <div style="${WRAPPER_STYLE}">
      <div style="${HEADER_STYLE}">
        <p style="color: #ffffff; font-size: 18px; font-weight: 700; margin: 0;">New project inquiry</p>
      </div>
      <div style="${BODY_STYLE}">
        ${rowsHtml}
        <p style="${LABEL_STYLE}">Message</p>
        <p style="${VALUE_STYLE}">${escapeHtml(payload.message).replace(/\n/g, "<br />")}</p>
      </div>
      <p style="${FOOTER_STYLE}">Reply directly to this email to respond to ${escapeHtml(payload.name)}.</p>
    </div>
  `.trim();

  const text = [
    "New project inquiry",
    "",
    ...rows.filter(([, v]) => v).map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    payload.message,
  ].join("\n");

  return { subject, html, text };
}

/** Sent to the person who submitted the form, confirming receipt. */
export function contactConfirmationEmail(payload: ContactPayload): EmailContent {
  const subject = "We've got your message — Vertex Digital";
  const firstName = payload.name.trim().split(/\s+/)[0] || payload.name;

  const html = `
    <div style="${WRAPPER_STYLE}">
      <div style="${HEADER_STYLE}">
        <p style="color: #ffffff; font-size: 20px; font-weight: 700; margin: 0;">Vertex Digital</p>
      </div>
      <div style="${BODY_STYLE}">
        <p style="font-size: 16px; margin: 0 0 16px;">Hi ${escapeHtml(firstName)},</p>
        <p style="font-size: 15px; line-height: 1.6; margin: 0 0 16px; color: #374151;">
          Thanks for reaching out to Vertex Digital. We've received your message
          and a member of our team will get back to you within one business day
          with next steps.
        
        <p style="font-size: 15px; line-height: 1.6; margin: 24px 0 0; color: #374151;">
          Talk soon,<br />The Vertex Digital team
        </p>
      </div>
      <p style="${FOOTER_STYLE}">${SITE.name} · ${SITE.address}</p>
    </div>
  `.trim();

  const text = [
    `Hi ${firstName},`,
    "",
    "Thanks for reaching out to Vertex Digital. We've received your message and a member of our team will get back to you within one business day with next steps.",
    "",
    `We appreciate your interest and will contact you shortly.`,
    "",
    "Talk soon,",
    "The Vertex Digital team",
  ].join("\n");

  return { subject, html, text };
}

/** Sent to confirm a newsletter subscription. */
export function newsletterConfirmationEmail(email: string): EmailContent {
  const subject = "You're subscribed — Vertex Digital";

  const html = `
    <div style="${WRAPPER_STYLE}">
      <div style="${HEADER_STYLE}">
        <p style="color: #ffffff; font-size: 20px; font-weight: 700; margin: 0;">Vertex Digital</p>
      </div>
      <div style="${BODY_STYLE}">
        <p style="font-size: 15px; line-height: 1.6; margin: 0; color: #374151;">
          You're subscribed to occasional notes on design, performance, and
          building premium web products. We'll keep it useful and infrequent.
        </p>
      </div>
      <p style="${FOOTER_STYLE}">You're receiving this because ${escapeHtml(email)} subscribed at ${SITE_URL}.</p>
    </div>
  `.trim();

  const text = `You're subscribed to occasional notes from Vertex Digital on design, performance, and building premium web products. We'll keep it useful and infrequent.`;

  return { subject, html, text };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
