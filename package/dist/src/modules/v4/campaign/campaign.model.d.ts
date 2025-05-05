import type { Resource } from "@/modules/v4/prisma";
import { type Token } from "@/modules/v4/token/token.model";
import type { CampaignParameters, Campaign as CampaignType } from "@sdk";
import { type Chain } from "../chain/chain.model";
import { type Status as StatusModel } from "../status/status.model";
/**
 * Campaign
 * @description Target description of rewards campaigns
 * @see {@link Resource}
 */
export type Campaign = Resource<"Campaign", "opportunityId" | "rewardTokenId", {
    chain: Chain["model"];
    rewardToken: Token["model"];
    distributionChain?: Chain["model"];
    campaignStatus?: StatusModel["model"];
    creator?: {
        address: string;
        tags?: string[];
        creatorId: string | null;
    };
    description?: string;
    endTimestamp: number;
    startTimestamp: number;
    createdAt: string;
    rootCampaignId?: string;
    parentCampaignId?: string;
}>;
export type CampaignWithParams<C extends CampaignType = CampaignType> = Campaign["model"] & {
    params: CampaignParameters<C>["campaignParameters"];
};
export declare const CampaignUniqueDto: import("@sinclair/typebox").TObject<{
    distributionChain: import("@sinclair/typebox").TNumber;
    campaignId: import("@sinclair/typebox").TString;
}>;
export declare const CampaignsDto: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
export declare const CampaignResourceDto: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString;
    computeChainId: import("@sinclair/typebox").TNumber;
    distributionChainId: import("@sinclair/typebox").TNumber;
    campaignId: import("@sinclair/typebox").TString;
    type: import("@sinclair/typebox").TString;
    subType: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TNull]>;
    rewardTokenId: import("@sinclair/typebox").TString;
    amount: import("@sinclair/typebox").TString;
    opportunityId: import("@sinclair/typebox").TString;
    startTimestamp: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNumber]>;
    endTimestamp: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNumber]>;
    creatorAddress: import("@sinclair/typebox").TString;
    creator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        address: import("@sinclair/typebox").TString;
        tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
        creatorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
    }>>;
    params: import("@sinclair/typebox").TAny;
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    chain: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TNumber;
        name: import("@sinclair/typebox").TString;
        icon: import("@sinclair/typebox").TString;
    }>;
    rewardToken: import("@sinclair/typebox").TObject<{
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
    distributionChain: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TNumber;
        name: import("@sinclair/typebox").TString;
        icon: import("@sinclair/typebox").TString;
    }>>;
    campaignStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        campaignId: import("@sinclair/typebox").TString;
        computedUntil: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNumber]>;
        processingStarted: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNumber]>;
        status: import("@sinclair/typebox").TString;
        error: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        details: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>>;
    createdAt: import("@sinclair/typebox").TString;
    rootCampaignId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    parentCampaignId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const CampaignConfigMinimal: import("@sinclair/typebox").TObject<{
    computeChainId: import("@sinclair/typebox").TNumber;
    params: import("@sinclair/typebox").TAny;
    type: import("@sinclair/typebox").TString;
    subType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    distributionChainId: import("@sinclair/typebox").TNumber;
    endTimestamp: import("@sinclair/typebox").TNumber;
    startTimestamp: import("@sinclair/typebox").TNumber;
    rewardToken: import("@sinclair/typebox").TString;
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    campaignId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    amount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    creatorAddress: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const CreateCampaignDto: import("@sinclair/typebox").TObject<{
    computeChainId: import("@sinclair/typebox").TNumber;
    chainId: import("@sinclair/typebox").TNumber;
    campaignId: import("@sinclair/typebox").TString;
    rootCampaignId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    parentCampaignId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    identifier: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    creator: import("@sinclair/typebox").TString;
    type: import("@sinclair/typebox").TNumber;
    subType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    rewardTokenAddress: import("@sinclair/typebox").TString;
    amount: import("@sinclair/typebox").TString;
    opportunityIdentifier: import("@sinclair/typebox").TString;
    startTimestamp: import("@sinclair/typebox").TString;
    endTimestamp: import("@sinclair/typebox").TString;
    params: import("@sinclair/typebox").TString;
    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
}>;
export declare const UpdateCampaignDto: import("@sinclair/typebox").TObject<{
    distributionChain: import("@sinclair/typebox").TNumber;
    campaignId: import("@sinclair/typebox").TString;
    opportunityIdentifier: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const UpdateCampaignCreatorDto: import("@sinclair/typebox").TObject<{
    distributionChain: import("@sinclair/typebox").TNumber;
    campaignId: import("@sinclair/typebox").TString;
    creatorAddress: import("@sinclair/typebox").TString;
}>;
export declare const RemoveManualOverrideDto: import("@sinclair/typebox").TObject<{
    distributionChain: import("@sinclair/typebox").TNumber;
    campaignId: import("@sinclair/typebox").TString;
    field: import("@sinclair/typebox").TEnum<{
        opportunityId: "opportunityId";
        creatorAddress: "creatorAddress";
    }>;
}>;
export declare const UpdateMetaDataCampaignDto: import("@sinclair/typebox").TObject<{
    distributionChain: import("@sinclair/typebox").TNumber;
    campaignId: import("@sinclair/typebox").TString;
    url: import("@sinclair/typebox").TString;
}>;
export declare const GetCampaignQueryDto: import("@sinclair/typebox").TObject<{
    creatorTag: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    creatorAddress: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    creatorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    chainId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    distributionChainIds: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
    type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    types: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
    subType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    campaignId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    mainParameter: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    tokenSymbol: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    tokenAddress: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    test: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    point: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    opportunityId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<{
        NONE: "NONE";
        PAST: "PAST";
        LIVE: "LIVE";
        SOON: "SOON";
    }>>;
    startTimestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    endTimestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    withOpportunity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    createdAfter: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TDate, import("@sinclair/typebox").TNull]>>;
    rootCampaignId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    parentCampaignId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    page: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
export type CampaignUnique = typeof CampaignUniqueDto.static;
export type CreateCampaignModel = typeof CreateCampaignDto.static & {
    id: string;
};
export type UpdateCampaignModel = typeof UpdateCampaignDto.static & {
    id: string;
};
export type UpdateCampaignCreatorModel = typeof UpdateCampaignCreatorDto.static;
export type UpdateMetaDataCampaignModel = typeof UpdateMetaDataCampaignDto.static & {
    url: string;
};
export type extendedUpdateCampaignModel = UpdateCampaignModel & {
    opportunityId: string;
};
export type GetCampaignQueryModel = typeof GetCampaignQueryDto.static;
export type CampaignConfigMinimalModel = typeof CampaignConfigMinimal.static;
