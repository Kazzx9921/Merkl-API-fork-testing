import type { CreateCreatorDto, Creator, GetManyCreatorModel, UpdateCreatorDto, UpdateCreatorRebateDto } from "./creator.model";
export declare abstract class CreatorService {
    /**
     * Finds a creator from its id (i.e. "uniswap")
     * @param id
     * @returns creator
     */
    static findUnique(id: Creator["model"]["id"]): Promise<{
        Users: {
            tags: string[];
            address: string;
            creatorId: string | null;
        }[];
    } & {
        name: string;
        id: string;
        icon: string | null;
        rebateFee: number;
    }>;
    /**
     * Finds many creators
     * @param id
     * @returns creators[]
     */
    static findMany(query: GetManyCreatorModel): Promise<({
        Users: {
            address: string;
        }[];
    } & {
        name: string;
        id: string;
        icon: string | null;
        rebateFee: number;
    })[]>;
    /**
     * Creates a creator
     * @param creator {addresses, id, name}
     */
    static create(creator: typeof CreateCreatorDto.static): Promise<{
        name: string;
        id: string;
        icon: string | null;
        rebateFee: number;
    }>;
    /**
     * Updates data on a creator
     * @notice will override the entire address array
     * @param id of creator
     * @param creator data for each field
     */
    static update(id: Creator["model"]["id"], creator: UpdateCreatorDto): Promise<{
        name: string;
        id: string;
        icon: string | null;
        rebateFee: number;
    }>;
    static delete(id: Creator["model"]["id"]): Promise<{
        name: string;
        id: string;
        icon: string | null;
        rebateFee: number;
    }>;
    static getCreatorIdFromAddress(address: string): Promise<string | null>;
    static getCreatorAddresses(id: Creator["model"]["id"]): Promise<string[]>;
    static getGlobalDashboard(creatorAddress: string): Promise<{
        pastCampaigns: number;
        liveCampaigns: number;
        futureCampaigns: number;
        incentivizedTvl: number;
        totalCampaigns: number;
        creatorId: string | null;
    }>;
    static getCampaignsFor(creatorAddress: string, status?: "PAST" | "LIVE" | "FUTURE"): Promise<({
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
    })[] | {
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
    static getCampaignMetrics(campaignId: string): Promise<{
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
    static updateRebate(id: Creator["model"]["id"], rebate: UpdateCreatorRebateDto["rebate"]): Promise<{
        name: string;
        id: string;
        icon: string | null;
        rebateFee: number;
    }>;
}
