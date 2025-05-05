import type { LightOpportunityFromDB, Opportunity } from "@/modules/v4/opportunity/opportunity.model";
import type { Chain } from "@db/api";
import { type CampaignDynamicData, Campaign as CampaignType, type ChainId, type MerklChainId } from "@sdk";
import type { CampaignIdModel, CampaignIdWithoutPageModel, CreateManyBreakdownModel, CreateManyRewardModel, DailyRewardsRecord, RegisterClaimsModel, RewardBreakdown, TokenIdModel } from "./reward.model";
import { RewardRepository } from "./reward.repository";
export declare abstract class RewardService {
    static hashId(root: string, recipient: string, rewardTokenId: string): string;
    static hashBreakdownId(rewardId: string, campaignId: string, reason: string): string;
    static hashDailyRewardsRecordId(opportunityId: string, timestamp: bigint): string;
    static createManyReward(rewards: CreateManyRewardModel): Promise<import("database/api/.generated/runtime/library").GetBatchResult>;
    static getTotalDistributedByOpportunities(since: number): Promise<Map<{
        apr: number;
        aprRecord: {
            cumulated: number;
            timestamp: bigint;
            breakdowns: ({
                value: number;
                distributionType: import("@db/api").$Enums.DistributionType;
                identifier: string;
                type: "CAMPAIGN";
            } | {
                value: number;
                identifier: string;
                type: import("@db/api").$Enums.AprType;
            })[];
        };
        tvlRecord: {
            id: string;
            total: number;
            timestamp: bigint;
            breakdowns: {
                type: import("@db/api").$Enums.TvlType;
                identifier: string;
                value: number;
            }[];
        };
        rewardsRecord: {
            id: string;
            total: number;
            timestamp: bigint;
            breakdowns: {
                id: string;
                campaignId: string;
                dailyRewardsRecordId: string;
                token: {
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
                amount: any;
                value: number;
                distributionType: import("@db/api").$Enums.DistributionType;
            }[];
        };
        campaigns: {
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
        }[] | undefined;
        id: string;
        depositUrl: string | undefined;
        explorerAddress: string | undefined;
        lastCampaignCreatedAt: string;
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
        chain: {
            name: string;
            id: number;
            icon: string;
        };
        protocol: {
            url: string;
            name: string;
            description: string;
            id: string;
            tags: string[];
            icon: string;
        } | undefined;
        status: import("@db/api").$Enums.Status;
        type: string;
        name: string;
        description: string;
        tags: string[];
        identifier: string;
        action: import("@db/api").$Enums.OpportunityAction;
        chainId: number;
        howToSteps: string[];
        tvl: number;
        dailyRewards: number;
    }, number>>;
    static getTotalDistributed(since: number): Promise<number>;
    static getTotalDistributedByChain(since: number): Promise<any>;
    static getTotalDistributedByProtocol(since: number): Promise<any>;
    static getTotalDistributedByType(since: number): Promise<any>;
    /**
     * Format the reward breakdown to conform to its resource model declaration
     * @param breakdown straight from db
     * @returns a RewardBreakdown model
     */
    static formatBreakdown(breakdown: Awaited<ReturnType<(typeof RewardRepository)["getByRecipient"]>>[number]["Breakdown"][number]): {
        campaignId: string;
        subCampaignId: string | undefined;
        opportunity: {
            Chain: {
                name: string;
                id: number;
                icon: string;
            };
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
        };
        reason: string;
        pending: string;
        amount: string;
        claimed: string;
    };
    /**
     * Format the reward to conform to its resource model declaration
     * @param reward straight from db
     * @returns a Reward model
     */
    static format(rewards: Awaited<ReturnType<(typeof RewardRepository)["getByRecipient"]>>): {
        token: {
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
        breakdowns: {
            campaignId: string;
            subCampaignId: string | undefined;
            opportunity: {
                Chain: {
                    name: string;
                    id: number;
                    icon: string;
                };
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
            };
            reason: string;
            pending: string;
            amount: string;
            claimed: string;
        }[];
        claimed: bigint;
        amount: bigint;
        pending: bigint;
        root: string;
        recipient: string;
        proofs: string[];
    }[];
    static createManyBreakdown(data: CreateManyBreakdownModel): Promise<import("database/api/.generated/runtime/library").GetBatchResult | undefined>;
    static getByRecipient(recipient: string, roots: string[], withToken?: boolean, withTestTokens?: boolean, chainFilter?: ChainId[] | null, reasonFilter?: string): Promise<({
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
        Breakdown: ({
            Campaign: {
                campaignId: string;
                Opportunity: {
                    Chain: {
                        name: string;
                        id: number;
                        icon: string;
                    };
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
                };
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
        pending: string;
        id: string;
        rewardTokenId: string;
        amount: string;
        root: string;
        recipient: string;
        claimed: string;
        proofs: string[];
    })[]>;
    /**
     * Groups a breakdown array by their corresponding opportunities
     * @param breakdowns with campaignIds
     * @returns array of breakdown group, including the opportunity they belong to
     */
    static splitBreakdownByOpportunity(breakdowns: (RewardBreakdown["model"] & {
        opportunity: LightOpportunityFromDB;
    })[]): {
        opportunity: Opportunity["model"];
        claimed: bigint;
        amount: bigint;
        pending: bigint;
    }[];
    /**
     * Applies the splitBreakdownByOpportunity function to each rewards in the array
     * @param rewards return type for most of the rewards functions
     * @returns rewards with updated breakdowns, including the opportunity they belong to
     */
    static splitRewardsBreakdownByOpportunity(rewards: Awaited<ReturnType<(typeof RewardService)["getUserRewardsByChain"]>>): (Omit<{
        chain: Chain;
        rewards: Awaited<ReturnType<(typeof RewardService)["format"]>>;
    }, "rewards"> & {
        rewards: (Omit<{
            token: {
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
            breakdowns: {
                campaignId: string;
                subCampaignId: string | undefined;
                opportunity: {
                    Chain: {
                        name: string;
                        id: number;
                        icon: string;
                    };
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
                };
                reason: string;
                pending: string;
                amount: string;
                claimed: string;
            }[];
            claimed: bigint;
            amount: bigint;
            pending: bigint;
            root: string;
            recipient: string;
            proofs: string[];
        }, "breakdowns"> & {
            breakdowns: {
                opportunity: Opportunity["model"];
                claimed: bigint;
                amount: bigint;
                pending: bigint;
            }[];
        })[];
        distributor: string;
    })[];
    static removeOpportunityFromRewardBreakdown(rewards: Awaited<ReturnType<(typeof RewardService)["getUserRewardsByChain"]>>): (Omit<{
        chain: Chain;
        rewards: Awaited<ReturnType<(typeof RewardService)["format"]>>;
    }, "rewards"> & {
        rewards: (Omit<{
            token: {
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
            breakdowns: {
                campaignId: string;
                subCampaignId: string | undefined;
                opportunity: {
                    Chain: {
                        name: string;
                        id: number;
                        icon: string;
                    };
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
                };
                reason: string;
                pending: string;
                amount: string;
                claimed: string;
            }[];
            claimed: bigint;
            amount: bigint;
            pending: bigint;
            root: string;
            recipient: string;
            proofs: string[];
        }, "breakdowns"> & {
            breakdowns: {
                campaignId: string;
                subCampaignId: string | undefined;
                reason: string;
                pending: string;
                amount: string;
                claimed: string;
            }[];
        })[];
    })[];
    static findManyRootsOnChain(chainId: ChainId): Promise<string[]>;
    static checkLastClaim(chainId: number, user: string, rewards: Awaited<ReturnType<(typeof RewardService)["getByRecipient"]>>): Promise<({
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
        Breakdown: ({
            Campaign: {
                campaignId: string;
                Opportunity: {
                    Chain: {
                        name: string;
                        id: number;
                        icon: string;
                    };
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
                };
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
        pending: string;
        id: string;
        rewardTokenId: string;
        amount: string;
        root: string;
        recipient: string;
        claimed: string;
        proofs: string[];
    })[]>;
    static getUserRewardsByChain(user: string, withToken: boolean, chainFilter?: ChainId[], connectedChainId?: MerklChainId | null, withTestTokens?: boolean, claimableOnly?: boolean): Promise<{
        chain: Chain;
        rewards: Awaited<ReturnType<(typeof RewardService)["format"]>>;
    }[]>;
    static registerClaims(claims: RegisterClaimsModel): Promise<void>;
    static countOnChain(chainId: number): Promise<{
        [x: number]: {
            rewardCount: number;
            breakdownCount: number;
        };
    }>;
    static breakdownForCampaign(query: CampaignIdModel): Promise<import("./reward.model").BreakdownForCampaignsRaw[]>;
    static countForCampaign(query: CampaignIdModel): Promise<{
        count: number;
    }>;
    static totalForCampaign(query: CampaignIdModel): Promise<{
        campaignId: string;
        amount: bigint;
    }>;
    static breakdownForToken(query: TokenIdModel): Promise<{
        amount: string;
        claimed: string;
        pending: string;
        recipient: string;
    }[]>;
    static countForToken(query: TokenIdModel): Promise<{
        count: number;
    }>;
    static totalForToken(query: TokenIdModel): Promise<{
        tokenId: string;
        amount: bigint;
    }>;
    static getAmountAndClaimedForCampaigns(x: CampaignIdWithoutPageModel): Promise<{
        campaignId: string;
        amount: string;
        claimed: string;
    }[]>;
    static getUnclaimed(x: CampaignIdWithoutPageModel): Promise<Record<string, string>>;
    /**
     * @deprecated
     */
    static extractDailyRewardsRecordFromDynamicData<C extends CampaignType>(type: C, dynamicData: CampaignDynamicData<C>[], timestamp?: bigint): Promise<DailyRewardsRecord["model"]>;
}
