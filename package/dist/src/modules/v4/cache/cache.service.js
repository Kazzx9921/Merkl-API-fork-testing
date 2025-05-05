import bigintToString from "@/utils/bigintToString";
import { CacheRepository } from "./cache.repository";
export class CacheService {
    static encoder = new TextEncoder();
    static decoder = new TextDecoder();
    static #hashKey(fn, args) {
        const prototype = [Bun.hash(fn.toString()).toString()];
        return Bun.hash(JSON.stringify(prototype.concat(args?.map(a => JSON.stringify(a))))).toString();
    }
    static #compress(result) {
        const encoded = CacheService.encoder.encode(JSON.stringify(result));
        return Buffer.from(Bun.gzipSync(encoded)).toString("base64");
    }
    static #uncompress(compressedData) {
        const encoded = Buffer.from(compressedData, "base64");
        const uncompressed = Bun.gunzipSync(encoded);
        const decoded = CacheService.decoder.decode(uncompressed);
        return JSON.parse(decoded);
    }
    static async wrap(ttl, fn, ...args) {
        if (Bun.env.NODE_ENV === "local")
            return (await fn(...args));
        const key = CacheService.#hashKey(fn, args);
        const cached = await CacheRepository.get(key);
        if (cached !== null)
            return CacheService.#uncompress(cached);
        const result = await fn(...args);
        const compressed = CacheService.#compress(bigintToString(result));
        await CacheRepository.set(ttl, key, compressed);
        return result;
    }
    static async keyAndTTL(fn, ...args) {
        const key = CacheService.#hashKey(fn, args);
        return [key, await CacheRepository.ttl(key)];
    }
    static async set(ttl, fn, ...args) {
        const key = CacheService.#hashKey(fn, args);
        const result = await fn(...args);
        const compressed = CacheService.#compress(bigintToString(result));
        await CacheRepository.set(ttl, key, compressed);
        return result;
    }
    static async get(fn, args) {
        const key = CacheService.#hashKey(fn, args);
        const cached = await CacheRepository.get(key);
        if (cached === null)
            return null;
        return CacheService.#uncompress(cached);
    }
}
