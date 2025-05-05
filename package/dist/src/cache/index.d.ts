import NodeCache from "node-cache";
import type { CacheKeys } from "./keys";
export type CacheArg = {
    [Key in keyof CacheKeys]: CacheKeys[Key]["arg"] extends null ? `${Key}` : `${Key}_${CacheKeys[Key]["arg"]}`;
};
export type CacheKey<Key extends keyof CacheKeys = keyof CacheKeys> = Key;
export type AnyKey<BaseKey extends CacheKey, ActualKey extends BaseKey | NonNullable<CacheArg[BaseKey]>> = ActualKey extends CacheKey ? BaseKey : NonNullable<CacheArg[BaseKey]>;
export type Getter = <K extends string | string[]>(key: K) => Promise<K extends string[] ? string[] : string>;
export declare class Cache {
    static decoder: TextDecoder;
    static encoder: TextEncoder;
    localCache: NodeCache;
    static baseKey<T extends CacheKey, Key extends T | NonNullable<CacheArg[T]>>(key: Key): CacheKey;
    /** @notice Uncompress (if enabled), parsed and typed data from the cache */
    static uncompress<T extends CacheKey, Key extends T | NonNullable<CacheArg[T]>>(key: Key, value: string): CacheKeys[T]["returns"];
    /** @notice Compress (if enabled), stringify and encoded data to be stored in the cache */
    static compress<T extends CacheKey, Key extends T | NonNullable<CacheArg[T]>>(key: Key, value: CacheKeys[T]["returns"]): string;
    private getRaw;
    private getManyRaw;
    private setRaw;
    /** @notice Set value for a given key for both local and raw cache */
    private set;
    /**
     * @deprecated Local cache is not used anymore
     */
    private isLocallyCached;
    /**
     * @deprecated Local cache is not used anymore
     */
    private setLocally;
    /**
     * @deprecated Local cache is not used anymore
     */
    private getLocally;
    /**
     * @returns the uncompressed (if enabled), parsed and typed data from the cache
     */
    get<Key extends CacheKey, Args extends CacheKeys[Key]["arg"]>(key: Key, args?: Args): Promise<CacheKeys[Key]["returns"]>;
    /**
     * Get many data from cache
     * @param key cache key
     * @returns the uncompressed (if enabled), parsed and typed data from the cache for all keys
     */
    findMany<T extends CacheKey, Key extends T | NonNullable<CacheArg[T]>>(keys: Key[]): Promise<CacheKeys[T]["returns"][]>;
    /**
     * Get many data from cache with argument
     * @param key cache key
     * @param args arguments to append to cache keys
     * @returns the uncompressed (if enabled), parsed and typed data from the cache for all keys
     */
    getManyWithArgs<Key extends CacheKey, Args extends CacheKeys[Key]["arg"]>(key: CacheKeys[Key]["arg"] extends null ? never : Key, args: Args[]): Promise<CacheKeys[Key]["returns"][]>;
    /**
     * Get data from cache or set it using the callback
     * @param key cache key
     * @returns the uncompressed (if enabled), parsed and typed data from the cache
     */
    getOrSet<T extends CacheKey, Key extends T | NonNullable<CacheArg[T]>, Args extends any[]>(key: AnyKey<T, Key>, callback: (...args: Args) => Promise<CacheKeys[T]["returns"]>, ...args: Args): Promise<CacheKeys[T]["returns"]>;
    /** @notice Set with retrials */
    safeSet<T extends CacheKey, Key extends T | NonNullable<CacheArg[T]>>(key: Key, value: CacheKeys[T]["returns"]): Promise<any>;
}
export declare const Redis: Cache;
