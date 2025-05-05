export declare abstract class CacheRepository {
    static set(ttl: number, key: string, value: string): Promise<void>;
    static ttl(key: string): Promise<number>;
    static get(key: string): Promise<string | null>;
}
