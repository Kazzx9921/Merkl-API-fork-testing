import { type Elysia } from "elysia";
/**
 * @deprecated - to remove in favor of new status page
 */
export declare const query: import("@sinclair/typebox").TObject<{
    onlyLive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
}>;
export declare const response: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TNumber>>;
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
    index: {
        get: {
            body: unknown;
            params: {};
            query: {
                onlyLive?: boolean | undefined;
            };
            headers: unknown;
            response: {
                [x: string]: any;
                200: any;
                readonly 400: {
                    message?: string | undefined;
                    error: string;
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
