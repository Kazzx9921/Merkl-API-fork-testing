import { Campaign, Reward, RewardBreakdown } from "@db/api:drizzle";
import { CampaignService } from "@/modules/v4/campaign/campaign.service";
import { TokenService } from "@/modules/v4/token/token.service";
import { UserService } from "@/modules/v4/user/user.service";
import { apiDbClient } from "@db";
import { DAY } from "@sdk";
import { and, eq, exists, inArray, sql } from "drizzle-orm";
import { RewardService } from "./reward.service";
export class RewardRepository {
    static async createManyReward(rewards) {
        const users = rewards.map(reward => {
            return {
                address: reward.recipient,
                tags: [],
            };
        });
        await UserService.createMany(users);
        const rewardsToCreate = rewards.map(reward => {
            const rewardTokenId = TokenService.hashId({ address: reward.rewardToken, chainId: reward.distributionChainId });
            return {
                id: RewardService.hashId(reward.root, reward.recipient, rewardTokenId),
                root: reward.root,
                amount: reward.amount,
                pending: reward.pending,
                claimed: reward.claimed,
                recipient: reward.recipient,
                rewardTokenId,
                proofs: reward.proofs,
            };
        });
        return await apiDbClient.reward.createMany({
            data: rewardsToCreate,
        });
    }
    static async createManyBreakdown(data) {
        const breakdownsToCreate = [];
        for (const dataPerCampaign of data) {
            const campaignId = CampaignService.hashId({
                distributionChain: dataPerCampaign.distributionChainId,
                campaignId: dataPerCampaign.campaignId,
            });
            dataPerCampaign.breakdowns.map(breakdown => {
                const rewardId = RewardService.hashId(dataPerCampaign.root, breakdown.recipient, TokenService.hashId({ address: dataPerCampaign.rewardToken, chainId: dataPerCampaign.distributionChainId }));
                breakdownsToCreate.push({
                    rewardId,
                    protocolId: breakdown.protocolId ? breakdown.protocolId : undefined,
                    campaignId,
                    reason: breakdown.reason ? breakdown.reason : "",
                    amount: breakdown.amount,
                    claimed: breakdown.claimed,
                    pending: breakdown.pending,
                });
            });
        }
        return await apiDbClient.rewardBreakdown.createMany({
            data: breakdownsToCreate,
        });
    }
    static async getByRecipient(recipient, roots, withToken, withTestTokens, chainFilter, reasonFilter) {
        return await apiDbClient.reward.findMany({
            where: {
                root: {
                    in: roots,
                },
                recipient,
                RewardToken: !!chainFilter?.length || !withTestTokens
                    ? {
                        chainId: !!chainFilter?.length ? { in: chainFilter } : undefined,
                        isTest: withTestTokens ? undefined : false,
                    }
                    : undefined,
                Breakdown: reasonFilter
                    ? {
                        some: {
                            reason: {
                                contains: reasonFilter,
                                mode: "insensitive",
                            },
                        },
                    }
                    : undefined,
            },
            include: {
                Breakdown: {
                    where: reasonFilter
                        ? {
                            reason: {
                                contains: reasonFilter,
                                mode: "insensitive",
                            },
                        }
                        : undefined,
                    include: {
                        Campaign: {
                            select: {
                                campaignId: true,
                                Opportunity: {
                                    include: {
                                        MainProtocol: true,
                                        Chain: true,
                                        Protocols: true,
                                        Tokens: true,
                                    },
                                },
                            },
                        },
                    },
                },
                RewardToken: withToken
                    ? true
                    : {
                        select: { address: true, chainId: true, symbol: true, decimals: true },
                    },
            },
        });
    }
    static async getByChainRecipientToken(recipient, root, tokenId) {
        return await apiDbClient.reward.findUnique({
            where: {
                root_recipient_rewardTokenId: {
                    root,
                    recipient,
                    rewardTokenId: tokenId,
                },
            },
            include: {
                Breakdown: {
                    include: {
                        Campaign: {
                            select: { campaignId: true },
                        },
                    },
                },
            },
        });
    }
    static async countRewardAndBreakdownOnChain(chainId, root) {
        const rewardCount = await apiDbClient.reward.count({
            where: {
                root,
                RewardToken: {
                    chainId,
                },
            },
        });
        const breakdownCount = await apiDbClient.rewardBreakdown.count({
            where: {
                Reward: {
                    root,
                    RewardToken: {
                        chainId,
                    },
                },
            },
        });
        return { rewardCount, breakdownCount };
    }
    static async updateRewardClaimed(recipient, rewardTokenId, amount) {
        return await apiDbClient.reward.updateMany({
            where: {
                recipient,
                rewardTokenId,
            },
            data: {
                claimed: amount,
            },
        });
    }
    static async updateBreakdownClaimed(recipient, rewardTokenId, campaignId, reason, amount) {
        return await apiDbClient.rewardBreakdown.updateMany({
            where: {
                campaignId,
                reason,
                Reward: {
                    recipient,
                    rewardTokenId,
                },
            },
            data: {
                claimed: amount,
            },
        });
    }
    static async findManyRootsWithRewardOnChain(chainId) {
        return (await apiDbClient.merklRoot.findMany({
            where: {
                chainId: chainId,
                Rewards: {
                    some: {},
                },
            },
            select: {
                root: true,
            },
        })).map(x => x.root);
    }
    static async breakdownForCampaign(root, id, query) {
        const { page: _page, items: _items } = query;
        const page = _page || 0;
        const items = _items || 50;
        const result = await apiDbClient.$queryRawUnsafe(`
      SELECT 
        rb."amount",
        rb."reason",
        rb."claimed",
        rb."pending",
        r."recipient",
        t."address" as "rewardTokenAddress"
      FROM 
        "RewardBreakdown" rb
      INNER JOIN 
        "Reward" r ON rb."rewardId" = r."id"
      INNER JOIN 
        "Token" t ON r."rewardTokenId" = t."id"
      WHERE 
        r."root" = $1 AND rb."campaignId" = $2
      ORDER BY 
        (rb."amount"::numeric + rb."pending"::numeric) DESC
      LIMIT $3
      OFFSET $4
    `, root, id, items, items * page);
        return result;
    }
    static async totalForCampaign(campaignId, root) {
        const totalAmount = await apiDbClient.rewardBreakdown.findMany({
            where: {
                campaignId,
                Reward: {
                    root,
                },
            },
            select: {
                amount: true,
                pending: true,
                campaignId: true,
            },
        });
        const reducedData = totalAmount.reduce((acc, { amount, pending }) => {
            acc.amount += BigInt(amount) + BigInt(pending ?? 0);
            return acc;
        }, { campaignId, amount: 0n });
        return reducedData;
    }
    static async countForCampaign(campaignId, root) {
        const count = await apiDbClient.rewardBreakdown.count({
            where: {
                campaignId,
                Reward: {
                    root,
                },
            },
        });
        return { count };
    }
    static async breakdownForToken(root, id, query) {
        const { page: _page, items: _items, campaignIds } = query;
        const page = _page || 0;
        const items = _items || 50;
        const ids = typeof campaignIds === "string"
            ? campaignIds === "[]"
                ? []
                : [campaignIds]
            : campaignIds?.some(c => c === "[]")
                ? []
                : (campaignIds ?? []);
        const result = await apiDbClient.$drizzle
            .select({ amount: Reward.amount, claimed: Reward.claimed, pending: Reward.pending, recipient: Reward.recipient })
            .from(Reward)
            .where(and(eq(Reward.root, root), eq(Reward.rewardTokenId, id), ids.length > 0
            ? exists(apiDbClient.$drizzle
                .select()
                .from(RewardBreakdown)
                .innerJoin(Campaign, eq(RewardBreakdown.campaignId, Campaign.id))
                .where(and(eq(RewardBreakdown.rewardId, Reward.id), inArray(Campaign.campaignId, ids))))
            : sql `TRUE`))
            .orderBy(sql `(${Reward.amount}::numeric + ${Reward.pending}::numeric) desc`)
            .limit(items)
            .offset(items * page);
        return result;
    }
    static async totalForToken(tokenId, root) {
        const totalAmount = await apiDbClient.reward.findMany({
            where: {
                rewardTokenId: tokenId,
                root,
            },
            select: {
                amount: true,
                pending: true,
            },
        });
        const reducedData = totalAmount.reduce((acc, { amount, pending }) => {
            acc.amount += BigInt(amount) + BigInt(pending ?? 0);
            return acc;
        }, { tokenId, amount: 0n });
        return reducedData;
    }
    static async countForToken(tokenId, root) {
        const count = await apiDbClient.reward.count({
            where: {
                rewardTokenId: tokenId,
                root,
            },
        });
        return { count };
    }
    static async getAmountAndClaimedForCampaigns(root, x) {
        return await apiDbClient.rewardBreakdown.findMany({
            select: {
                claimed: true,
                amount: true,
                campaignId: true,
            },
            where: {
                campaignId: {
                    in: x.campaignIds.map(campaignId => CampaignService.hashId({ distributionChain: x.chainId, campaignId })),
                },
                Reward: {
                    root,
                },
            },
        });
    }
    /**
     * Calculates the sum of daily average rewards for a given opportunity since a specified timestamp.
     *
     * @param since - The timestamp (in seconds) from which to start calculating the rewards.
     * @param opportunityId - The ID of the opportunity for which to calculate the rewards.
     * @returns The sum of daily average rewards for the specified opportunity since the given timestamp.
     */
    static async sumDailyRewardsAvgByOpportunity(since, opportunityId) {
        const dateToRewards = new Map();
        const dailyAvg = [];
        const records = await apiDbClient.dailyRewardsRecord.findMany({
            where: { opportunityId, timestamp: { gte: since }, total: { gt: 0 } },
            select: { timestamp: true, total: true },
        });
        if (records.length === 0)
            return 0;
        for (const record of records) {
            const date = Math.floor(Number(record.timestamp) / DAY).toString();
            const rewards = dateToRewards.get(date) ?? [];
            rewards.push(record.total);
            dateToRewards.set(date, rewards);
        }
        for (const rewards of dateToRewards.values())
            dailyAvg.push(rewards.reduce((prev, curr) => prev + curr, 0) / rewards.length);
        return dailyAvg.reduce((prev, curr) => prev + curr, 0);
    }
}
