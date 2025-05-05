import type Elysia from "elysia";
export declare const query: import("@sinclair/typebox").TObject<{
    chainIds: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
    types: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>, import("@sinclair/typebox").TString, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
    live: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    creatorTag: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    hideTestTokens: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const response: import("@sinclair/typebox").TObject<{}>;
/**
 * @deprecated - conversion to v4 done
 *
 * @dev there was a significant loss of information with the v4 conversion
 * So some issues are expected
 *
 * v3 was returning a whole bunch of dynamic data when the v4 only has tvl and apr
 */
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
    campaigns: {
        get: {
            body: unknown;
            params: {};
            query: {
                types?: string | number | number[] | string[] | undefined;
                chainIds?: string | string[] | undefined;
                creatorTag?: string | undefined;
                live?: boolean | undefined;
                hideTestTokens?: string | undefined;
            };
            headers: unknown;
            response: {
                [x: string]: any;
                200: any;
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
