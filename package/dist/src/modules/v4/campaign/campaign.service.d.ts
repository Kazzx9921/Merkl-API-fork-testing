import type { CampaignConfigMinimalModel, CampaignUnique, CampaignWithParams, CreateCampaignModel, GetCampaignQueryModel, UpdateCampaignCreatorModel, UpdateCampaignModel, UpdateMetaDataCampaignModel } from "@/modules/v4/campaign/campaign.model";
import type { CampaignManualOverride } from "@db/api";
import { type CampaignParameters, Campaign as CampaignType, type ChainId } from "@sdk";
import type { GetCampaignComputedValueModel } from "../computedValue/computedValue.model";
import { CampaignRepository } from "./campaign.repository";
export declare abstract class CampaignService {
    static hashId(campaign: CampaignUnique): string;
    static splitIdOrThrow(chainAndCampaignId: `${number}-${string}` | string): CampaignUnique;
    static getPastCampaigns(query?: {
        computeChainId?: number;
        type?: string;
        creatorAddress?: string;
    }): Promise<({
        Opportunity: {
            status: import("@db/api").$Enums.Status;
            type: string;
            name: string;
            description: string;
            id: string;
            tags: string[];
            identifier: string;
            action: import("@db/api").$Enums.OpportunityAction;
            manualOverrides: import("@db/api").$Enums.OpportunityManualOverride[];
            chainId: number;
            howToSteps: string[];
            depositUrl: string | null;
            explorerAddress: string | null;
            mainProtocolId: string | null;
            tvl: number;
            apr: number;
            dailyRewards: number;
            lastCampaignCreatedAt: Date;
        };
    } & {
        type: string;
        description: string | null;
        id: string;
        params: import("database/api/.generated/runtime/library").JsonValue;
        subType: number | null;
        computeChainId: number;
        distributionChainId: number;
        campaignId: string;
        distributionType: import("@db/api").$Enums.DistributionType;
        rewardTokenId: string;
        amount: string;
        opportunityId: string;
        startTimestamp: bigint;
        endTimestamp: bigint;
        creatorAddress: string;
        manualOverrides: import("@db/api").$Enums.CampaignManualOverride[];
        createdAt: Date;
        rootCampaignId: string | null;
        parentCampaignId: string | null;
    })[]>;
    static getFutureCampaigns(query?: {
        computeChainId?: number;
        type?: string;
        creatorAddress?: string;
    }): Promise<({
        Opportunity: {
            status: import("@db/api").$Enums.Status;
            type: string;
            name: string;
            description: string;
            id: string;
            tags: string[];
            identifier: string;
            action: import("@db/api").$Enums.OpportunityAction;
            manualOverrides: import("@db/api").$Enums.OpportunityManualOverride[];
            chainId: number;
            howToSteps: string[];
            depositUrl: string | null;
            explorerAddress: string | null;
            mainProtocolId: string | null;
            tvl: number;
            apr: number;
            dailyRewards: number;
            lastCampaignCreatedAt: Date;
        };
    } & {
        type: string;
        description: string | null;
        id: string;
        params: import("database/api/.generated/runtime/library").JsonValue;
        subType: number | null;
        computeChainId: number;
        distributionChainId: number;
        campaignId: string;
        distributionType: import("@db/api").$Enums.DistributionType;
        rewardTokenId: string;
        amount: string;
        opportunityId: string;
        startTimestamp: bigint;
        endTimestamp: bigint;
        creatorAddress: string;
        manualOverrides: import("@db/api").$Enums.CampaignManualOverride[];
        createdAt: Date;
        rootCampaignId: string | null;
        parentCampaignId: string | null;
    })[]>;
    static getLiveCampaigns(query?: {
        distributionChainId?: number;
        computeChainId?: number;
        type?: string;
        creatorAddress?: string;
    }): Promise<({
        RewardToken: {
            symbol: string;
            name: string | null;
            id: string;
            icon: string;
            address: string;
            chainId: number;
            decimals: number;
            displaySymbol: string;
            verified: boolean;
            isTest: boolean;
            isPoint: boolean;
            isPreTGE: boolean;
            isNative: boolean;
            price: number | null;
        };
        Opportunity: {
            status: import("@db/api").$Enums.Status;
            type: string;
            name: string;
            description: string;
            id: string;
            tags: string[];
            identifier: string;
            action: import("@db/api").$Enums.OpportunityAction;
            manualOverrides: import("@db/api").$Enums.OpportunityManualOverride[];
            chainId: number;
            howToSteps: string[];
            depositUrl: string | null;
            explorerAddress: string | null;
            mainProtocolId: string | null;
            tvl: number;
            apr: number;
            dailyRewards: number;
            lastCampaignCreatedAt: Date;
        };
        RewardBreakdown: ({
            Reward: {
                pending: string;
                id: string;
                rewardTokenId: string;
                amount: string;
                root: string;
                recipient: string;
                claimed: string;
                proofs: string[];
            };
        } & {
            reason: string;
            pending: string;
            id: string;
            campaignId: string;
            amount: string;
            claimed: string;
            protocolId: string | null;
            rewardId: string;
            subCampaignId: string | null;
        })[];
    } & {
        type: string;
        description: string | null;
        id: string;
        params: import("database/api/.generated/runtime/library").JsonValue;
        subType: number | null;
        computeChainId: number;
        distributionChainId: number;
        campaignId: string;
        distributionType: import("@db/api").$Enums.DistributionType;
        rewardTokenId: string;
        amount: string;
        opportunityId: string;
        startTimestamp: bigint;
        endTimestamp: bigint;
        creatorAddress: string;
        manualOverrides: import("@db/api").$Enums.CampaignManualOverride[];
        createdAt: Date;
        rootCampaignId: string | null;
        parentCampaignId: string | null;
    })[]>;
    static countLives(query?: {
        distributionChainId?: number;
        computeChainId?: number;
        type?: string;
    }): Promise<number>;
    static create(body: Omit<CreateCampaignModel, "id">, dryRun?: boolean): Promise<{
        type: string;
        description: string | null;
        id: string;
        params: import("database/api/.generated/runtime/library").JsonValue;
        subType: number | null;
        computeChainId: number;
        distributionChainId: number;
        campaignId: string;
        distributionType: import("@db/api").$Enums.DistributionType;
        rewardTokenId: string;
        amount: string;
        opportunityId: string;
        startTimestamp: bigint;
        endTimestamp: bigint;
        creatorAddress: string;
        manualOverrides: import("@db/api").$Enums.CampaignManualOverride[];
        createdAt: Date;
        rootCampaignId: string | null;
        parentCampaignId: string | null;
    } | ({
        Tokens: {
            symbol: string;
            name: string | null;
            id: string;
            icon: string;
            address: string;
            chainId: number;
            decimals: number;
            displaySymbol: string;
            verified: boolean;
            isTest: boolean;
            isPoint: boolean;
            isPreTGE: boolean;
            isNative: boolean;
            price: number | null;
        }[];
        Protocols: {
            url: string;
            name: string;
            description: string;
            id: string;
            tags: string[];
            icon: string;
        }[];
    } & {
        status: import("@db/api").$Enums.Status;
        type: string;
        name: string;
        description: string;
        id: string;
        tags: string[];
        identifier: string;
        action: import("@db/api").$Enums.OpportunityAction;
        manualOverrides: import("@db/api").$Enums.OpportunityManualOverride[];
        chainId: number;
        howToSteps: string[];
        depositUrl: string | null;
        explorerAddress: string | null;
        mainProtocolId: string | null;
        tvl: number;
        apr: number;
        dailyRewards: number;
        lastCampaignCreatedAt: Date;
    }) | {
        id: string;
        chainId: number;
        type: string;
        identifier: string;
        name: string;
        status: "PAST" | "LIVE" | "SOON";
        action: OpportunityAction;
        tokens: ({
            symbol: string;
            name: string | null;
            id: string;
            icon: string;
            address: string;
            chainId: number;
            decimals: number;
            verified: boolean;
            isTest: boolean;
            isPoint: boolean;
            isPreTGE: boolean;
            isNative: boolean;
        } & {
            price?: number | null | undefined;
        })[];
        mainProtocol: "splice" | "reserve" | "morpho" | "quickswap" | "euler" | "aura" | "poolside" | "gearbox" | "filament" | "fluid" | "compound" | "ionic" | "layerbank" | "moonwell" | "fraxlend" | "fenix" | "ra" | "syncswap" | "beefy" | "aerodrome" | "velodrome" | "curve" | "toros" | "akron" | "enzyme" | "dragonswap" | "koi" | "rfx" | "woofi" | "pendle" | "zkSwapThreePool" | "maha" | "tempest" | "holdstation" | "venus" | "reactor_fusion" | "vicuna" | "curveNPool" | "satlayer" | "veda" | "cian" | "concrete" | "hourglass" | "katana" | "gamma" | "stability" | "termmax" | "uniswap" | "ambient" | "arthswap" | "base-swap" | "camelot" | "crust" | "horiza" | "izumi" | "kim" | "pancake-swap" | "ramses" | "retro" | "stryke" | "sushi-swap" | "swapr" | "thruster" | "voltage" | "zero" | "supswap" | "zk-swap" | "thirdtrade" | "swap-x" | "balancer" | "cross_curve" | "neptune" | "maverick" | "trader-joe" | "hanji" | "radiant" | "aave" | "ironclad" | "sturdy" | "frax" | "silo" | "dolomite" | "badger" | "ajna" | "ion" | "eigenlayer" | "vest" | "zerolend" | "lnd" | "hyperdrive" | "oku" | "kyo" | "sonex" | "lendle" | "tako-tako" | "equalizer" | "spectra" | "beraborrow" | "superlend" | "avalon" | "iguana" | "xlend" | "sake" | "sonicmarket" | "angles" | "bunni" | "beratrax" | "yei" | "gammaswap" | "uranium" | "puffer" | undefined;
        description: string;
        howToSteps: string[];
        depositUrl: string | undefined;
        explorerAddress: string | undefined;
        tags: string[];
    } | undefined>;
    /**
     * @dev back-office function
     * @dev deprecated should be replaced with a manual override
     */
    static updateMetaData(campaign: Omit<UpdateMetaDataCampaignModel, "id">): Promise<{
        type: string;
        description: string | null;
        id: string;
        params: import("database/api/.generated/runtime/library").JsonValue;
        subType: number | null;
        computeChainId: number;
        distributionChainId: number;
        campaignId: string;
        distributionType: import("@db/api").$Enums.DistributionType;
        rewardTokenId: string;
        amount: string;
        opportunityId: string;
        startTimestamp: bigint;
        endTimestamp: bigint;
        creatorAddress: string;
        manualOverrides: import("@db/api").$Enums.CampaignManualOverride[];
        createdAt: Date;
        rootCampaignId: string | null;
        parentCampaignId: string | null;
    }>;
    /**
     * @dev back-office function for manual overrides
     */
    static updateCreator(campaign: UpdateCampaignCreatorModel): Promise<void>;
    /**
     * @dev back-office function
     */
    static moveToOpportunity(data: Omit<UpdateCampaignModel, "id">, upsert?: boolean): Promise<string>;
    /**
     * Get the list of campaigns satisfying the query
     * @param query
     * @returns A list of campaigns
     */
    static findMany(query: GetCampaignQueryModel): Promise<{
        params: any;
        chain: {
            name: string;
            id: number;
            icon: string;
        };
        endTimestamp: number;
        startTimestamp: number;
        rewardToken: {
            symbol: string;
            name: string | null;
            id: string;
            icon: string;
            address: string;
            chainId: number;
            decimals: number;
            verified: boolean;
            isTest: boolean;
            isPoint: boolean;
            isPreTGE: boolean;
            isNative: boolean;
        } & {
            price?: number | null | undefined;
        };
        distributionChain: {
            name: string;
            id: number;
            icon: string;
        } | undefined;
        campaignStatus: {
            computedUntil: number;
            processingStarted: number;
            status: import("@db/api").$Enums.RunStatus;
            error: string;
            details: import("database/api/.generated/runtime/library").JsonValue;
            campaignId: string;
        } | undefined;
        creatorAddress: string;
        creator: {
            tags: string[];
            address: string;
            creatorId: string | null;
        };
        createdAt: string;
        description: string | undefined;
        parentCampaignId: string | undefined;
        rootCampaignId: string | undefined;
        Opportunity: {
            status: import("@db/api").$Enums.Status;
            type: string;
            name: string;
            description: string;
            id: string;
            tags: string[];
            identifier: string;
            action: import("@db/api").$Enums.OpportunityAction;
            manualOverrides: import("@db/api").$Enums.OpportunityManualOverride[];
            chainId: number;
            howToSteps: string[];
            depositUrl: string | null;
            explorerAddress: string | null;
            mainProtocolId: string | null;
            tvl: number;
            apr: number;
            dailyRewards: number;
            lastCampaignCreatedAt: Date;
        };
        type: string;
        id: string;
        subType: number | null;
        computeChainId: number;
        distributionChainId: number;
        campaignId: string;
        distributionType: import("@db/api").$Enums.DistributionType;
        rewardTokenId: string;
        amount: string;
        opportunityId: string;
    }[]>;
    static findAndGroupByChains(query: GetCampaignQueryModel): Promise<Map<number, {
        params: any;
        chain: {
            name: string;
            id: number;
            icon: string;
        };
        endTimestamp: number;
        startTimestamp: number;
        rewardToken: {
            symbol: string;
            name: string | null;
            id: string;
            icon: string;
            address: string;
            chainId: number;
            decimals: number;
            verified: boolean;
            isTest: boolean;
            isPoint: boolean;
            isPreTGE: boolean;
            isNative: boolean;
        } & {
            price?: number | null | undefined;
        };
        distributionChain: {
            name: string;
            id: number;
            icon: string;
        } | undefined;
        campaignStatus: {
            computedUntil: number;
            processingStarted: number;
            status: import("@db/api").$Enums.RunStatus;
            error: string;
            details: import("database/api/.generated/runtime/library").JsonValue;
            campaignId: string;
        } | undefined;
        creatorAddress: string;
        creator: {
            tags: string[];
            address: string;
            creatorId: string | null;
        };
        createdAt: string;
        description: string | undefined;
        parentCampaignId: string | undefined;
        rootCampaignId: string | undefined;
        Opportunity: {
            status: import("@db/api").$Enums.Status;
            type: string;
            name: string;
            description: string;
            id: string;
            tags: string[];
            identifier: string;
            action: import("@db/api").$Enums.OpportunityAction;
            manualOverrides: import("@db/api").$Enums.OpportunityManualOverride[];
            chainId: number;
            howToSteps: string[];
            depositUrl: string | null;
            explorerAddress: string | null;
            mainProtocolId: string | null;
            tvl: number;
            apr: number;
            dailyRewards: number;
            lastCampaignCreatedAt: Date;
        };
        type: string;
        id: string;
        subType: number | null;
        computeChainId: number;
        distributionChainId: number;
        campaignId: string;
        distributionType: import("@db/api").$Enums.DistributionType;
        rewardTokenId: string;
        amount: string;
        opportunityId: string;
    }[]>>;
    static countByChains(query: GetCampaignQueryModel): Promise<Record<string, number>>;
    static findAndGroupByTypes(query: GetCampaignQueryModel): Promise<Map<string, {
        params: any;
        chain: {
            name: string;
            id: number;
            icon: string;
        };
        endTimestamp: number;
        startTimestamp: number;
        rewardToken: {
            symbol: string;
            name: string | null;
            id: string;
            icon: string;
            address: string;
            chainId: number;
            decimals: number;
            verified: boolean;
            isTest: boolean;
            isPoint: boolean;
            isPreTGE: boolean;
            isNative: boolean;
        } & {
            price?: number | null | undefined;
        };
        distributionChain: {
            name: string;
            id: number;
            icon: string;
        } | undefined;
        campaignStatus: {
            computedUntil: number;
            processingStarted: number;
            status: import("@db/api").$Enums.RunStatus;
            error: string;
            details: import("database/api/.generated/runtime/library").JsonValue;
            campaignId: string;
        } | undefined;
        creatorAddress: string;
        creator: {
            tags: string[];
            address: string;
            creatorId: string | null;
        };
        createdAt: string;
        description: string | undefined;
        parentCampaignId: string | undefined;
        rootCampaignId: string | undefined;
        Opportunity: {
            status: import("@db/api").$Enums.Status;
            type: string;
            name: string;
            description: string;
            id: string;
            tags: string[];
            identifier: string;
            action: import("@db/api").$Enums.OpportunityAction;
            manualOverrides: import("@db/api").$Enums.OpportunityManualOverride[];
            chainId: number;
            howToSteps: string[];
            depositUrl: string | null;
            explorerAddress: string | null;
            mainProtocolId: string | null;
            tvl: number;
            apr: number;
            dailyRewards: number;
            lastCampaignCreatedAt: Date;
        };
        type: string;
        id: string;
        subType: number | null;
        computeChainId: number;
        distributionChainId: number;
        campaignId: string;
        distributionType: import("@db/api").$Enums.DistributionType;
        rewardTokenId: string;
        amount: string;
        opportunityId: string;
    }[]>>;
    static countByTypes(query: GetCampaignQueryModel): Promise<Record<string, number>>;
    static findAndGroupByProtocols(query: GetCampaignQueryModel): Promise<Map<string | null, {
        params: any;
        chain: {
            name: string;
            id: number;
            icon: string;
        };
        endTimestamp: number;
        startTimestamp: number;
        rewardToken: {
            symbol: string;
            name: string | null;
            id: string;
            icon: string;
            address: string;
            chainId: number;
            decimals: number;
            verified: boolean;
            isTest: boolean;
            isPoint: boolean;
            isPreTGE: boolean;
            isNative: boolean;
        } & {
            price?: number | null | undefined;
        };
        distributionChain: {
            name: string;
            id: number;
            icon: string;
        } | undefined;
        campaignStatus: {
            computedUntil: number;
            processingStarted: number;
            status: import("@db/api").$Enums.RunStatus;
            error: string;
            details: import("database/api/.generated/runtime/library").JsonValue;
            campaignId: string;
        } | undefined;
        creatorAddress: string;
        creator: {
            tags: string[];
            address: string;
            creatorId: string | null;
        };
        createdAt: string;
        description: string | undefined;
        parentCampaignId: string | undefined;
        rootCampaignId: string | undefined;
        Opportunity: {
            status: import("@db/api").$Enums.Status;
            type: string;
            name: string;
            description: string;
            id: string;
            tags: string[];
            identifier: string;
            action: import("@db/api").$Enums.OpportunityAction;
            manualOverrides: import("@db/api").$Enums.OpportunityManualOverride[];
            chainId: number;
            howToSteps: string[];
            depositUrl: string | null;
            explorerAddress: string | null;
            mainProtocolId: string | null;
            tvl: number;
            apr: number;
            dailyRewards: number;
            lastCampaignCreatedAt: Date;
        };
        type: string;
        id: string;
        subType: number | null;
        computeChainId: number;
        distributionChainId: number;
        campaignId: string;
        distributionType: import("@db/api").$Enums.DistributionType;
        rewardTokenId: string;
        amount: string;
        opportunityId: string;
    }[]>>;
    static countByProtocols(query: GetCampaignQueryModel): Promise<Record<string, number>>;
    static countBy<T>(campaignsMap: Map<T, ReturnType<(typeof CampaignService)["format"]>[]>): Record<string, number>;
    /**
     * Counts the number of campaigns that complies to query
     * @description used for pagination purposes
     * @param query
     * @returns the number of campaigns
     */
    static countMany(query: GetCampaignQueryModel): Promise<number>;
    static checkIfExist(campaign: CampaignUnique | string): Promise<boolean>;
    static findUnique(campaign: CampaignUnique | string): Promise<({
        ComputeChain: {
            name: string;
            id: number;
            icon: string;
        };
        DistributionChain: {
            name: string;
            id: number;
            icon: string;
        };
        RewardToken: {
            symbol: string;
            name: string | null;
            id: string;
            icon: string;
            address: string;
            chainId: number;
            decimals: number;
            displaySymbol: string;
            verified: boolean;
            isTest: boolean;
            isPoint: boolean;
            isPreTGE: boolean;
            isNative: boolean;
            price: number | null;
        };
        Creator: {
            tags: string[];
            address: string;
            creatorId: string | null;
        };
        CampaignStatus: {
            status: import("@db/api").$Enums.RunStatus;
            error: string;
            details: import("database/api/.generated/runtime/library").JsonValue;
            campaignId: string;
            computedUntil: bigint;
            processingStarted: bigint;
        }[];
    } & {
        type: string;
        description: string | null;
        id: string;
        params: import("database/api/.generated/runtime/library").JsonValue;
        subType: number | null;
        computeChainId: number;
        distributionChainId: number;
        campaignId: string;
        distributionType: import("@db/api").$Enums.DistributionType;
        rewardTokenId: string;
        amount: string;
        opportunityId: string;
        startTimestamp: bigint;
        endTimestamp: bigint;
        creatorAddress: string;
        manualOverrides: import("@db/api").$Enums.CampaignManualOverride[];
        createdAt: Date;
        rootCampaignId: string | null;
        parentCampaignId: string | null;
    }) | null>;
    static findUniqueOrThrow(campaign: CampaignUnique | string, withOpportunity?: boolean): Promise<{
        ComputeChain: {
            name: string;
            id: number;
            icon: string;
        };
        DistributionChain: {
            name: string;
            id: number;
            icon: string;
        };
        RewardToken: {
            symbol: string;
            name: string | null;
            id: string;
            icon: string;
            address: string;
            chainId: number;
            decimals: number;
            displaySymbol: string;
            verified: boolean;
            isTest: boolean;
            isPoint: boolean;
            isPreTGE: boolean;
            isNative: boolean;
            price: number | null;
        };
        Opportunity: {
            status: import("@db/api").$Enums.Status;
            type: string;
            name: string;
            description: string;
            id: string;
            tags: string[];
            identifier: string;
            action: import("@db/api").$Enums.OpportunityAction;
            manualOverrides: import("@db/api").$Enums.OpportunityManualOverride[];
            chainId: number;
            howToSteps: string[];
            depositUrl: string | null;
            explorerAddress: string | null;
            mainProtocolId: string | null;
            tvl: number;
            apr: number;
            dailyRewards: number;
            lastCampaignCreatedAt: Date;
        };
        Creator: {
            tags: string[];
            address: string;
            creatorId: string | null;
        };
        CampaignStatus: {
            status: import("@db/api").$Enums.RunStatus;
            error: string;
            details: import("database/api/.generated/runtime/library").JsonValue;
            campaignId: string;
            computedUntil: bigint;
            processingStarted: bigint;
        }[];
    } & {
        type: string;
        description: string | null;
        id: string;
        params: import("database/api/.generated/runtime/library").JsonValue;
        subType: number | null;
        computeChainId: number;
        distributionChainId: number;
        campaignId: string;
        distributionType: import("@db/api").$Enums.DistributionType;
        rewardTokenId: string;
        amount: string;
        opportunityId: string;
        startTimestamp: bigint;
        endTimestamp: bigint;
        creatorAddress: string;
        manualOverrides: import("@db/api").$Enums.CampaignManualOverride[];
        createdAt: Date;
        rootCampaignId: string | null;
        parentCampaignId: string | null;
    }>;
    static findCampaignValue(params: GetCampaignComputedValueModel): Promise<{
        averageBoost: number | null;
        totalDistributedInUSD: number | null;
        forfeitingBoost: number | null;
    } | null>;
    static removeManualOverride(campaign: CampaignUnique | string, field: CampaignManualOverride): Promise<void>;
    static findCampaignsToProcess(distributionChainId: ChainId): Promise<{
        campaignId: string;
        endTimestamp: bigint;
        CampaignStatus: {
            status: import("@db/api").$Enums.RunStatus;
            computedUntil: bigint;
            processingStarted: bigint;
        }[];
    }[]>;
    static findNextCampaignToProcess(chainId: ChainId): Promise<{
        campaignId: string;
    }>;
    static pickCampaignToProcess(chainId: ChainId): Promise<{
        campaignId: string;
    }>;
    static findEngineCampaigns(campaigns: CampaignUnique[]): Promise<{
        amount: string;
        chainId: number;
        computeChainId: number;
        creator: string;
        endTimestamp: string;
        campaignId: string;
        opportunityIdentifier: string;
        params: string;
        rewardTokenAddress: string;
        startTimestamp: string;
        type: number;
        subType: number;
    }[]>;
    static fill(campaigns: CampaignUnique[]): Promise<{
        success: number;
        fail: number;
    }>;
    static findChains(): Promise<Record<string, ChainId>>;
    /**
     * Returns the campaign data
     * @param type index of Campaign enum from sdk
     * @returns a string
     */
    static getTypeFromV3(type: CampaignType): string;
    /**
     * Split a campaigns array into three array for each status
     * @param campaigns
     * @param timestamp to compare to campaigns timestamps
     * @returns a status => campaigns map
     */
    static splitOnStatus<C extends {
        startTimestamp: bigint | number;
        endTimestamp: bigint | number;
    }>(campaigns: C[], timestamp?: number): {
        past: C[];
        live: C[];
        soon: C[];
    };
    /**
     * Convert raw
     * @param query
     * @returns A list of opportunities
     * TODO: remove CampaignService function in favor of prisma client extensions
     */
    static format(campaign: NonNullable<Awaited<ReturnType<(typeof CampaignRepository)["findMany"]>>>[number]): {
        params: any;
        chain: {
            name: string;
            id: number;
            icon: string;
        };
        endTimestamp: number;
        startTimestamp: number;
        rewardToken: {
            symbol: string;
            name: string | null;
            id: string;
            icon: string;
            address: string;
            chainId: number;
            decimals: number;
            verified: boolean;
            isTest: boolean;
            isPoint: boolean;
            isPreTGE: boolean;
            isNative: boolean;
        } & {
            price?: number | null | undefined;
        };
        distributionChain: {
            name: string;
            id: number;
            icon: string;
        } | undefined;
        campaignStatus: {
            computedUntil: number;
            processingStarted: number;
            status: import("@db/api").$Enums.RunStatus;
            error: string;
            details: import("database/api/.generated/runtime/library").JsonValue;
            campaignId: string;
        } | undefined;
        creatorAddress: string;
        creator: {
            tags: string[];
            address: string;
            creatorId: string | null;
        };
        createdAt: string;
        description: string | undefined;
        parentCampaignId: string | undefined;
        rootCampaignId: string | undefined;
        Opportunity: {
            status: import("@db/api").$Enums.Status;
            type: string;
            name: string;
            description: string;
            id: string;
            tags: string[];
            identifier: string;
            action: import("@db/api").$Enums.OpportunityAction;
            manualOverrides: import("@db/api").$Enums.OpportunityManualOverride[];
            chainId: number;
            howToSteps: string[];
            depositUrl: string | null;
            explorerAddress: string | null;
            mainProtocolId: string | null;
            tvl: number;
            apr: number;
            dailyRewards: number;
            lastCampaignCreatedAt: Date;
        };
        type: string;
        id: string;
        subType: number | null;
        computeChainId: number;
        distributionChainId: number;
        campaignId: string;
        distributionType: import("@db/api").$Enums.DistributionType;
        rewardTokenId: string;
        amount: string;
        opportunityId: string;
    };
    /**
     * @deprecated Used only in tentative position fetcher
     */
    static formatAsCampaignParameters<C extends CampaignType>(campaign: CampaignWithParams): CampaignParameters<C>;
    /**
     * Shortcut to get daily amount from total
     * @param start timestamp
     * @param end timestamp
     * @param amount
     * @returns daily token amount
     */
    static getDailyAmount<T extends bigint | number>(start: T, end: T, amount: bigint): bigint;
    static createFakeCampaign<C extends CampaignType>(body: CampaignConfigMinimalModel): CampaignParameters<C>;
    static createFakeCampaignEngine(body: CampaignConfigMinimalModel): {
        computeChainId: any;
        chainId: any;
        campaignId: any;
        creator: any;
        type: any;
        subType: any;
        rewardTokenAddress: any;
        amount: any;
        opportunityIdentifier: any;
        startTimestamp: any;
        endTimestamp: any;
        params: string;
    };
    static getMetrics(campaignId: CampaignUnique | string): Promise<{
        tvlRecords: {
            total: number;
            timestamp: bigint;
        }[];
        aprRecords: {
            timestamp: bigint;
            apr: number;
        }[];
        dailyRewardsRecords: {
            total: number;
            timestamp: bigint;
        }[];
        walletCount: {
            timestamp: bigint;
            walletCount: number;
        }[];
        tvlInflowPerDollar: bigint;
    }>;
}
