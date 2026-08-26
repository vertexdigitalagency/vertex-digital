import type { EmailProvider } from "@/lib/email/provider";
import type { EmailMessage, EmailResult } from "@/lib/email/types";

const RESEND_API_URL = "https://api.resend.com/emails";

/**
 * Sends via Resend's REST API directly with `fetch` — deliberately no SDK
 * dependency, since the API surface used here is a single POST request.
 * Selected automatically by `lib/email/index.ts` when `RESEND_API_KEY` and
 * `EMAIL_FROM` are both set. See README > Email setup for account/domain
 * verification steps.
 */
export class ResendEmailProvider implements EmailProvider {
  constructor(
    private apiKey: string,
    private fromAddress: string
  ) {}

  async send(message: EmailMessage): Promise<EmailResult> {
    try {
      const response = await fetch(RESEND_API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: this.fromAddress,
          to: [message.to],
          subject: message.subject,
          html: message.html,
          text: message.text,
          ...(message.replyTo ? { reply_to: message.replyTo } : {}),
        }),
      });

      if (!response.ok) {
        const body = await response.text().catch(() => "");
        console.error(`[email] Resend request failed (${response.status}):`, body);
        return { success: false, error: "Email provider request failed." };
}

const body = await response.text().catch(() => "");
console.log(`[email] Resend accepted request (${response.status}):`, body);

return { success: true };
      
    } catch (err) {
      console.error("[email] Resend request threw:", err);
      return { success: false, error: "Email provider request threw an error." };
    }
  }
}
