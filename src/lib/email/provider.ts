import type { EmailMessage, EmailResult } from "@/lib/email/types";

export interface EmailProvider {
  send(message: EmailMessage): Promise<EmailResult>;
}
