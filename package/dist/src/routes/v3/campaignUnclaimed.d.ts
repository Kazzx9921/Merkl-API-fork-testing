import { type Elysia } from "elysia";
/**
 * @deprecated - conversion to v4 done
 */
export declare const query: import("@sinclair/typebox").TObject<{
    campaignIds: import("@sinclair/typebox").TString;
    chainId: import("@sinclair/typebox").TNumber;
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
    campaignUnclaimed: {
        get: {
            body: unknown;
            params: {};
            query: {
                chainId: number;
                campaignIds: string;
            };
            headers: unknown;
            response: {
                200: {
                    [x: string]: string;
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
