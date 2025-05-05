import { RewardService } from "./reward.service";
export class RewardConvertorService {
    /**
     * Convert the v4 reward data to the v3 model used in the v3/userRewards route
     */
    static convertV4toUserRewardV3(data, includeProofs = false) {
        const res = {};
        for (const { chain: _chain, rewards } of data) {
            for (const reward of rewards) {
                const { token, breakdowns, proofs } = reward;
                const rewardToken = token.address;
                res[rewardToken] = {
                    accumulated: reward.amount.toString(),
                    decimals: token.decimals,
                    symbol: token.symbol,
                    unclaimed: (reward.amount - reward.claimed).toString(),
                    pending: reward.pending.toString(),
                    proof: includeProofs ? proofs : undefined,
                    reasons: {},
                };
                for (const breakdown of breakdowns) {
                    const { amount, claimed, pending, reason } = breakdown;
                    if (!res[rewardToken].reasons[reason]) {
                        res[rewardToken].reasons[reason] = {
                            accumulated: amount,
                            unclaimed: (BigInt(amount) - BigInt(claimed)).toString(),
                            pending,
                        };
                    }
                    else {
                        res[rewardToken].reasons[reason].accumulated = (BigInt(res[rewardToken].reasons[reason].accumulated) + BigInt(amount)).toString();
                        res[rewardToken].reasons[reason].unclaimed = (BigInt(res[rewardToken].reasons[reason].unclaimed) +
                            BigInt(amount) -
                            BigInt(claimed)).toString();
                        res[rewardToken].reasons[reason].pending = (BigInt(res[rewardToken].reasons[reason].pending ?? "0") + BigInt(pending)).toString();
                    }
                }
            }
        }
        return res;
    }
    /**
     * Convert the v4 reward data to the v3 model used in the v3/rewards route
     */
    static convertV4toRewardV3(data) {
        const res = {};
        for (const { chain, rewards } of data) {
            res[chain.id] = {
                campaignData: {},
                tokenData: {},
            };
            for (const reward of rewards) {
                const { token, breakdowns, proofs } = reward;
                const rewardToken = token.address;
                if (!res[chain.id].tokenData[rewardToken]) {
                    res[chain.id].tokenData[rewardToken] = {
                        accumulated: reward.amount.toString(),
                        unclaimed: (reward.amount - reward.claimed).toString(),
                        pending: reward.pending.toString(),
                        decimals: token.decimals,
                        symbol: token.symbol,
                        proof: proofs,
                    };
                }
                for (const breakdown of breakdowns) {
                    const { amount, claimed, pending, reason, campaignId } = breakdown;
                    if (!res[chain.id].campaignData[campaignId]) {
                        res[chain.id].campaignData[campaignId] = {};
                    }
                    if (!res[chain.id].campaignData[campaignId][reason]) {
                        res[chain.id].campaignData[campaignId][reason] = {
                            accumulated: "0",
                            unclaimed: "0",
                            pending: "0",
                            decimals: token.decimals,
                            mainParameter: breakdown.opportunity.identifier,
                            symbol: token.symbol,
                            token: rewardToken,
                        };
                    }
                    res[chain.id].campaignData[campaignId][reason].accumulated = (BigInt(res[chain.id].campaignData[campaignId][reason].accumulated) + BigInt(amount)).toString();
                    res[chain.id].campaignData[campaignId][reason].unclaimed = (BigInt(res[chain.id].campaignData[campaignId][reason].unclaimed) +
                        BigInt(amount) -
                        BigInt(claimed)).toString();
                    res[chain.id].campaignData[campaignId][reason].pending = (BigInt(res[chain.id].campaignData[campaignId][reason].pending ?? "0") + BigInt(pending)).toString();
                }
            }
        }
        return res;
    }
    static async convertV4toMerklV2(user, chainId, data) {
        const rewardsV4 = await RewardService.getUserRewardsByChain(user, false, [chainId]);
        if (!!rewardsV4?.[0]?.rewards) {
            const userType = {
                transactionData: rewardsV4[0].rewards.reduce((acc, reward) => {
                    acc[reward.token.address] = {
                        claim: BigInt(reward.amount).toString(),
                        leaf: reward.proofs?.[0],
                        proof: reward.proofs,
                        token: reward.token.address,
                    };
                    return acc;
                }, {}),
            };
            data = { ...data, ...userType };
        }
        for (const rewardsPerChain of rewardsV4) {
            for (const reward of rewardsPerChain.rewards) {
                for (const breakdown of reward.breakdowns) {
                    const mainParameter = breakdown?.opportunity?.identifier;
                    if (!!mainParameter) {
                        const campaignIndex = data?.pools?.[mainParameter]?.distributionData?.findIndex(d => d.id === breakdown.campaignId);
                        if (campaignIndex >= 0) {
                            data.pools[mainParameter].distributionData[campaignIndex].unclaimed =
                                (data.pools[mainParameter].distributionData[campaignIndex].unclaimed ?? 0) +
                                    Number.parseInt((BigInt(reward.amount) - BigInt(reward.claimed)).toString());
                        }
                    }
                }
            }
        }
        return data;
    }
}
