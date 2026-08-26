import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";
import type { SubmissionStore } from "@/lib/db/store";
import type { NewSubmission, Submission } from "@/lib/db/types";

const SUBMISSIONS_DIR = path.join(process.cwd(), "data");
const SUBMISSIONS_FILE = path.join(SUBMISSIONS_DIR, "submissions.jsonl");

/**
 * Appends each submission as one line of JSON (JSONL) to a local file,
 * creating `data/` on first write.
 *
 * This is the local-development / single-server fallback used automatically
 * when `DATABASE_URL` isn't set. Most serverless hosts (e.g. Vercel
 * functions) have an ephemeral or read-only filesystem outside of `/tmp`, so
 * this store is intentionally NOT selected in that environment — see
 * `lib/db/index.ts`, which picks `PostgresSubmissionStore` automatically
 * once `DATABASE_URL` is configured.
 */
export class FileSubmissionStore implements SubmissionStore {
  async create(submission: NewSubmission): Promise<Submission> {
    const record: Submission = {
      ...submission,
      id: randomUUID(),
      submittedAt: new Date().toISOString(),
    };

    await fs.mkdir(SUBMISSIONS_DIR, { recursive: true });
    await fs.appendFile(SUBMISSIONS_FILE, `${JSON.stringify(record)}\n`, "utf8");

    return record;
  }
}
