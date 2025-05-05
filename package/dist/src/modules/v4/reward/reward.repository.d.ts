import { type ChainId } from "@sdk";
import type { BreakdownForCampaignsRaw, CampaignIdModel, CampaignIdWithoutPageModel, CreateManyBreakdownModel, CreateManyRewardModel, TokenIdModel } from "./reward.model";
export declare abstract class RewardRepository {
    static createManyReward(rewards: CreateManyRewardModel): Promise<import("database/api/.generated/runtime/library").GetBatchResult>;
    static createManyBreakdown(data: CreateManyBreakdownModel): Promise<import("database/api/.generated/runtime/library").GetBatchResult>;
    static getByRecipient(recipient: string, roots: string[], withToken: boolean, withTestTokens: boolean, chainFilter?: ChainId[] | null, reasonFilter?: string): Promise<({
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
    static getByChainRecipientToken(recipient: string, root: string, tokenId: string): Promise<({
        Breakdown: ({
            Campaign: {
                campaignId: string;
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
    }) | null>;
    static countRewardAndBreakdownOnChain(chainId: number, root: string): Promise<{
        rewardCount: number;
        breakdownCount: number;
    }>;
    static updateRewardClaimed(recipient: string, rewardTokenId: string, amount: string): Promise<import("database/api/.generated/runtime/library").GetBatchResult>;
    static updateBreakdownClaimed(recipient: string, rewardTokenId: string, campaignId: string, reason: string, amount: string): Promise<import("database/api/.generated/runtime/library").GetBatchResult>;
    static findManyRootsWithRewardOnChain(chainId: number): Promise<string[]>;
    static breakdownForCampaign(root: string, id: string, query: CampaignIdModel): Promise<BreakdownForCampaignsRaw[]>;
    static totalForCampaign(campaignId: string, root: string): Promise<{
        campaignId: string;
        amount: bigint;
    }>;
    static countForCampaign(campaignId: string, root: string): Promise<{
        count: number;
    }>;
    static breakdownForToken(root: string, id: string, query: TokenIdModel): Promise<{
        amount: string;
        claimed: string;
        pending: string;
        recipient: string;
    }[]>;
    static totalForToken(tokenId: string, root: string): Promise<{
        tokenId: string;
        amount: bigint;
    }>;
    static countForToken(tokenId: string, root: string): Promise<{
        count: number;
    }>;
    static getAmountAndClaimedForCampaigns(root: string, x: CampaignIdWithoutPageModel): Promise<{
        campaignId: string;
        amount: string;
        claimed: string;
    }[]>;
    /**
     * Calculates the sum of daily average rewards for a given opportunity since a specified timestamp.
     *
     * @param since - The timestamp (in seconds) from which to start calculating the rewards.
     * @param opportunityId - The ID of the opportunity for which to calculate the rewards.
     * @returns The sum of daily average rewards for the specified opportunity since the given timestamp.
     */
    static sumDailyRewardsAvgByOpportunity(since: number, opportunityId: string): Promise<number>;
}
