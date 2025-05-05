import type Elysia from "elysia";
export declare const response: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TObject<{
    balance: import("@sinclair/typebox").TNumber;
    decimals: import("@sinclair/typebox").TNumber;
    symbol: import("@sinclair/typebox").TString;
}>>;
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
    balances: {
        get: {
            body: unknown;
            params: {};
            query: {
                additionalTokenAddresses?: string[] | undefined;
                chainId: number;
                user: string;
            };
            headers: unknown;
            response: {
                200: {
                    [x: string]: {
                        symbol: string;
                        balance: string;
                        decimals: number;
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
