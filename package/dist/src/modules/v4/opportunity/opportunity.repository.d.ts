import type { AprRecord } from "@/modules/v4/apr/apr.model";
import type { Campaign } from "@/modules/v4/campaign/campaign.model";
import type { DailyRewardsRecord } from "@/modules/v4/reward/reward.model";
import type { TvlRecord } from "@/modules/v4/tvl/tvl.model";
import { type Prisma, Status } from "@db/api";
import { type MerklChainId } from "@sdk";
import type { CreateOpportunityModel, GetOpportunitiesQueryModel, Opportunity } from "./opportunity.model";
export declare abstract class OpportunityRepository {
    #private;
    static create(newOpp: CreateOpportunityModel & {
        id: string;
    }, upsert?: boolean): Promise<{
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
    }>;
    static findUnique(id: string): Promise<({
        Chain: {
            name: string;
            id: number;
            icon: string;
        };
        Campaigns: ({
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
        })[];
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
        MainProtocol: {
            url: string;
            name: string;
            description: string;
            id: string;
            tags: string[];
            icon: string;
        } | null;
        TvlRecords: ({
            TvlBreakdown: {
                type: import("@db/api").$Enums.TvlType;
                identifier: string;
                value: number;
            }[];
        } & {
            total: number;
            id: string;
            opportunityId: string;
            timestamp: bigint;
        })[];
        AprRecords: ({
            AprBreakdown: {
                type: import("@db/api").$Enums.AprType;
                identifier: string;
                value: number;
            }[];
        } & {
            id: string;
            opportunityId: string;
            timestamp: bigint;
            cumulated: number;
        })[];
        DailyRewardsRecords: ({
            DailyRewardsBreakdown: ({
                Campaign: {
                    campaignId: string;
                    distributionType: import("@db/api").$Enums.DistributionType;
                    amount: string;
                    startTimestamp: bigint;
                    endTimestamp: bigint;
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
                    CampaignStatus: {
                        status: import("@db/api").$Enums.RunStatus;
                        error: string;
                        details: Prisma.JsonValue;
                        campaignId: string;
                        computedUntil: bigint;
                        processingStarted: bigint;
                    }[];
                };
            } & {
                id: string;
                value: number;
                campaignId: string;
                dailyRewardsRecordId: string;
            })[];
        } & {
            total: number;
            id: string;
            opportunityId: string;
            timestamp: bigint;
        })[];
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
    }) | null>;
    static findUniqueOrThrow(id: string, withTest?: boolean, withPoints?: boolean, withCampaigns?: boolean): Promise<{
        Chain: {
            name: string;
            id: number;
            icon: string;
        };
        Campaigns: {
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
        }[];
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
        MainProtocol: {
            url: string;
            name: string;
            description: string;
            id: string;
            tags: string[];
            icon: string;
        } | null;
        TvlRecords: ({
            TvlBreakdown: {
                type: import("@db/api").$Enums.TvlType;
                identifier: string;
                value: number;
            }[];
        } & {
            total: number;
            id: string;
            opportunityId: string;
            timestamp: bigint;
        })[];
        AprRecords: ({
            AprBreakdown: {
                type: import("@db/api").$Enums.AprType;
                identifier: string;
                value: number;
            }[];
        } & {
            id: string;
            opportunityId: string;
            timestamp: bigint;
            cumulated: number;
        })[];
        DailyRewardsRecords: ({
            DailyRewardsBreakdown: ({
                Campaign: {
                    campaignId: string;
                    distributionType: import("@db/api").$Enums.DistributionType;
                    amount: string;
                    startTimestamp: bigint;
                    endTimestamp: bigint;
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
                    CampaignStatus: {
                        status: import("@db/api").$Enums.RunStatus;
                        error: string;
                        details: Prisma.JsonValue;
                        campaignId: string;
                        computedUntil: bigint;
                        processingStarted: bigint;
                    }[];
                };
            } & {
                id: string;
                value: number;
                campaignId: string;
                dailyRewardsRecordId: string;
            })[];
        } & {
            total: number;
            id: string;
            opportunityId: string;
            timestamp: bigint;
        })[];
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
    }>;
    /**
     * Gets opportunities and campaigns for which filtered on campaigns
     * @param filters
     * @returns
     */
    static findManyByCampaigns(where: Campaign["action"]["findMany"]["args"]["where"]): Promise<({
        Chain: {
            Explorer: {
                url: string;
                type: import("@db/api").$Enums.ExplorerType;
                id: string;
                chainId: number;
            }[];
        } & {
            name: string;
            id: number;
            icon: string;
        };
        Campaigns: ({
            ComputeChain: {
                name: string;
                id: number;
                icon: string;
            };
            DistributionChain: {
                Explorer: {
                    url: string;
                    type: import("@db/api").$Enums.ExplorerType;
                    id: string;
                    chainId: number;
                }[];
            } & {
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
        })[];
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
        MainProtocol: {
            url: string;
            name: string;
            description: string;
            id: string;
            tags: string[];
            icon: string;
        } | null;
        TvlRecords: ({
            TvlBreakdown: {
                type: import("@db/api").$Enums.TvlType;
                identifier: string;
                value: number;
            }[];
        } & {
            total: number;
            id: string;
            opportunityId: string;
            timestamp: bigint;
        })[];
        AprRecords: ({
            AprBreakdown: {
                type: import("@db/api").$Enums.AprType;
                identifier: string;
                value: number;
            }[];
        } & {
            id: string;
            opportunityId: string;
            timestamp: bigint;
            cumulated: number;
        })[];
        DailyRewardsRecords: ({
            DailyRewardsBreakdown: ({
                Campaign: {
                    campaignId: string;
                    distributionType: import("@db/api").$Enums.DistributionType;
                    amount: string;
                    startTimestamp: bigint;
                    endTimestamp: bigint;
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
                    CampaignStatus: {
                        status: import("@db/api").$Enums.RunStatus;
                        error: string;
                        details: Prisma.JsonValue;
                        campaignId: string;
                        computedUntil: bigint;
                        processingStarted: bigint;
                    }[];
                };
            } & {
                id: string;
                value: number;
                campaignId: string;
                dailyRewardsRecordId: string;
            })[];
        } & {
            total: number;
            id: string;
            opportunityId: string;
            timestamp: bigint;
        })[];
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
    })[]>;
    static findMany(query: GetOpportunitiesQueryModel): Promise<({
        Chain: {
            Explorer: {
                url: string;
                type: import("@db/api").$Enums.ExplorerType;
                id: string;
                chainId: number;
            }[];
        } & {
            name: string;
            id: number;
            icon: string;
        };
        Campaigns: {
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
        }[];
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
        MainProtocol: {
            url: string;
            name: string;
            description: string;
            id: string;
            tags: string[];
            icon: string;
        } | null;
        TvlRecords: ({
            TvlBreakdown: {
                type: import("@db/api").$Enums.TvlType;
                identifier: string;
                value: number;
            }[];
        } & {
            total: number;
            id: string;
            opportunityId: string;
            timestamp: bigint;
        })[];
        AprRecords: ({
            AprBreakdown: {
                type: import("@db/api").$Enums.AprType;
                identifier: string;
                value: number;
            }[];
        } & {
            id: string;
            opportunityId: string;
            timestamp: bigint;
            cumulated: number;
        })[];
        DailyRewardsRecords: ({
            DailyRewardsBreakdown: ({
                Campaign: {
                    campaignId: string;
                    distributionType: import("@db/api").$Enums.DistributionType;
                    amount: string;
                    startTimestamp: bigint;
                    endTimestamp: bigint;
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
                    CampaignStatus: {
                        status: import("@db/api").$Enums.RunStatus;
                        error: string;
                        details: Prisma.JsonValue;
                        campaignId: string;
                        computedUntil: bigint;
                        processingStarted: bigint;
                    }[];
                };
            } & {
                id: string;
                value: number;
                campaignId: string;
                dailyRewardsRecordId: string;
            })[];
        } & {
            total: number;
            id: string;
            opportunityId: string;
            timestamp: bigint;
        })[];
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
    })[]>;
    /**
     * @dev Live campaigns here can be:
     * 1. Opportunities with status LIVE
     * 2. Opportunities with non-test campaigns that have endTimestamp > now
     *
     * @dev Excludes test campaigns
     */
    static findLiveWithCampaigns(chainId: MerklChainId, take?: number): Promise<({
        Chain: {
            Explorer: {
                url: string;
                type: import("@db/api").$Enums.ExplorerType;
                id: string;
                chainId: number;
            }[];
        } & {
            name: string;
            id: number;
            icon: string;
        };
        Campaigns: ({
            ComputeChain: {
                name: string;
                id: number;
                icon: string;
            };
            DistributionChain: {
                Explorer: {
                    url: string;
                    type: import("@db/api").$Enums.ExplorerType;
                    id: string;
                    chainId: number;
                }[];
            } & {
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
        })[];
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
        MainProtocol: {
            url: string;
            name: string;
            description: string;
            id: string;
            tags: string[];
            icon: string;
        } | null;
        TvlRecords: ({
            TvlBreakdown: {
                type: import("@db/api").$Enums.TvlType;
                identifier: string;
                value: number;
            }[];
        } & {
            total: number;
            id: string;
            opportunityId: string;
            timestamp: bigint;
        })[];
        AprRecords: ({
            AprBreakdown: {
                type: import("@db/api").$Enums.AprType;
                identifier: string;
                value: number;
            }[];
        } & {
            id: string;
            opportunityId: string;
            timestamp: bigint;
            cumulated: number;
        })[];
        DailyRewardsRecords: ({
            DailyRewardsBreakdown: ({
                Campaign: {
                    campaignId: string;
                    distributionType: import("@db/api").$Enums.DistributionType;
                    amount: string;
                    startTimestamp: bigint;
                    endTimestamp: bigint;
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
                    CampaignStatus: {
                        status: import("@db/api").$Enums.RunStatus;
                        error: string;
                        details: Prisma.JsonValue;
                        campaignId: string;
                        computedUntil: bigint;
                        processingStarted: bigint;
                    }[];
                };
            } & {
                id: string;
                value: number;
                campaignId: string;
                dailyRewardsRecordId: string;
            })[];
        } & {
            total: number;
            id: string;
            opportunityId: string;
            timestamp: bigint;
        })[];
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
    })[]>;
    static countMany(query: GetOpportunitiesQueryModel): Promise<number>;
    /**
     * Updates Apr, Tvl and DailyRewards records
     * @param opportunityId
     * @param apr
     * @param tvl
     * @returns
     */
    static updateDynamicData(opportunityId: string, apr: AprRecord["model"], tvl: TvlRecord["model"], dailyRewards: DailyRewardsRecord["model"]): Promise<{
        aprRecord: {
            id: string;
            opportunityId: string;
            timestamp: bigint;
            cumulated: number;
        };
        tvlRecord: {
            TvlBreakdown: {
                type: import("@db/api").$Enums.TvlType;
                id: string;
                identifier: string;
                value: number;
                tvlRecordId: string;
            }[];
        } & {
            total: number;
            id: string;
            opportunityId: string;
            timestamp: bigint;
        };
        dailyRewardsRecord: {
            DailyRewardsBreakdown: {
                id: string;
                value: number;
                campaignId: string;
                dailyRewardsRecordId: string;
            }[];
        } & {
            total: number;
            id: string;
            opportunityId: string;
            timestamp: bigint;
        };
        opportunity: {
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
    }>;
    static updateStatus(id: string, status: Status): Promise<{
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
    }>;
    static update(id: string, data: Partial<Opportunity["raw"]>): Promise<{
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
    }>;
    static updateMany(ids: string[], data: Partial<Opportunity["raw"]>): Promise<import("database/api/.generated/runtime/library").GetBatchResult>;
    static aggregateSum(field: keyof Prisma.OpportunitySumAggregateInputType, query: GetOpportunitiesQueryModel): Promise<{
        sum: string;
    }>;
    static aggregateMin(field: keyof Prisma.OpportunityMinAggregateInputType, query: GetOpportunitiesQueryModel): Promise<{
        min: string;
    }>;
    static aggregateMax(field: keyof Prisma.OpportunityMaxAggregateInputType, query: GetOpportunitiesQueryModel): Promise<{
        max: string;
    }>;
}
