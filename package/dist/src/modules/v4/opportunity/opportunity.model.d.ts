import { type AprRecord } from "@/modules/v4/apr/apr.model";
import { type Campaign } from "@/modules/v4/campaign/campaign.model";
import type { Resource } from "@/modules/v4/prisma";
import { type Protocol } from "@/modules/v4/protocol/protocol.model";
import { type DailyRewardsRecord } from "@/modules/v4/reward/reward.model";
import { type Token } from "@/modules/v4/token/token.model";
import { type TvlRecord } from "@/modules/v4/tvl/tvl.model";
import type { ChainId } from "@sdk";
import { type Chain } from "../chain/chain.model";
import type { OpportunityRepository } from "./opportunity.repository";
/**
 * Opportunity
 * @description Target description of rewards campaigns
 * @see {@link Resource}
 */
export type Opportunity = Resource<"Opportunity", "mainProtocolId" | "manualOverrides", {
    depositUrl?: string;
    explorerAddress?: string;
    chain: Chain["model"];
    tokens: Token["model"][];
    lastCampaignCreatedAt: string;
    protocol?: Protocol["model"];
    aprRecord?: AprRecord["model"];
    tvlRecord?: TvlRecord["model"];
    rewardsRecord?: DailyRewardsRecord["model"];
    campaigns?: Omit<Campaign["model"], "manualOverrides">[];
}>;
export type LightOpportunityFromDB = Omit<Awaited<ReturnType<typeof OpportunityRepository.findUniqueOrThrow>>, "AprRecords" | "TvlRecords" | "DailyRewardsRecords" | "Campaigns">;
export type OpportunityUnique = {
    chainId: ChainId;
    type: string;
    identifier: string;
};
export declare const OpportunityResourceDto: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TNumber;
    type: import("@sinclair/typebox").TString;
    identifier: import("@sinclair/typebox").TString;
    name: import("@sinclair/typebox").TString;
    description: import("@sinclair/typebox").TString;
    howToSteps: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    status: import("@sinclair/typebox").TString;
    action: import("@sinclair/typebox").TString;
    tvl: import("@sinclair/typebox").TNumber;
    apr: import("@sinclair/typebox").TNumber;
    dailyRewards: import("@sinclair/typebox").TNumber;
    depositUrl: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    explorerAddress: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    distributionType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<{
        DUTCH_AUCTION: "DUTCH_AUCTION";
        FIX_REWARD_VALUE_PER_LIQUIDITY_VALUE: "FIX_REWARD_VALUE_PER_LIQUIDITY_VALUE";
        FIX_REWARD_AMOUNT_PER_LIQUIDITY_VALUE: "FIX_REWARD_AMOUNT_PER_LIQUIDITY_VALUE";
        FIX_REWARD_VALUE_PER_LIQUIDITY_AMOUNT: "FIX_REWARD_VALUE_PER_LIQUIDITY_AMOUNT";
        FIX_REWARD_AMOUNT_PER_LIQUIDITY_AMOUNT: "FIX_REWARD_AMOUNT_PER_LIQUIDITY_AMOUNT";
    }>>;
    tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    id: import("@sinclair/typebox").TString;
    tokens: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
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
    }>>;
    chain: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TNumber;
        name: import("@sinclair/typebox").TString;
        icon: import("@sinclair/typebox").TString;
    }>;
    aprRecord: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        cumulated: import("@sinclair/typebox").TNumber;
        timestamp: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBigInt, import("@sinclair/typebox").TString]>;
        breakdowns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            identifier: import("@sinclair/typebox").TString;
            type: import("@sinclair/typebox").TEnum<{
                CAMPAIGN: "CAMPAIGN";
                TOKEN: "TOKEN";
                PROTOCOL: "PROTOCOL";
            }>;
            value: import("@sinclair/typebox").TNumber;
        }>>;
    }>>;
    tvlRecord: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        total: import("@sinclair/typebox").TNumber;
        timestamp: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBigInt, import("@sinclair/typebox").TString]>;
        breakdowns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            identifier: import("@sinclair/typebox").TString;
            type: import("@sinclair/typebox").TEnum<{
                TOKEN: "TOKEN";
                PROTOCOL: "PROTOCOL";
            }>;
            value: import("@sinclair/typebox").TNumber;
        }>>;
    }>>;
    rewardsRecord: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
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
    }>>;
    lastCampaignCreatedAt: import("@sinclair/typebox").TString;
    protocol: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString;
        name: import("@sinclair/typebox").TString;
        icon: import("@sinclair/typebox").TString;
        tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
        description: import("@sinclair/typebox").TString;
        url: import("@sinclair/typebox").TString;
    }>, import("@sinclair/typebox").TNull]>>;
}>;
export declare const OpportunityWithCampaignsResourceDto: import("@sinclair/typebox").TObject<{
    status: import("@sinclair/typebox").TString;
    type: import("@sinclair/typebox").TString;
    name: import("@sinclair/typebox").TString;
    protocol: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString;
        name: import("@sinclair/typebox").TString;
        icon: import("@sinclair/typebox").TString;
        tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
        description: import("@sinclair/typebox").TString;
        url: import("@sinclair/typebox").TString;
    }>, import("@sinclair/typebox").TNull]>>;
    tokens: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
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
    }>>;
    description: import("@sinclair/typebox").TString;
    id: import("@sinclair/typebox").TString;
    tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    identifier: import("@sinclair/typebox").TString;
    chain: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TNumber;
        name: import("@sinclair/typebox").TString;
        icon: import("@sinclair/typebox").TString;
    }>;
    action: import("@sinclair/typebox").TString;
    distributionType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<{
        DUTCH_AUCTION: "DUTCH_AUCTION";
        FIX_REWARD_VALUE_PER_LIQUIDITY_VALUE: "FIX_REWARD_VALUE_PER_LIQUIDITY_VALUE";
        FIX_REWARD_AMOUNT_PER_LIQUIDITY_VALUE: "FIX_REWARD_AMOUNT_PER_LIQUIDITY_VALUE";
        FIX_REWARD_VALUE_PER_LIQUIDITY_AMOUNT: "FIX_REWARD_VALUE_PER_LIQUIDITY_AMOUNT";
        FIX_REWARD_AMOUNT_PER_LIQUIDITY_AMOUNT: "FIX_REWARD_AMOUNT_PER_LIQUIDITY_AMOUNT";
    }>>;
    chainId: import("@sinclair/typebox").TNumber;
    howToSteps: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    depositUrl: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    explorerAddress: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    tvl: import("@sinclair/typebox").TNumber;
    apr: import("@sinclair/typebox").TNumber;
    dailyRewards: import("@sinclair/typebox").TNumber;
    lastCampaignCreatedAt: import("@sinclair/typebox").TString;
    aprRecord: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        cumulated: import("@sinclair/typebox").TNumber;
        timestamp: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBigInt, import("@sinclair/typebox").TString]>;
        breakdowns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            identifier: import("@sinclair/typebox").TString;
            type: import("@sinclair/typebox").TEnum<{
                CAMPAIGN: "CAMPAIGN";
                TOKEN: "TOKEN";
                PROTOCOL: "PROTOCOL";
            }>;
            value: import("@sinclair/typebox").TNumber;
        }>>;
    }>>;
    tvlRecord: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        total: import("@sinclair/typebox").TNumber;
        timestamp: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBigInt, import("@sinclair/typebox").TString]>;
        breakdowns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            identifier: import("@sinclair/typebox").TString;
            type: import("@sinclair/typebox").TEnum<{
                TOKEN: "TOKEN";
                PROTOCOL: "PROTOCOL";
            }>;
            value: import("@sinclair/typebox").TNumber;
        }>>;
    }>>;
    rewardsRecord: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
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
    }>>;
    campaigns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
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
    }>>;
}>;
export declare const OpportunityUniqueDto: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString;
}>;
export declare const OpportunityUniqueUpdateDto: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString;
    campaignId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const AggregationResourceDto: import("@sinclair/typebox").TObject<{
    sum: import("@sinclair/typebox").TNumber;
}>;
export declare const GetOpportunitiesQueryDto: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    search: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    campaignId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    chainId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRegExp>;
    action: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    creatorAddress: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    test: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    point: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    minimumTvl: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRegExp>;
    identifier: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    campaigns: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    tokens: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    rewardTokenSymbol: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    sort: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRegExp>;
    order: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRegExp>;
    mainProtocolId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    page: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
