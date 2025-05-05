import { type Elysia } from "elysia";
export declare const query: import("@sinclair/typebox").TObject<{
    creatorTag: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    chainIds: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
    byReason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    user: import("@sinclair/typebox").TString;
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
    claims: {
        get: {
            body: unknown;
            params: {};
            query: {
                chainIds?: string | string[] | undefined;
                creatorTag?: string | undefined;
                byReason?: boolean | undefined;
                user: string;
            };
            headers: unknown;
            response: {
                200: {
                    message: string;
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
