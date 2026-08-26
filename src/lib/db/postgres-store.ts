import { Pool } from "pg";
import type { SubmissionStore } from "@/lib/db/store";
import type { NewSubmission, Submission } from "@/lib/db/types";

/**
 * Production store, backed by any standard Postgres database (Supabase,
 * Neon, RDS, Railway, etc.) — selected automatically by `lib/db/index.ts`
 * whenever `DATABASE_URL` is set.
 *
 * Uses the `pg` driver directly with parameterized queries rather than an
 * ORM, so there's no build-time codegen step (e.g. `prisma generate`)
 * required before this works — just a valid `DATABASE_URL` and the table
 * from `db/schema.sql` applied once.
 */
export class PostgresSubmissionStore implements SubmissionStore {
  private pool: Pool;

  constructor(connectionString: string) {
    this.pool = new Pool({
      connectionString,
      // Most managed Postgres providers require SSL; reject unauthorized
      // certs unless explicitly disabled via DATABASE_SSL_REJECT_UNAUTHORIZED.
      ssl:
        process.env.DATABASE_SSL_REJECT_UNAUTHORIZED === "false"
          ? { rejectUnauthorized: false }
          : undefined,
      max: 5,
    });
  }

  async create(submission: NewSubmission): Promise<Submission> {
    const result = await this.pool.query<{
      id: string;
      type: Submission["type"];
      status: Submission["status"];
      payload: Submission["payload"];
      ip_hash: string | null;
      submitted_at: Date;
    }>(
      `insert into submissions (type, status, payload, ip_hash)
       values ($1, $2, $3, $4)
       returning id, type, status, payload, ip_hash, submitted_at`,
      [submission.type, submission.status, submission.payload, submission.ipHash]
    );

    const row = result.rows[0];
    if (!row) {
      throw new Error("Insert into submissions did not return a row.");
    }

    return {
      id: row.id,
      type: row.type,
      status: row.status,
      payload: row.payload,
      ipHash: row.ip_hash,
      submittedAt: row.submitted_at.toISOString(),
    };
  }
}