export declare const GetOpportunityQueryDto: import("@sinclair/typebox").TObject<{
    test: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    point: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    campaigns: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
}>;
export declare const CreateOpportunityDto: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TNumber;
    type: import("@sinclair/typebox").TString;
    identifier: import("@sinclair/typebox").TString;
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    status: import("@sinclair/typebox").TEnum<{
        NONE: "NONE";
        PAST: "PAST";
        LIVE: "LIVE";
        SOON: "SOON";
    }>;
    action: import("@sinclair/typebox").TEnum<{
        POOL: "POOL";
        HOLD: "HOLD";
        DROP: "DROP";
        LEND: "LEND";
        BORROW: "BORROW";
        LONG: "LONG";
        SHORT: "SHORT";
        SWAP: "SWAP";
        INVALID: "INVALID";
    }>;
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    howToSteps: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
    tokens: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        address: import("@sinclair/typebox").TString;
        chainId: import("@sinclair/typebox").TNumber;
    }>>;
    protocols: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
    mainProtocol: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    depositUrl: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    explorerAddress: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
}>;
export declare const OpportunityAggregateFieldDto: import("@sinclair/typebox").TObject<{
    field: import("@sinclair/typebox").TUnion<import("@sinclair/typebox").TLiteral<"tvl" | "apr" | "dailyRewards">[]>;
}>;
export declare const OpportunityIdDto: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString;
}>;
export declare const OpportunityOverrideDto: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    howToSteps: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
    depositUrl: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    explorerAddress: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    action: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<{
        POOL: "POOL";
        HOLD: "HOLD";
        DROP: "DROP";
        LEND: "LEND";
        BORROW: "BORROW";
        LONG: "LONG";
        SHORT: "SHORT";
        SWAP: "SWAP";
        INVALID: "INVALID";
    }>>;
}>;
export declare const OpportunityDeleteOverrideDto: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TEnum<{
    name: "name";
    depositUrl: "depositUrl";
    explorerAddress: "explorerAddress";
    action: "action";
    description: "description";
    howToSteps: "howToSteps";
}>>;
export type GetOpportunitiesQueryModel = typeof GetOpportunitiesQueryDto.static;
export type GetOpportunityQueryModel = typeof GetOpportunityQueryDto.static;
export type CreateOpportunityModel = typeof CreateOpportunityDto.static;
export type OpportunityAggregateField = typeof OpportunityAggregateFieldDto.static;
export type OpportunityResourceModel = typeof OpportunityResourceDto.static;
export type OpportunityWithCampaignsResourceModel = typeof OpportunityWithCampaignsResourceDto.static;
export type OpportunityOverrideModel = typeof OpportunityOverrideDto.static;
export type OpportunityDeleteOverrideModel = typeof OpportunityDeleteOverrideDto.static;
