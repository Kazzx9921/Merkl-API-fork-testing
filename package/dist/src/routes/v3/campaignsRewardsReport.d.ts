import { type Elysia } from "elysia";
/**
 * @deprecated - conversion to v4 done
 */
export declare const query: import("@sinclair/typebox").TObject<{
    chain_campaignIds: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    from: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    to: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
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
    campaignsRewardsReport: {
        get: {
            body: unknown;
            params: {};
            query: {
                from?: number | undefined;
                to?: number | undefined;
                chain_campaignIds: string[];
            };
            headers: unknown;
            response: {
                200: any[];
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
