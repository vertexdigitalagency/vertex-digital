import type { RateLimiter } from "@/lib/rate-limit/limiter";

const WINDOW_SECONDS = 10 * 60; // 10 minutes
const MAX_ATTEMPTS = 5;

/**
 * Fixed-window counter backed by Upstash Redis's REST API — works from any
 * serverless runtime without a persistent TCP connection, and (unlike
 * `InMemoryRateLimiter`) is shared correctly across every instance.
 *
 * Selected automatically by `lib/rate-limit/index.ts` when
 * `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` are set. See the
 * README's "Security > Rate limiting" section for account setup.
 */
export class UpstashRateLimiter implements RateLimiter {
  constructor(
    private url: string,
    private token: string
  ) {}

  async isLimited(key: string): Promise<boolean> {
    const redisKey = `ratelimit:contact:${key}`;

    try {
      const response = await fetch(`${this.url}/pipeline`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          ["INCR", redisKey],
          ["EXPIRE", redisKey, WINDOW_SECONDS],
        ]),
      });

      if (!response.ok) {
        console.error(`[rate-limit] Upstash request failed (${response.status})`);
        return false; // fail open — don't block legitimate users if Redis is down
      }

      const results = (await response.json()) as Array<{ result?: number }>;
      const count = results[0]?.result;
      return typeof count === "number" && count > MAX_ATTEMPTS;
    } catch (err) {
      console.error("[rate-limit] Upstash request threw:", err);
      return false; // fail open
    }
  }
}
