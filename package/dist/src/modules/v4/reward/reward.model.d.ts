import type { Resource } from "@/modules/v4/prisma";
import type { DistributionType } from "@db/api";
import { type Token } from "../token/token.model";
/**
 * Rewards Record
 * @description Describes one rewards value snapshot for an opportunity
 * @see {@link Resource}
 */
export type Reward = Resource<"Reward", "rewardTokenId" | "id", {
    breakdowns: RewardBreakdown["model"][];
    token: Token["model"];
    pending: bigint;
    claimed: bigint;
    amount: bigint;
}>;
/**
 * Rewards Breakdown
 * @description Describes one reward amount for one token and campaign
 * @see {@link Resource}
 */
export type RewardBreakdown = Resource<"RewardBreakdown", "id" | "rewardId" | "protocolId", {
    subCampaignId?: string;
}>;
/**
 * Daily Rewards
 * @description Describes rewards breakdown from the opportunity view
 * @see {@link Resource}
 */
export type DailyRewardsRecord = Resource<"DailyRewardsRecord", "opportunityId" | "id", {
    breakdowns: DailyRewardsBreakdown["model"][];
}>;
/**
 * Daily Rewards Breakdown
 * @description Describes one rewards value of a campaign
 * @see {@link Resource}
 */
export type DailyRewardsBreakdown = Resource<"DailyRewardsBreakdown", "id" | "dailyRewardsRecordId", {
    token: Token["model"];
    amount: bigint;
    distributionType?: DistributionType;
}>;
export declare const DailyRewardsBreakdownRecordResourceDto: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString;
    campaignId: import("@sinclair/typebox").TString;
    value: import("@sinclair/typebox").TNumber;
    dailyRewardsRecordId: import("@sinclair/typebox").TString;
    token: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString;
        name: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
        chainId: import("@sinclair/typebox").TNumber;
        address: import("@sinclair/typebox").TString;
        decimals: import("@sinclair/typebox").TNumber;
        icon: import("@sinclair/typebox").TString;
        verified: import("@sinclair/typebox").TBoolean;
        isTest: import("@sinclair/typebox").TBoolean;
        isPoint: import("@sinclair/typebox").TBoolean;
        isPreTGE: import("@sinclair/typebox").TBoolean;
        price: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TNull]>>;
        symbol: import("@sinclair/typebox").TString;
    }>;
    amount: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBigInt, import("@sinclair/typebox").TString]>;
}>;
export declare const DailyRewardsRecordResourceDto: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString;
    total: import("@sinclair/typebox").TNumber;
    timestamp: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBigInt, import("@sinclair/typebox").TString]>;
    breakdowns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString;
        campaignId: import("@sinclair/typebox").TString;
        value: import("@sinclair/typebox").TNumber;
        dailyRewardsRecordId: import("@sinclair/typebox").TString;
        token: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TString;
            name: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
            chainId: import("@sinclair/typebox").TNumber;
            address: import("@sinclair/typebox").TString;
            decimals: import("@sinclair/typebox").TNumber;
            icon: import("@sinclair/typebox").TString;
            verified: import("@sinclair/typebox").TBoolean;
            isTest: import("@sinclair/typebox").TBoolean;
            isPoint: import("@sinclair/typebox").TBoolean;
            isPreTGE: import("@sinclair/typebox").TBoolean;
            price: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TNull]>>;
            symbol: import("@sinclair/typebox").TString;
        }>;
        amount: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBigInt, import("@sinclair/typebox").TString]>;
    }>>;
}>;
export declare const CreateManyBreakdownDto: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    distributionChainId: import("@sinclair/typebox").TNumber;
    rewardToken: import("@sinclair/typebox").TString;
    campaignId: import("@sinclair/typebox").TString;
    root: import("@sinclair/typebox").TString;
    breakdowns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        recipient: import("@sinclair/typebox").TString;
        protocolId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        reason: import("@sinclair/typebox").TString;
        amount: import("@sinclair/typebox").TString;
        claimed: import("@sinclair/typebox").TString;
        pending: import("@sinclair/typebox").TString;
    }>>;
}>>;
declare const RewardDto: import("@sinclair/typebox").TObject<{
    root: import("@sinclair/typebox").TString;
    recipient: import("@sinclair/typebox").TString;
    distributionChainId: import("@sinclair/typebox").TNumber;
    rewardToken: import("@sinclair/typebox").TString;
    amount: import("@sinclair/typebox").TString;
    claimed: import("@sinclair/typebox").TString;
    pending: import("@sinclair/typebox").TString;
    proofs: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
}>;
export declare const CreateManyRewardDto: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    root: import("@sinclair/typebox").TString;
    recipient: import("@sinclair/typebox").TString;
    distributionChainId: import("@sinclair/typebox").TNumber;
    rewardToken: import("@sinclair/typebox").TString;
    amount: import("@sinclair/typebox").TString;
    claimed: import("@sinclair/typebox").TString;
    pending: import("@sinclair/typebox").TString;
    proofs: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
}>>;
export declare const RegisterClaimsDto: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TNumber;
    recipient: import("@sinclair/typebox").TString;
    token: import("@sinclair/typebox").TString;
    root: import("@sinclair/typebox").TString;
}>>;
declare const PendingDto: import("@sinclair/typebox").TObject<{
    recipient: import("@sinclair/typebox").TString;
    reason: import("@sinclair/typebox").TString;
    pending: import("@sinclair/typebox").TString;
}>;
export declare const UpdatePendingDto: import("@sinclair/typebox").TObject<{
    distributionChainId: import("@sinclair/typebox").TNumber;
    rewardToken: import("@sinclair/typebox").TString;
    campaignId: import("@sinclair/typebox").TString;
    root: import("@sinclair/typebox").TString;
    data: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        recipient: import("@sinclair/typebox").TString;
        reason: import("@sinclair/typebox").TString;
        pending: import("@sinclair/typebox").TString;
    }>>;
}>;
export declare const RewardsByUser: import("@sinclair/typebox").TObject<{
    address: import("@sinclair/typebox").TString;
}>;
export declare const RewardsByUserAndChain: import("@sinclair/typebox").TObject<{
    address: import("@sinclair/typebox").TString;
    chainId: import("@sinclair/typebox").TNumber;
}>;
export declare const UserRewardQueryDto: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TNumber;
    mainParameter: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    proof: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    rewardToken: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    user: import("@sinclair/typebox").TString;
}>;
export declare const RewardsPerChainDto: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TNumber;
}>;
export declare const CampaignIdWithoutPageDto: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TNumber;
    campaignIds: import("@sinclair/typebox").TTransform<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>, string[]>;
}>;
export declare const CampaignIdListDto: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TNumber;
    campaignIds: import("@sinclair/typebox").TTransform<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>, string[]>;
    page: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
