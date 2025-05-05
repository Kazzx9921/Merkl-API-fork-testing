import type Elysia from "elysia";
export declare const query: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TNumber;
    config: import("@sinclair/typebox").TString;
    signature: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
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
    payload: {
        get: {
            body: unknown;
            params: {};
            query: {
                signature?: any;
                config: string;
                chainId: number;
            };
            headers: unknown;
            response: {
                200: {
                    message: any;
                    name: string;
                    args?: undefined;
                    parsedCampaign?: undefined;
                    payload?: undefined;
                    fee?: undefined;
                } | {
                    args: any;
                    parsedCampaign: any;
                    payload: any;
                    fee: string | undefined;
                    message?: undefined;
                    name?: undefined;
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
