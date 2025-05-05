import { Elysia } from "elysia";
export declare const LiquidityController: Elysia<"/liquidity", false, {
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
    liquidity: {
        index: {
            get: {
                body: unknown;
                params: {};
                query: {
                    address: string;
                    chainId: number;
                };
                headers: unknown;
                response: {
                    200: import("./liquidity.model").PositionT[];
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
