import { type Campaign, type CampaignDynamicData } from "@sdk";
import { type Elysia } from "elysia";
export type CampaignsReturnType = {
    [chainId: number]: {
        [type_mainParameter: string]: {
            [campaignId: string]: CampaignDynamicData<Campaign>;
        };
    };
};
export declare const query: import("@sinclair/typebox").TObject<{
    AMMs: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
    chainIds: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>]>>;
    user: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    onlyLive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const response: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TObject<{
    merkleRoot: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    message: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    validRewardTokens: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        decimals: import("@sinclair/typebox").TNumber;
        minimumAmountPerEpoch: import("@sinclair/typebox").TNumber;
        symbol: import("@sinclair/typebox").TString;
        token: import("@sinclair/typebox").TString;
    }>>>;
    pools: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TObject<{
        alm: import("@sinclair/typebox").TObject<{}>;
        amm: import("@sinclair/typebox").TNumber;
        ammAlgo: import("@sinclair/typebox").TNumber;
        ammAlgoName: import("@sinclair/typebox").TString;
        ammName: import("@sinclair/typebox").TString;
        aprs: import("@sinclair/typebox").TObject<{}>;
        chainId: import("@sinclair/typebox").TNumber;
        decimalsToken0: import("@sinclair/typebox").TNumber;
        decimalsToken1: import("@sinclair/typebox").TNumber;
        disputeLive: import("@sinclair/typebox").TBoolean;
        distributionData: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnknown>;
        endOfDisputePeriod: import("@sinclair/typebox").TNumber;
        meanAPR: import("@sinclair/typebox").TNumber;
        pool: import("@sinclair/typebox").TString;
        poolBalanceToken0: import("@sinclair/typebox").TNumber;
        poolBalanceToken1: import("@sinclair/typebox").TNumber;
        poolFee: import("@sinclair/typebox").TNumber;
        poolTotalLiquidity: import("@sinclair/typebox").TNumber;
        rewardsPerToken: import("@sinclair/typebox").TObject<{}>;
        symbolToken0: import("@sinclair/typebox").TString;
        symbolToken1: import("@sinclair/typebox").TString;
        tick: import("@sinclair/typebox").TNumber;
        token0: import("@sinclair/typebox").TString;
        token1: import("@sinclair/typebox").TString;
        tvl: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TNull]>;
    }>>;
}>>;
export declare const merklRoute: ({ query, set }: any) => Promise<MerklAPIType>;
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
    merkl: {
        get: {
            body: unknown;
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                [x: string]: any;
                200: any;
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