export declare const CampaignIdDto: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TNumber;
    campaignId: import("@sinclair/typebox").TString;
    page: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
export declare const TokenIdDto: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TNumber;
    address: import("@sinclair/typebox").TString;
    campaignIds: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TTransform<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>, string[]>>;
    page: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
export declare const CampaignRewardsDto: import("@sinclair/typebox").TObject<{
    page: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
export declare const UserRewardV3Dto: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TObject<{
    symbol: import("@sinclair/typebox").TString;
    decimals: import("@sinclair/typebox").TNumber;
    accumulated: import("@sinclair/typebox").TString;
    unclaimed: import("@sinclair/typebox").TString;
    pending: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    reasons: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TObject<{
        accumulated: import("@sinclair/typebox").TString;
        unclaimed: import("@sinclair/typebox").TString;
        pending: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>;
    proof: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
}>>;
export declare const RewardV3Dto: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TObject<{
    campaignData: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TObject<{
        accumulated: import("@sinclair/typebox").TString;
        unclaimed: import("@sinclair/typebox").TString;
        pending: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        decimals: import("@sinclair/typebox").TNumber;
        mainParameter: import("@sinclair/typebox").TString;
        symbol: import("@sinclair/typebox").TString;
        token: import("@sinclair/typebox").TString;
    }>>>;
    tokenData: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TObject<{
        accumulated: import("@sinclair/typebox").TString;
        unclaimed: import("@sinclair/typebox").TString;
        pending: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        decimals: import("@sinclair/typebox").TNumber;
        proof: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
        symbol: import("@sinclair/typebox").TString;
    }>>;
}>>;
export declare const QueryTotalDailyRewardsSinceDto: import("@sinclair/typebox").TObject<{
    since: import("@sinclair/typebox").TDate;
    chainId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    protocol: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export type QueryTotalDailyRewardsSinceModel = typeof QueryTotalDailyRewardsSinceDto.static;
export type CreateManyRewardModel = typeof CreateManyRewardDto.static;
export type CreateManyBreakdownModel = typeof CreateManyBreakdownDto.static;
export type RewardEntity = typeof RewardDto.static;
export type RewardPerChainModel = typeof RewardsPerChainDto.static;
export type RegisterClaimsModel = typeof RegisterClaimsDto.static;
export type UpdatePendingModel = typeof UpdatePendingDto.static;
export type PendingEntity = typeof PendingDto.static;
export type CampaignIdWithoutPageModel = {
    chainId: number;
    campaignIds: string[];
};
export type CampaignIdListModel = typeof CampaignIdListDto.static;
export type CampaignIdModel = typeof CampaignIdDto.static;
export type TokenIdModel = typeof TokenIdDto.static;
export type UserRewardV3Model = typeof UserRewardV3Dto.static;
export type RewardV3Model = typeof RewardV3Dto.static;
export type BreakdownForTokenRaw = {
    amount: string;
    pending: string;
    claimed: string;
    recipient: string;
};
export type BreakdownForCampaignsRaw = BreakdownForTokenRaw & {
    campaignId: string;
    reason: string;
    rewardTokenAddress: string;
};
export {};
