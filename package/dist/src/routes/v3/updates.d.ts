import type Elysia from "elysia";
/**
 * @deprecated - to remove in favor of new status page
 */
export type UpdatesT = {
    [chainId: number]: {
        [campaignId: string]: number;
    };
};
export declare const query: import("@sinclair/typebox").TObject<{}>;
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
    updates: {
        get: {
            body: unknown;
            params: {};
            query: {};
            headers: unknown;
            response: {
                200: {
                    [x: number]: {
                        [campaignId: string]: number;
                    };
                };
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
