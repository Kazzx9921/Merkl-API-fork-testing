import { type Elysia } from "elysia";
/**
 * @deprecated - conversion to v4 done
 */
export declare const query: import("@sinclair/typebox").TObject<{
    campaignId: import("@sinclair/typebox").TString;
    chainId: import("@sinclair/typebox").TNumber;
    from: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    mainParameter: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
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
    rewardsReport: {
        get: {
            body: unknown;
            params: {};
            query: {
                from?: number | undefined;
                mainParameter?: string | undefined;
                to?: number | undefined;
                campaignId: string;
                chainId: number;
            };
            headers: unknown;
            response: {
                200: {
                    recipient: string;
                    reason: string;
                    rewardToken: string;
                    amount: string;
                }[];
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
