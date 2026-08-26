import { z } from "zod";

/**
 * Validates only the genuine, user-facing contact fields. Honeypot and
 * timestamp spam-check values are intentionally handled separately in the
 * server action (see `lib/actions/contact.ts`) — failing those must never
 * surface a field-specific error, or a bot could learn what tripped it.
 */
export const contactFieldsSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "That name looks too long."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email.")
    .email("That email address doesn't look quite right."),
  company: z.string().trim().max(150, "That company name looks too long."),
  projectType: z.string().trim().max(100, "That's not a valid project type."),
  budget: z.string().trim().max(100, "That's not a valid budget range."),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more — at least 10 characters.")
    .max(5000, "That message is a bit long — please trim it down."),
});

export type ContactFieldValues = z.infer<typeof contactFieldsSchema>;
