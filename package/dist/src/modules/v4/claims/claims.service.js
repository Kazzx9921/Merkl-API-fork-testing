import { MerklRootService } from "@/modules/v4/merklRoot/merklRoot.service";
import { RewardService } from "@/modules/v4/reward/reward.service";
import { ClaimRepository } from "./claims.repository";
export class ClaimService {
    // ─── Get Historical Claims ─────────────────────────────────────────────────
    static async getHistoricalClaims(params, chainFilter = []) {
        const roots = Object.values(await MerklRootService.fetchAll()).map(r => r.live);
        const rewards = await RewardService.getByRecipient(params.address, roots, true, true, chainFilter);
        const filteredRewards = chainFilter.length
            ? rewards.filter(reward => chainFilter.includes(reward.RewardToken.chainId))
            : rewards;
        const chainIds = [];
        for (const reward of filteredRewards) {
            if (!chainIds.includes(reward.RewardToken.chainId)) {
                chainIds.push(reward.RewardToken.chainId);
            }
        }
        const tokens = filteredRewards.reduce((acc, reward) => {
            acc[reward.RewardToken.address.toLowerCase()] = reward.RewardToken;
            return acc;
        }, {});
        const promises = await Promise.allSettled(chainIds.map(chainId => ClaimRepository.fetch(chainId, params.address)));
        const claims = promises.filter(p => p.status === "fulfilled")
            .flatMap(p => p.value ?? []) // null/undefined claim arrays
            .filter(claim => {
            // Ensure the claim's token exists and matches the chainFilter
            const token = claim?.token ? tokens[claim.token.toLowerCase()] : undefined;
            return token && (!chainFilter.length || chainFilter.includes(token.chainId));
        })
            .map(claim => {
            const token = claim?.token ? tokens[claim.token.toLowerCase()] : undefined;
            return {
                ...claim,
                amount: claim.rawAmount,
                token,
            };
        });
        return claims.sort((a, b) => Number(b.timestamp) - Number(a.timestamp));
    }
}
