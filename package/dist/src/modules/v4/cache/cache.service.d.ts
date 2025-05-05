export declare abstract class CacheService {
    #private;
    private static encoder;
    private static decoder;
    static wrap<Fn extends (...args: Args) => Promise<unknown>, Args extends unknown[], T extends Awaited<ReturnType<Fn>>>(ttl: number, fn: Fn, ...args: Args): Promise<T>;
    static keyAndTTL<Fn extends (...args: Args) => Promise<unknown>, Args extends unknown[]>(fn: Fn, ...args: Args): Promise<[string, number]>;
    static set<Fn extends (...args: Args) => Promise<unknown>, Args extends unknown[], T extends Awaited<ReturnType<Fn>>>(ttl: number, fn: Fn, ...args: Args): Promise<T>;
    static get<Fn extends (...args: Args) => Promise<unknown>, Args extends unknown[], T extends Awaited<ReturnType<Fn>>>(fn: Fn, args: Args): Promise<T | null>;
}
