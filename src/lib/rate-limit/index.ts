import type { RateLimiter } from "@/lib/rate-limit/limiter";
import { InMemoryRateLimiter } from "@/lib/rate-limit/memory-limiter";
import { UpstashRateLimiter } from "@/lib/rate-limit/upstash-limiter";

let limiterInstance: RateLimiter | null = null;

export function getRateLimiter(): RateLimiter {
  if (limiterInstance) return limiterInstance;

  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (url && token) {
    limiterInstance = new UpstashRateLimiter(url, token);
  } else {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "[rate-limit] UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN not set — " +
          "using the in-memory rate limiter, which does not share state across " +
          "multiple serverless instances. See README > Security > Rate limiting."
      );
    }
    limiterInstance = new InMemoryRateLimiter();
  }

  return limiterInstance;
}
