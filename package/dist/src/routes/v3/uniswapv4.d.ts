import type { Elysia } from "elysia";
declare const _default: (app: Elysia) => Elysia<"", false, {
    decorator: {};
    store: {};
    derive: {};
    resolve: {};
}, {
    type: {};
    error: {};
}, {
    schema: {};
    macro: {};
    macroFn: {};
}, {
    uniswapv4: {
        index: {
            get: {
                body: unknown;
                params: {};
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        [x: string]: {
                            [poolId: string]: UniswapV4PoolType;
                        } | undefined;
                    } | null;
                };
            };
        };
    } & {
        ":chainId": {
            get: {
                body: unknown;
                params: {
                    chainId: number;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        [x: string]: any;
                    } | undefined;
                };
            };
        };
    } & {
        pool: {
            ":poolId": {
                get: {
                    body: unknown;
                    params: {
                        poolId: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: UniswapV4PoolType[];
                    };
                };
            };
        };
    };
}, {
    derive: {};
    resolve: {};
    schema: {};
}, {
    derive: {};
    resolve: {};
    schema: {};
}>;
export default _default;
