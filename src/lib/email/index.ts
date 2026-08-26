import type { EmailProvider } from "@/lib/email/provider";
import { ResendEmailProvider } from "@/lib/email/resend-provider";
import { ConsoleEmailProvider } from "@/lib/email/console-provider";

export function getEmailProvider(): EmailProvider {
  const apiKey = process.env.RESEND_API_KEY;
  const fromAddress = process.env.EMAIL_FROM;

  if (apiKey && fromAddress) {
    return new ResendEmailProvider(apiKey, fromAddress);
  }

  console.warn(
    "[email] RESEND_API_KEY / EMAIL_FROM not set — emails will be logged, " +
      "not sent. See README > Email setup.",
  );

  return new ConsoleEmailProvider();
}