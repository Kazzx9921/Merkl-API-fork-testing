import type Elysia from "elysia";
export declare const response: import("@sinclair/typebox").TObject<{
    success: import("@sinclair/typebox").TBoolean;
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
    health: {
        get: {
            body: unknown;
            params: {};
            query: {};
            headers: unknown;
            response: {
                200: {
                    success: boolean;
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
