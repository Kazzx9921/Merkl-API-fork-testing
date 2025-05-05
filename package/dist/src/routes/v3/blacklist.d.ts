import type Elysia from "elysia";
export declare const query: import("@sinclair/typebox").TObject<{
    user: import("@sinclair/typebox").TString;
}>;
export declare const response: import("@sinclair/typebox").TObject<{
    isBlacklisted: import("@sinclair/typebox").TBoolean;
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
    blacklist: {
        get: {
            body: unknown;
            params: {};
            query: {
                user: string;
            };
            headers: unknown;
            response: {
                200: {
                    isBlacklisted: boolean;
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
