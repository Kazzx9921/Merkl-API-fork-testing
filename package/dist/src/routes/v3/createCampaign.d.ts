import type Elysia from "elysia";
export declare const query: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TNumber;
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
    createCampaign: {
        get: {
            body: unknown;
            params: {};
            query: {
                chainId: number;
                user: string;
            };
            headers: unknown;
            response: {
                200: {
                    feeRebate: number | undefined;
                    message: any;
                    signed: boolean | undefined;
                    validRewardTokens: any;
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
