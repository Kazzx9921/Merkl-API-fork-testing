import { BlacklistService } from "@/modules/v4/blacklist/blacklist.service";
import { TTLPresets } from "@/modules/v4/cache/cache.model";
import { CacheService } from "@/modules/v4/cache/cache.service";
import { CampaignService } from "@/modules/v4/campaign/campaign.service";
import { ChainService } from "@/modules/v4/chain/chain.service";
import { MerklRootService } from "@/modules/v4/merklRoot/merklRoot.service";
import { OpportunityService } from "@/modules/v4/opportunity/opportunity.service";
import { TokenService } from "@/modules/v4/token/token.service";
import { log } from "@/utils/logger";
import { Campaign as CampaignType, DAY, DistributorService, NETWORK_LABELS, } from "@sdk";
import moment from "moment";
import { RewardRepository } from "./reward.repository";
export class RewardService {
    static hashId(root, recipient, rewardTokenId) {
        return Bun.hash(`${root}${recipient}${rewardTokenId}`).toString();
    }
    static hashBreakdownId(rewardId, campaignId, reason) {
        return Bun.hash(`${rewardId}${campaignId}${reason}`).toString();
    }
    static hashDailyRewardsRecordId(opportunityId, timestamp) {
        return Bun.hash(`${opportunityId}${timestamp}`).toString();
    }
    static async createManyReward(rewards) {
        return await RewardRepository.createManyReward(rewards);
    }
    static async getTotalDistributedByOpportunities(since) {
        const opportunities = await OpportunityService.findMany({ items: 0 });
        const promiseArray = [];
        let i = 0;
        const oppToDailyRewards = new Map();
        for (i = 0; i < opportunities.length; i++) {
            promiseArray.push(RewardRepository.sumDailyRewardsAvgByOpportunity(since, opportunities[i].id));
        }
        const result = await Promise.all(promiseArray);
        i = 0;
        for (i = 0; i < result.length; i++) {
            // need an upper threshold bc certain opportunities have crazy daily rewards (cf. vicuna)
            if (result[i] !== null && result[i] > 0 && result[i] <= 1_000_000_000)
                oppToDailyRewards.set(opportunities[i], result[i]);
        }
        return oppToDailyRewards;
    }
    static async getTotalDistributed(since) {
        const oppToDailyRewards = await RewardService.getTotalDistributedByOpportunities(since);
        return oppToDailyRewards.values().reduce((prev, curr) => prev + curr, 0);
    }
    static async getTotalDistributedByChain(since) {
        const oppToDailyRewards = await RewardService.getTotalDistributedByOpportunities(since);
        const chainsToDailyRewards = new Map();
        for (const [opp, dr] of oppToDailyRewards.entries()) {
            const dailyRewards = chainsToDailyRewards.get(opp.chainId) === undefined ? dr : chainsToDailyRewards.get(opp.chainId) + dr;
            chainsToDailyRewards.set(opp.chainId, dailyRewards);
        }
        return Object.fromEntries(chainsToDailyRewards);
    }
    static async getTotalDistributedByProtocol(since) {
        const oppToDailyRewards = await RewardService.getTotalDistributedByOpportunities(since);
        const protocolToDailyRewards = new Map();
        for (const [opp, dr] of oppToDailyRewards.entries()) {
            const dailyRewards = protocolToDailyRewards.get(opp.protocol?.id) === undefined
                ? dr
                : protocolToDailyRewards.get(opp.protocol?.id) + dr;
            protocolToDailyRewards.set(opp.protocol?.id, dailyRewards);
        }
        return Object.fromEntries(protocolToDailyRewards);
    }
    static async getTotalDistributedByType(since) {
        const oppToDailyRewards = await RewardService.getTotalDistributedByOpportunities(since);
        const typeToDailyRewards = new Map();
        for (const [opp, dr] of oppToDailyRewards.entries()) {
            const dailyRewards = typeToDailyRewards.get(opp.type) === undefined ? dr : typeToDailyRewards.get(opp.type) + dr;
            typeToDailyRewards.set(opp.type, dailyRewards);
        }
        return Object.fromEntries(typeToDailyRewards);
    }
    /**
     * Format the reward breakdown to conform to its resource model declaration
     * @param breakdown straight from db
     * @returns a RewardBreakdown model
     */
    static formatBreakdown(breakdown) {
        const { Campaign, id, rewardId, protocolId, subCampaignId, ...rest } = breakdown;
        return {
            ...rest,
            campaignId: Campaign.campaignId,
            subCampaignId: subCampaignId ?? undefined,
            opportunity: Campaign.Opportunity,
        };
    }
    /**
     * Format the reward to conform to its resource model declaration
     * @param reward straight from db
     * @returns a Reward model
     */
    static format(rewards) {
        return rewards.map(reward => {
            const { Breakdown, RewardToken, id, rewardTokenId, ...rest } = reward;
            return {
                ...rest,
                token: RewardToken,
                breakdowns: Breakdown.map(RewardService.formatBreakdown),
                claimed: BigInt(rest.claimed),
                amount: BigInt(rest.amount),
                pending: BigInt(rest.pending),
            };
        });
    }
    static async createManyBreakdown(data) {
        const missingCampaigns = [];
        const foundCampaigns = [];
        for (const dataPerCampaign of data) {
            const campaignUnique = {
                distributionChain: dataPerCampaign.distributionChainId,
                campaignId: dataPerCampaign.campaignId,
            };
            const campaignExists = await CampaignService.checkIfExist(campaignUnique);
            if (!campaignExists) {
                const { success, fail } = await CampaignService.fill([campaignUnique]);
                if (fail === 1 || success !== 1) {
                    missingCampaigns.push(CampaignService.hashId(campaignUnique));
                    log.warn(`createManyBreakdown - Missing campaign: ${campaignUnique.campaignId} on ${NETWORK_LABELS[campaignUnique.distributionChain]}`);
                    continue;
                }
            }
            foundCampaigns.push(CampaignService.hashId(campaignUnique));
        }
        try {
            return await RewardRepository.createManyBreakdown(data.filter(dataPerCampaign => !missingCampaigns.includes(CampaignService.hashId({
                distributionChain: dataPerCampaign.distributionChainId,
                campaignId: dataPerCampaign.campaignId,
            }))));
        }
        catch (e) {
            log.error(`createManyBreakdown - error creating many breakdowns for campaigns ${foundCampaigns.join(", ")}`, e);
        }
    }
    static async getByRecipient(recipient, roots, withToken = false, withTestTokens = false, chainFilter, reasonFilter) {
        return RewardRepository.getByRecipient(recipient, roots, withToken, withTestTokens, chainFilter, reasonFilter);
    }
    /**
     * Groups a breakdown array by their corresponding opportunities
     * @param breakdowns with campaignIds
     * @returns array of breakdown group, including the opportunity they belong to
     */
    static splitBreakdownByOpportunity(breakdowns) {
        const opportunities = breakdowns.reduce((aux, { opportunity }) => {
            if (!aux.some(o => o.id === opportunity.id))
                aux.push(opportunity);
            return aux;
        }, []);
        if (!opportunities)
            return [];
        return opportunities.map(opportunity => {
            const relatedBreakdowns = breakdowns.filter(b => opportunity.id.includes(b.opportunity.id));
            const formattedOpportunity = OpportunityService.formatResponseBase(opportunity);
            return {
                opportunity: formattedOpportunity,
                claimed: relatedBreakdowns.reduce((total, { claimed }) => total + BigInt(claimed), 0n),
                amount: relatedBreakdowns.reduce((total, { amount }) => total + BigInt(amount), 0n),
                pending: relatedBreakdowns.reduce((total, { pending }) => total + BigInt(pending), 0n),
            };
        });
    }
    /**
     * Applies the splitBreakdownByOpportunity function to each rewards in the array
     * @param rewards return type for most of the rewards functions
     * @returns rewards with updated breakdowns, including the opportunity they belong to
     */
    static splitRewardsBreakdownByOpportunity(rewards) {
        return rewards.map(rewardByChain => {
            const rewards = rewardByChain.rewards.map(reward => {
                const breakdowns = RewardService.splitBreakdownByOpportunity(reward.breakdowns);
                return Object.assign(reward, { breakdowns });
            });
            const distributor = DistributorService(rewardByChain.chain.id).address;
            return Object.assign(rewardByChain, { rewards }, { distributor });
        });
    }
    static removeOpportunityFromRewardBreakdown(rewards) {
        return rewards.map(rewardByChain => {
            const rewards = rewardByChain.rewards.map(reward => {
                const breakdowns = reward.breakdowns.map(breakdown => {
                    const { opportunity, ...rest } = breakdown;
                    return rest;
                });
                return Object.assign(reward, { breakdowns });
            });
            return Object.assign(rewardByChain, { rewards });
        });
    }
    static async findManyRootsOnChain(chainId) {
        return await CacheService.wrap(TTLPresets.MIN_10, RewardRepository.findManyRootsWithRewardOnChain, chainId);
    }
    static async checkLastClaim(chainId, user, rewards) {
        // Fetch the root of the last claim for each reward token
        const claims = await DistributorService(chainId).claimedMultiple(user, rewards.map(reward => reward.RewardToken.address));
        const rootsWithRewardOnChain = await RewardService.findManyRootsOnChain(chainId);
        for (const [index, reward] of rewards.entries()) {
            const tokenId = TokenService.hashId(reward.RewardToken);
            const merklRootClaimedOn = claims[index].merkleRoot;
            // -> claim is on the current root (chainData.merklRoot) -> claimed === accumulated
            if (merklRootClaimedOn === reward.root) {
                reward.claimed = reward.amount;
                await RewardRepository.updateRewardClaimed(user, tokenId, reward.amount);
                for (const breakdown of reward.Breakdown) {
                    if (BigInt(breakdown.claimed) === BigInt(breakdown.amount))
                        continue;
                    breakdown.claimed = breakdown.amount; // Set unclaim to 0
                    await RewardRepository.updateBreakdownClaimed(user, tokenId, breakdown.campaignId, breakdown.reason, breakdown.amount);
                }
            }
            // -> claim is on a tree we have in db -> claimed === accumulated of the rewards of lastTree
            else if (rootsWithRewardOnChain.includes(merklRootClaimedOn)) {
                const lastTreeRewards = await RewardRepository.getByChainRecipientToken(user, merklRootClaimedOn, TokenService.hashId(reward.RewardToken));
                if (!lastTreeRewards)
                    continue;
                reward.claimed = lastTreeRewards.amount;
                await RewardRepository.updateRewardClaimed(user, tokenId, lastTreeRewards.amount);
                for (const breakdown of reward.Breakdown) {
                    const lastTreeRewardsBreakdown = lastTreeRewards.Breakdown.find(lastTreeBreakdown => lastTreeBreakdown.reason === breakdown.reason &&
                        lastTreeBreakdown.Campaign.campaignId === breakdown.Campaign.campaignId);
                    if (!lastTreeRewardsBreakdown)
                        continue;
                    breakdown.claimed = lastTreeRewardsBreakdown.amount;
                    await RewardRepository.updateBreakdownClaimed(user, tokenId, breakdown.campaignId, breakdown.reason, breakdown.claimed);
                }
            }
        }
        return rewards;
    }
    static async getUserRewardsByChain(user, withToken, chainFilter = [], connectedChainId = null, withTestTokens = false, claimableOnly = false) {
        const chains = await ChainService.findMany({});
        let chainIds = !chainFilter || !chainFilter.length
            ? chains.map(({ id }) => id)
            : chains.map(({ id }) => id).filter(id => chainFilter.includes(id));
        /** Check if the user is blacklisted */
        const isBlacklisted = !!(await BlacklistService.isBlacklisted(user));
        const res = [];
        if (isBlacklisted)
            return res;
        /** Fetch current Merkle Roots */
        const merkleRootsPromises = await Promise.allSettled(chainIds.map(chainId => MerklRootService.fetchFromCache(chainId)));
        /** Filter out unsuccessful chainIds */
        chainIds = chainIds.filter((_, index) => merkleRootsPromises[index].status === "fulfilled");
        const merkleRoots = merkleRootsPromises
            .filter(({ status }) => status === "fulfilled")
            .map(x => x.value);
        /** Load rewards from api DB */
        const rewards = (await RewardService.getByRecipient(user, merkleRoots.map(({ live }) => live), withToken, withTestTokens)).filter(reward => chainIds.includes(reward.RewardToken.chainId) &&
            (claimableOnly ? BigInt(reward.amount) - BigInt(reward.claimed) > 0n : true));
        const promises = [];
        for (const chainId of chainIds) {
            const chain = chains.find(chain => chain.id === chainId);
            if (!chain)
                throw new Error(`Chain ${chainId} not found`);
            const chainRewards = rewards.filter(reward => reward.RewardToken.chainId === chainId);
            /** Check when the last claim happened */
            if (chain.id === connectedChainId && chainRewards.length > 0) {
                promises.push(RewardService.checkLastClaim(chainId, user, chainRewards).then(r => {
                    return { chain, rewards: r };
                }));
            }
            else if (chainRewards.length > 0) {
                promises.push(Promise.resolve({ chain, rewards: chainRewards }));
            }
        }
        const settledPromises = await Promise.allSettled(promises);
        for (const promise of settledPromises) {
            if (promise.status === "rejected") {
                log.error("checkLastClaim failed", promise.reason);
            }
            else {
                res.push({ chain: promise.value.chain, rewards: RewardService.format(promise.value.rewards) });
            }
        }
        return res;
    }
    static async registerClaims(claims) {
        for (const claim of claims) {
            const tokenId = TokenService.hashId({
                chainId: claim.chainId,
                address: claim.token,
            });
            const rewards = await RewardRepository.getByChainRecipientToken(claim.recipient, claim.root, tokenId);
            if (!rewards)
                continue;
            await RewardRepository.updateRewardClaimed(claim.recipient, tokenId, rewards.amount);
            for (const breakdown of rewards.Breakdown) {
                await RewardRepository.updateBreakdownClaimed(claim.recipient, tokenId, breakdown.campaignId, breakdown.reason, breakdown.amount);
            }
        }
    }
    static async countOnChain(chainId) {
        const roots = await MerklRootService.fetchFromCache(chainId);
        const promises = [
            RewardRepository.countRewardAndBreakdownOnChain(chainId, roots.tree),
            RewardRepository.countRewardAndBreakdownOnChain(chainId, roots.lastTree),
        ];
        await Promise.all(promises);
        return {
            [roots.tree]: await promises[0],
            [roots.lastTree]: await promises[1],
        };
    }
    static async breakdownForCampaign(query) {
        const root = await MerklRootService.fetchFromCache(query.chainId);
        const id = CampaignService.hashId({ distributionChain: query.chainId, campaignId: query.campaignId });
        return RewardRepository.breakdownForCampaign(root.live, id, query);
    }
    static async countForCampaign(query) {
        const root = await MerklRootService.fetchFromCache(query.chainId);
        const id = CampaignService.hashId({ distributionChain: query.chainId, campaignId: query.campaignId });
        return RewardRepository.countForCampaign(id, root.live);
    }
    static async totalForCampaign(query) {
        const root = await MerklRootService.fetchFromCache(query.chainId);
        return RewardRepository.totalForCampaign(CampaignService.hashId({ distributionChain: query.chainId, campaignId: query.campaignId }), root.live);
    }
    static async breakdownForToken(query) {
        return CacheService.wrap(TTLPresets.MIN_10, async (query) => {
            const root = await MerklRootService.fetchFromCache(query.chainId);
            const id = TokenService.hashId({ chainId: query.chainId, address: query.address });
            return RewardRepository.breakdownForToken(root.live, id, query);
        }, query);
    }
    static async countForToken(query) {
        return CacheService.wrap(TTLPresets.MIN_10, async (query) => {
            const root = await MerklRootService.fetchFromCache(query.chainId);
            const id = TokenService.hashId({ chainId: query.chainId, address: query.address });
            return RewardRepository.countForToken(id, root.live);
        }, query);
    }
    static async totalForToken(query) {
        return CacheService.wrap(TTLPresets.MIN_10, async (query) => {
            const root = await MerklRootService.fetchFromCache(query.chainId);
            const id = TokenService.hashId({ chainId: query.chainId, address: query.address });
            return RewardRepository.totalForToken(id, root.live);
        }, query);
    }
    static async getAmountAndClaimedForCampaigns(x) {
        const currentRoot = await MerklRootService.fetchFromCache(x.chainId);
        return await RewardRepository.getAmountAndClaimedForCampaigns(currentRoot.live, x);
    }
    static async getUnclaimed(x) {
        const campaignToCampaignIds = x.campaignIds.reduce((acc, campaignId) => {
            acc[CampaignService.hashId({ distributionChain: x.chainId, campaignId })] = campaignId;
            return acc;
        }, {});
        const data = await RewardService.getAmountAndClaimedForCampaigns(x);
        return data.reduce((acc, { amount, campaignId, claimed }) => {
            if (!acc[campaignToCampaignIds[campaignId]])
                acc[campaignToCampaignIds[campaignId]] = "0";
            acc[campaignToCampaignIds[campaignId]] = (BigInt(acc[campaignToCampaignIds[campaignId]]) +
                BigInt(amount) -
                BigInt(claimed)).toString();
            return acc;
        }, {});
    }
    /**
     * @deprecated
     */
    static async extractDailyRewardsRecordFromDynamicData(type, dynamicData, timestamp = BigInt(moment().unix())) {
        const typesWithoutApr = [CampaignType.INVALID];
        if (typesWithoutApr.includes(type))
            return { timestamp, total: 0, breakdowns: [] };
        const breakdowns = [];
        for (const { amount, rewardToken, chainId, startTimestamp: start, endTimestamp: end, campaignId } of dynamicData) {
            if (end < moment().unix())
                continue;
            const timespan = Number(end - start);
            const isWithinTimespan = moment().unix() > start && moment().unix() < end;
            const dayspan = Math.max(1, Math.floor(timespan / DAY));
            const dailyAmount = isWithinTimespan ? BigInt(amount) / BigInt(dayspan) : BigInt(0);
            const campaignIdInDb = CampaignService.hashId({ campaignId, distributionChain: chainId });
            try {
                let token;
                try {
                    token = await TokenService.findUniqueOrThrow({ address: rewardToken, chainId });
                }
                catch {
                    await TokenService.findManyOrCreate([{ address: rewardToken, chainId }]);
                    token = await TokenService.findUniqueOrThrow({ address: rewardToken, chainId });
                }
                const campaignDailyValue = await TokenService.getValueByTokenId(TokenService.hashId({ address: rewardToken, chainId }), dailyAmount);
                breakdowns.push({
                    campaignId: campaignIdInDb,
                    value: campaignDailyValue,
                    amount: dailyAmount,
                    token,
                });
            }
            catch (_err) {
                log.warn(`token ${rewardToken} not found`);
            }
        }
        return {
            timestamp,
            total: breakdowns.reduce((sum, { value }) => {
                return sum + value;
            }, 0),
            breakdowns,
        };
    }
}
