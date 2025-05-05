import { RewardService } from "@/modules/v4/reward/reward.service";
import { t } from "elysia";
/**
 * @deprecated - conversion to v4 done
 */
export const query = t.Object({
    chain_campaignIds: t.Array(t.String(), {
        style: "pipeDelimited",
        examples: {
            "Shuffle on Ethereum": {
                value: "1_0xf69d17aa75d36c4a9c6402fd9abc012b66a7947acaa2b20b267fe3ef10733421|1_0x817b90779d8b6789b832c9bafe9aaa22bc907f072dedb31ef0bfb280bf6a037e",
            },
        },
    }),
    from: t.Optional(t.Numeric()),
    to: t.Optional(t.Numeric()),
});
export default (app) => app.get("/campaignsRewardsReport", async ({ query: { chain_campaignIds } }) => {
    const rewards = [];
    const campaigns = chain_campaignIds.map(c_c => {
        const [chain, campaignId] = c_c.split("_");
        return [Number.parseInt(chain), campaignId];
    });
    for (const [chainId, campaignId] of campaigns) {
        rewards.push(...(await RewardService.breakdownForCampaign({
            campaignId,
            chainId,
            items: 10_000,
            page: 0,
        })).map(x => {
            return {
                recipient: x.recipient,
                reason: x.reason,
                rewardToken: x.rewardTokenAddress,
                amount: x.amount,
            };
        }));
    }
    return rewards;
}, {
    transform({ query }) {
        query.chain_campaignIds =
            query.chain_campaignIds?.split?.("|") ??
                query.chain_campaignIds;
    },
    query,
    tags: ["Rewards"],
});
