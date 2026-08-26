export type SubmissionType = "contact" | "newsletter";

export type SubmissionStatus =
  | "new"
  | "contacted"
  | "archived"
  | "subscribed"
  | "unsubscribed";

export interface ContactPayload {
  name: string;
  email: string;
  company: string | null;
  projectType: string | null;
  budget: string | null;
  message: string;
}

export interface NewsletterPayload {
  email: string;
}

export interface Submission {
  id: string;
  type: SubmissionType;
  status: SubmissionStatus;
  payload: ContactPayload | NewsletterPayload;
  /** SHA-256 hash of the submitter's IP, never the raw address — enough to
   *  support rate-limiting/abuse review without storing personal data. */
  ipHash: string | null;
  submittedAt: string;
}

export type NewSubmission = Omit<Submission, "id" | "submittedAt">;
