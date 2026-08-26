import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.string().trim().min(1, "Please enter your email.").email("That email address doesn't look quite right."),
});

export type NewsletterValues = z.infer<typeof newsletterSchema>;
