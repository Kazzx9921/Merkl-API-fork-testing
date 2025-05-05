import { InvalidCacheCall } from "@/utils/error";
import { log } from "@/utils/logger";
import { withRetry, withTimeout } from "@sdk";
import NodeCache from "node-cache";
import { CacheDeclaration } from "./declaration";
import { REDIS_CRON_WRITE_TIMEOUT, REDIS_READ_TIMEOUT, REDIS_RETRIES, redisClient } from "./redis";
export class Cache {
    static decoder = new TextDecoder();
    static encoder = new TextEncoder();
    localCache = new NodeCache();
    /*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                         UTILS
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    static baseKey(key) {
        return key.split("_")[0];
    }
    /** @notice Uncompress (if enabled), parsed and typed data from the cache */
    static uncompress(key, value) {
        const { compressed } = CacheDeclaration[Cache.baseKey(key)];
        if (!compressed)
            return JSON.parse(value);
        if (!value)
            return {};
        const encoded = Buffer.from(value, "base64");
        const uncompressed = Bun.gunzipSync(encoded);
        const decoded = Cache.decoder.decode(uncompressed);
        return JSON.parse(decoded);
    }
    /** @notice Compress (if enabled), stringify and encoded data to be stored in the cache */
    static compress(key, value) {
        const { compressed } = CacheDeclaration[Cache.baseKey(key)];
        if (!compressed)
            return JSON.stringify(value);
        const encoded = Cache.encoder.encode(JSON.stringify(value));
        const compressedValue = Bun.gzipSync(encoded);
        return Buffer.from(compressedValue).toString("base64");
    }
    /*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                      REDIS CACHE
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    async getRaw(key) {
        if (!key || key === "")
            throw new InvalidCacheCall("Trying to access cache with no key");
        return await withRetry(withTimeout, [redisClient.get(key), REDIS_READ_TIMEOUT], REDIS_RETRIES);
    }
    async getManyRaw(keys) {
        if (keys?.length === 0)
            throw new InvalidCacheCall("Trying to access cache with no keys");
        const strippedKeys = Array.from(keys.map(a => a.split("_")[0]).reduce((unique, key) => unique.add(key), new Set()));
        const multipleCached = await withRetry(withTimeout, [redisClient.mGet(keys), REDIS_READ_TIMEOUT], REDIS_RETRIES);
        log.local(`Redis: ${keys.length} data fetched with mGet`);
        return multipleCached;
    }
    async setRaw(key, value) {
        const { redisTTL } = CacheDeclaration[Cache.baseKey(key)];
        await redisClient.set(key, value, { EX: redisTTL });
    }
    /** @notice Set value for a given key for both local and raw cache */
    async set(key, value) {
        this.setLocally(key, value);
        this.setRaw(key, Cache.compress(key, value));
    }
    /*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                      LOCAL CACHE
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    /**
     * @deprecated Local cache is not used anymore
     */
    isLocallyCached(_key) {
        return false;
        // return this.localCache.has(key);
    }
    /**
     * @deprecated Local cache is not used anymore
     */
    setLocally(_key, _value) {
        return true;
        // const { localCacheTtl } = CacheDeclaration[Cache.baseKey<T, Key>(key)] as { localCacheTtl?: number };
        // return this.localCache.set(key, value, localCacheTtl ?? DEFAULT_LOCAL_TTL);
    }
    /**
     * @deprecated Local cache is not used anymore
     */
    getLocally(_key) {
        return undefined;
        // return this.localCache.get(key);
    }
    /*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                   PUBLIC OPERATIONS
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    /**
     * @returns the uncompressed (if enabled), parsed and typed data from the cache
     */
    async get(key, args) {
        const actualKey = (args ? `${key}_${args}` : key);
        if (this.isLocallyCached(actualKey))
            return this.getLocally(actualKey);
        const rawCache = await this.getRaw(actualKey);
        if (rawCache === null)
            return null;
        const value = Cache.uncompress(actualKey, rawCache);
        this.setLocally(actualKey, value);
        return value;
    }
    /**
     * Get many data from cache
     * @param key cache key
     * @returns the uncompressed (if enabled), parsed and typed data from the cache for all keys
     */
    async findMany(keys) {
        const nonLocalKeys = keys.filter(key => !this.isLocallyCached(key)); // Keys not stored locally
        const cached = !!nonLocalKeys.length ? await this.getManyRaw(nonLocalKeys) : [];
        const res = keys.map(key => {
            if (!nonLocalKeys.includes(key))
                return this.localCache.get(key);
            const cachedValue = cached[nonLocalKeys.indexOf(key)];
            if (cachedValue !== null) {
                const value = Cache.uncompress(key, cachedValue);
                this.setLocally(key, value);
                return value;
            }
            return null;
        });
        return res;
    }
    /**
     * Get many data from cache with argument
     * @param key cache key
     * @param args arguments to append to cache keys
     * @returns the uncompressed (if enabled), parsed and typed data from the cache for all keys
     */
    async getManyWithArgs(key, args) {
        const actualKeys = args.map(arg => `${key}_${arg}`);
        return this.findMany(actualKeys);
    }
    /**
     * Get data from cache or set it using the callback
     * @param key cache key
     * @returns the uncompressed (if enabled), parsed and typed data from the cache
     */
    async getOrSet(key, callback, ...args) {
        if (this.isLocallyCached(key))
            return this.localCache.get(key);
        let value;
        const cachedValue = await this.getRaw(key);
        if (cachedValue !== null) {
            value = Cache.uncompress(key, cachedValue);
        }
        else {
            value = await callback(...args);
            await this.setRaw(key, Cache.compress(key, value));
        }
        this.setLocally(key, value);
        return value;
    }
    /** @notice Set with retrials */
    async safeSet(key, value) {
        return await withRetry(withTimeout, [this.set(key, value), REDIS_CRON_WRITE_TIMEOUT], REDIS_RETRIES);
    }
}
export const Redis = new Cache();
