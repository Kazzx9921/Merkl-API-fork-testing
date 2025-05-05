import { REDIS_READ_TIMEOUT, REDIS_RETRIES, REDIS_WRITE_TIMEOUT, redisClient } from "@/cache/redis";
import { withRetry, withTimeout } from "@sdk";
export class CacheRepository {
    static async set(ttl, key, value) {
        await withRetry(withTimeout, [redisClient.set(key, value, { EX: ttl }), REDIS_WRITE_TIMEOUT], REDIS_RETRIES);
    }
    static async ttl(key) {
        return await withRetry(withTimeout, [redisClient.ttl(key), REDIS_READ_TIMEOUT], REDIS_RETRIES);
    }
    static async get(key) {
        return await withRetry(withTimeout, [redisClient.get(key), REDIS_READ_TIMEOUT], REDIS_RETRIES);
    }
}
