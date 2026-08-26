import type { NewSubmission, Submission } from "@/lib/db/types";

export interface SubmissionStore {
  /** Persist one submission and return the stored record (with id/timestamp). */
  create(submission: NewSubmission): Promise<Submission>;
}
