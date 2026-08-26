import type { EmailProvider } from "@/lib/email/provider";
import type { EmailMessage, EmailResult } from "@/lib/email/types";

/**
 * Used automatically whenever `RESEND_API_KEY` / `EMAIL_FROM` aren't
 * configured, so contact form submissions still work end-to-end (validate,
 * spam-check, persist) in local development without email credentials —
 * they just log instead of actually sending.
 */
export class ConsoleEmailProvider implements EmailProvider {
  async send(message: EmailMessage): Promise<EmailResult> {
    console.log(
      `[email:dev] RESEND_API_KEY not set — would have sent "${message.subject}" to ${message.to}`
    );
    return { success: true };
  }
}
