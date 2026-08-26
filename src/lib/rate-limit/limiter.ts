export interface RateLimiter {
  /** Returns true if `key` has exceeded its allowed request budget. */
  isLimited(key: string): Promise<boolean>;
}
