/**
 * Number of failed queries that useQuery retry by default.
 *
 * Note that it always retry one more time, so `2` retries means `3` queries in total
 */
export const RETRY_COUNT_DEFAULT = 2
