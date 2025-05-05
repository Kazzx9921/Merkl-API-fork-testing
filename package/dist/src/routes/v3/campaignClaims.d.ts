import type Elysia from "elysia";
/**
 * @deprecated
 * This whole file is deprecated but is still used by Pancakeswap to populate their db so we can't remove it yet.
 */
export declare const query: import("@sinclair/typebox").TObject<{
    campaignId: import("@sinclair/typebox").TString;
    chainId: import("@sinclair/typebox").TNumber;
    byReason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
}>;
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
    campaignClaims: {
        get: {
            body: unknown;
            params: {};
            query: {
                byReason?: boolean | undefined;
                campaignId: string;
                chainId: number;
            };
            headers: unknown;
            response: {
                200: unknown;
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
