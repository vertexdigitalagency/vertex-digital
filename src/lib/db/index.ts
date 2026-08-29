import type { SubmissionStore } from "@/lib/db/store";
import { FileSubmissionStore } from "@/lib/db/file-store";
import { PostgresSubmissionStore } from "@/lib/db/postgres-store";

let storeInstance: SubmissionStore | null = null;
let warnedAboutFileStore = false;

/**
 * Returns the active submission store, chosen once and cached for the life
 * of the server process:
 *
 * - `DATABASE_URL` set  → `PostgresSubmissionStore` (production)
 * - `DATABASE_URL` unset → `FileSubmissionStore` (local development only)
 *
 * See db/schema.sql for the table the Postgres store expects, and the
 * README's "Database setup" section for provider setup steps.
 */
export function getSubmissionStore(): SubmissionStore {
  if (storeInstance) return storeInstance;
  console.log("DATABASE_URL exists:", !!process.env.DATABASE_URL);

  const databaseUrl = process.env.DATABASE_URL;

  if (databaseUrl) {
    storeInstance = new PostgresSubmissionStore(databaseUrl);
  } else {
    if (!warnedAboutFileStore && process.env.NODE_ENV !== "production") {
      console.warn(
        "[db] DATABASE_URL is not set — using the local file-based submission " +
          "store (data/submissions.jsonl). This is fine for local development " +
          "but will not work on most serverless hosts. Set DATABASE_URL before " +
          "deploying — see README > Database setup."
      );
      warnedAboutFileStore = true;
    }
    storeInstance = new FileSubmissionStore();
  }

  return storeInstance;
}
