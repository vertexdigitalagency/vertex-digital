import type { RateLimiter } from "@/lib/rate-limit/limiter";

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_ATTEMPTS = 5;

/**
 * Keeps attempt timestamps in a plain in-process Map.
 *
 * NOTE: this state lives in a single server process's memory — it resets on
 * redeploy/restart and is NOT shared across multiple serverless instances,
 * so on multi-instance hosting it only offers partial protection. Selected
 * automatically as a fallback when Upstash Redis isn't configured — see
 * `lib/rate-limit/index.ts` and the README's "Security > Rate limiting"
 * section for connecting a shared store in production.
 */
export class InMemoryRateLimiter implements RateLimiter {
  private attempts = new Map<string, number[]>();

  async isLimited(key: string): Promise<boolean> {
    const now = Date.now();
    const recent = (this.attempts.get(key) ?? []).filter((t) => now - t < WINDOW_MS);

    if (recent.length >= MAX_ATTEMPTS) {
      this.attempts.set(key, recent);
      return true;
    }

    recent.push(now);
    this.attempts.set(key, recent);
    return false;
  }
}
