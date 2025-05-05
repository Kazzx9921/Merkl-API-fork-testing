import type { Forwarder, ForwarderParameters } from "@sdk";
export interface BucketData {
    bucket_index: number;
    deposit: string;
    bucket_price: string;
}
export type UserPosition = {
    balance: number;
    token: string;
    origin: string;
    totalSupply: number;
    tvl: number;
};
export type PositionType = {
    [mainParameter: string]: {
        userPositions: UserPosition[];
        decimals: number;
        totalSupply: number;
        userTVL: number;
    };
};
export type FetchedCampaign = {
    computedtotalSupply: number;
    rewardToken: string;
    symbolRewardToken: string;
    tvl: number;
    decimals: number;
    totalSupplyTargetToken: number;
    amount: number;
    forwarders?: {
        [address: string]: ForwarderParameters<Forwarder>;
    };
};
export type Res = {
    userPositions: UserPosition[];
    decimals: number;
    totalSupply: number;
    userTVL: number;
};
export type CLAMMPosition = {
    userPositions: {
        almAddress: string;
        balance0: number;
        balance1: number;
        id: string;
        inRangeLiquidity: number;
        lowerTick: number;
        origin: number;
        totalLiquidity: number;
        tvl: number;
        upperTick: number;
    }[];
    tick: number;
    userTVL: number;
    userBalanceToken0: number;
    userBalanceToken1: number;
    userTotalLiquidity: number;
    userInRangeLiquidity: number;
};
export type AjnaFetchedCampaign = FetchedCampaign & {
    subtype: number;
    poolId: string;
    quoteToken: string;
};
export type BadgerFetchedCampaign = FetchedCampaign & {
    targetToken: string;
};
export type MorphoFetchedCampaign = FetchedCampaign & {
    targetToken: string;
    subtype: number;
    marketId?: string;
};
export type EigenLayerFetchedCampaign = FetchedCampaign & {
    targetToken: string;
};
