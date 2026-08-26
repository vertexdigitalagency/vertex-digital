export interface EmailMessage {
  to: string;
  subject: string;
  html: string;
  text: string;
  /** Set on the internal notification so replying goes straight to the lead. */
  replyTo?: string;
}

export interface EmailResult {
  success: boolean;
  error?: string;
}
