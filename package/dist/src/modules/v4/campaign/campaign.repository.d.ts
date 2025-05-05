import type { Campaign, CampaignUnique, CampaignWithParams, GetCampaignQueryModel } from "@/modules/v4/campaign/campaign.model";
import { type CampaignManualOverride, Prisma } from "@db/api";
import { type ChainId } from "@sdk";
export declare abstract class CampaignRepository {
    static transformQueryToPrismaFilters(query: GetCampaignQueryModel): {
        where: {
            createdAt: {
                gte: Date;
            } | undefined;
            rootCampaignId: {
                equals: string;
                mode: "insensitive";
            } | undefined;
            parentCampaignId: {
                equals: string;
                mode: "insensitive";
            } | undefined;
            endTimestamp: {
                gte: number;
                lt?: undefined;
            };
            startTimestamp: {
                lte: number;
                gt?: undefined;
                gte?: undefined;
            };
            distributionChainId: {
                in: number[];
            } | undefined;
            computeChainId: number | undefined;
            opportunityId: string | undefined;
            campaignId: string | undefined;
            Opportunity: {
                identifier: string | undefined;
            };
            subType: number | undefined;
            type: string | {
                in: string[];
            } | undefined;
            creatorAddress: string | undefined;
            RewardToken: {
                address: string | undefined;
                symbol: string | undefined;
                OR: ({
                    symbol: {
                        equals: string;
                        mode: "insensitive";
                    };
                    displaySymbol?: undefined;
                } | {
                    displaySymbol: {
                        equals: string;
                        mode: "insensitive";
                    };
                    symbol?: undefined;
                })[] | undefined;
                isTest: false | undefined;
                isPoint: boolean | undefined;
            };
            Creator: {
                OR: ({
                    Creator: {
                        id: string;
                    };
                    tags?: undefined;
                } | {
                    tags: {
                        has: string;
                    };
                    Creator?: undefined;
                })[];
                Creator?: undefined;
                tags?: undefined;
            } | {
                Creator: {
                    id: string;
                };
                OR?: undefined;
                tags?: undefined;
            } | {
                tags: {
                    has: string;
                };
                OR?: undefined;
                Creator?: undefined;
            } | undefined;
        } | {
            createdAt: {
                gte: Date;
            } | undefined;
            rootCampaignId: {
                equals: string;
                mode: "insensitive";
            } | undefined;
            parentCampaignId: {
                equals: string;
                mode: "insensitive";
            } | undefined;
            endTimestamp: {
                lt: number;
                gte?: undefined;
            };
            startTimestamp?: undefined;
            distributionChainId: {
                in: number[];
            } | undefined;
            computeChainId: number | undefined;
            opportunityId: string | undefined;
            campaignId: string | undefined;
            Opportunity: {
                identifier: string | undefined;
            };
            subType: number | undefined;
            type: string | {
                in: string[];
            } | undefined;
            creatorAddress: string | undefined;
            RewardToken: {
                address: string | undefined;
                symbol: string | undefined;
                OR: ({
                    symbol: {
                        equals: string;
                        mode: "insensitive";
                    };
                    displaySymbol?: undefined;
                } | {
                    displaySymbol: {
                        equals: string;
                        mode: "insensitive";
                    };
                    symbol?: undefined;
                })[] | undefined;
                isTest: false | undefined;
                isPoint: boolean | undefined;
            };
            Creator: {
                OR: ({
                    Creator: {
                        id: string;
                    };
                    tags?: undefined;
                } | {
                    tags: {
                        has: string;
                    };
                    Creator?: undefined;
                })[];
                Creator?: undefined;
                tags?: undefined;
            } | {
                Creator: {
                    id: string;
                };
                OR?: undefined;
                tags?: undefined;
            } | {
                tags: {
                    has: string;
                };
                OR?: undefined;
                Creator?: undefined;
            } | undefined;
        } | {
            createdAt: {
                gte: Date;
            } | undefined;
            rootCampaignId: {
                equals: string;
                mode: "insensitive";
            } | undefined;
            parentCampaignId: {
                equals: string;
                mode: "insensitive";
            } | undefined;
            startTimestamp: {
                gt: number;
                lte?: undefined;
                gte?: undefined;
            };
            endTimestamp?: undefined;
            distributionChainId: {
                in: number[];
            } | undefined;
            computeChainId: number | undefined;
            opportunityId: string | undefined;
            campaignId: string | undefined;
            Opportunity: {
                identifier: string | undefined;
            };
            subType: number | undefined;
            type: string | {
                in: string[];
            } | undefined;
            creatorAddress: string | undefined;
            RewardToken: {
                address: string | undefined;
                symbol: string | undefined;
                OR: ({
                    symbol: {
                        equals: string;
                        mode: "insensitive";
                    };
                    displaySymbol?: undefined;
                } | {
                    displaySymbol: {
                        equals: string;
                        mode: "insensitive";
                    };
                    symbol?: undefined;
                })[] | undefined;
                isTest: false | undefined;
                isPoint: boolean | undefined;
            };
            Creator: {
                OR: ({
                    Creator: {
                        id: string;
                    };
                    tags?: undefined;
                } | {
                    tags: {
                        has: string;
                    };
                    Creator?: undefined;
                })[];
                Creator?: undefined;
                tags?: undefined;
            } | {
                Creator: {
                    id: string;
                };
                OR?: undefined;
                tags?: undefined;
            } | {
                tags: {
                    has: string;
                };
                OR?: undefined;
                Creator?: undefined;
            } | undefined;
        } | {
            createdAt: {
                gte: Date;
            } | undefined;
            rootCampaignId: {
                equals: string;
                mode: "insensitive";
            } | undefined;
            parentCampaignId: {
                equals: string;
                mode: "insensitive";
            } | undefined;
            endTimestamp: {
                gte: number;
                lt?: undefined;
            } | undefined;
            startTimestamp: {
                gte: number;
                lte?: undefined;
                gt?: undefined;
            } | undefined;
            distributionChainId: {
                in: number[];
            } | undefined;
            computeChainId: number | undefined;
            opportunityId: string | undefined;
            campaignId: string | undefined;
            Opportunity: {
                identifier: string | undefined;
            };
            subType: number | undefined;
            type: string | {
                in: string[];
            } | undefined;
            creatorAddress: string | undefined;
            RewardToken: {
                address: string | undefined;
                symbol: string | undefined;
                OR: ({
                    symbol: {
                        equals: string;
                        mode: "insensitive";
                    };
                    displaySymbol?: undefined;
                } | {
                    displaySymbol: {
                        equals: string;
                        mode: "insensitive";
                    };
                    symbol?: undefined;
                })[] | undefined;
                isTest: false | undefined;
                isPoint: boolean | undefined;
            };
            Creator: {
                OR: ({
                    Creator: {
                        id: string;
                    };
                    tags?: undefined;
                } | {
                    tags: {
                        has: string;
                    };
                    Creator?: undefined;
                })[];
                Creator?: undefined;
                tags?: undefined;
            } | {
                Creator: {
                    id: string;
                };
                OR?: undefined;
                tags?: undefined;
            } | {
                tags: {
                    has: string;
                };
                OR?: undefined;
                Creator?: undefined;
            } | undefined;
        };
    };
    /**
     * Retrieves all past campaigns from the database.
     * A campaign is considered past if the current timestamp is greater than the campaign's end timestamp.
     *
     * @returns A promise that resolves to an array of past campaigns.
     *
     * @dev Excludes test campaigns
     */
    static getPastCampaigns(query?: {
        computeChainId?: number;
        type?: string;
        creatorId?: string;
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
        params: Prisma.JsonValue;
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
    /**
     * Retrieves all past campaigns from the database.
     * A campaign is considered past if the current timestamp is greater than the campaign's end timestamp.
     *
     * @returns A promise that resolves to an array of past campaigns.
     *
     * @dev Excludes test campaigns
     */
    static getFutureCampaigns(query?: {
        computeChainId?: number;
        type?: string;
        creatorId?: string;
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
        params: Prisma.JsonValue;
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
    /**
     * Retrieves all live campaigns from the database.
     * A campaign is considered live if the current timestamp is between the campaign's start and end timestamps.
     *
     * @returns A promise that resolves to an array of live campaigns.
     *
     * @dev Excludes test campaigns
     */
    static getLiveCampaigns(query?: {
        distributionChainId?: number;
        computeChainId?: number;
        type?: string;
        creatorId?: string;
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
        params: Prisma.JsonValue;
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
    /**
     * Upserts a campaign in the database. If the campaign already exists, it updates the existing record;
     * otherwise, it creates a new one.
     *
     * @param {CreateCampaignModel} campaign - The campaign data to be upserted.
     * @returns The upserted campaign record.
     *
     * @dev Should be the only way of creating campaigns in the database.
     *
     * @throws {Error} If unable to fetch data for the reward token.
     *
     * @remarks
     * This method performs the following steps:
     * 1. Determines the campaign type from the provided campaign data.
     * 2. Computes the opportunity ID based on the campaign data.
     * 3. Constructs the data object for the campaign to be upserted.
     * 4. Upserts the campaign in the database using the constructed data object.
     * 5. Logs an error if the upsert operation fails.
     */
    static upsert(campaign: Omit<CampaignWithParams, "manualOverrides">, opportunityIdentifier: string): Promise<{
        type: string;
        description: string | null;
        id: string;
        params: Prisma.JsonValue;
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
    } | undefined>;
    /**
     * Retrieves a campaign from the engine database by its chain and campaign id.
     * @dev Types are different from the API database.
     * @dev IDs are different from the API database.
     * id in the engine database = campaignId in the API database
     */
    static getFromEngineDbWithId(campaignIds: CampaignUnique[]): Promise<{
        index: number;
        creator: string;
        computeChainId: number;
        campaignId: string;
        amount: string;
        startTimestamp: number;
        endTimestamp: number;
        chainId: number;
        rewardToken: string;
        campaignType: number;
        campaignSubType: number;
        mainParameter: string;
        campaignParameters: import("database/engine/.generated/runtime/library").JsonValue;
    }[]>;
    static findUnique(id: string): Promise<({
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
            details: Prisma.JsonValue;
            campaignId: string;
            computedUntil: bigint;
            processingStarted: bigint;
        }[];
    } & {
        type: string;
        description: string | null;
        id: string;
        params: Prisma.JsonValue;
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
    static findUniqueOrThrow(id: string, withOpportunity: boolean): Promise<{
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
            details: Prisma.JsonValue;
            campaignId: string;
            computedUntil: bigint;
            processingStarted: bigint;
        }[];
    } & {
        type: string;
        description: string | null;
        id: string;
        params: Prisma.JsonValue;
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
    static findCampaignsToProcess(distributionChainId: ChainId): Promise<{
        campaignId: string;
        endTimestamp: bigint;
        CampaignStatus: {
            status: import("@db/api").$Enums.RunStatus;
            computedUntil: bigint;
            processingStarted: bigint;
        }[];
    }[]>;
    static findMany(query: GetCampaignQueryModel): Promise<({
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
            details: Prisma.JsonValue;
            campaignId: string;
            computedUntil: bigint;
            processingStarted: bigint;
        }[];
    } & {
        type: string;
        description: string | null;
        id: string;
        params: Prisma.JsonValue;
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
    static countMany(query: GetCampaignQueryModel): Promise<number>;
    static findChains(): Promise<Record<string, ChainId>>;
    static addManualOverride(id: string, field: CampaignManualOverride): Promise<void>;
    static removeManualOverride(id: string, field: CampaignManualOverride): Promise<void>;
    static updateOpportunity(id: string, opportunityId: string): Promise<void>;
    static updateCreator(id: string, creatorAddress: string): Promise<void>;
    static updateParams(id: string, params: string): Promise<{
        type: string;
        description: string | null;
        id: string;
        params: Prisma.JsonValue;
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
    static getTvlRecords(campaign: {
        opportunityId: string;
        startTimestamp: bigint;
        endTimestamp: bigint;
    }): Promise<{
        total: number;
        timestamp: bigint;
    }[]>;
    static getAprRecords(campaign: Campaign["raw"]): Promise<{
        timestamp: bigint;
        apr: number;
    }[]>;
    static getDailyRewardsRecords(campaign: {
        opportunityId: string;
        startTimestamp: bigint;
        endTimestamp: bigint;
    }): Promise<{
        total: number;
        timestamp: bigint;
    }[]>;
    static getWalletCountOverTime(campaign: {
        id: string;
        opportunityId: string;
        startTimestamp: bigint;
        endTimestamp: bigint;
    }): Promise<{
        timestamp: bigint;
        walletCount: number;
    }[]>;
}
