import { type Elysia } from "elysia";
/**
 * @deprecated - conversion to v4 done
 */
type CampaignsForMainParameterReturnType = {
    campaignId: string;
    campaignType: number;
    rewardToken: string;
    rewardTokenSymbol: string;
    amountDecimal: number;
    startTimestamp: number;
    endTimestamp: number;
}[];
export declare const query: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TNumber;
    mainParameter: import("@sinclair/typebox").TString;
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
    campaignsForMainParameter: {
        get: {
            body: unknown;
            params: {};
            query: {
                chainId: number;
                mainParameter: string;
            };
            headers: unknown;
            response: {
                200: CampaignsForMainParameterReturnType;
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
