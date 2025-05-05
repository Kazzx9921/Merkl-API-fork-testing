import { RewardService } from "@/modules/v4/reward/reward.service";
import { t } from "elysia";
import checkQueryChainIdValidity from "../../hooks/checkQueryChainIdValidity";
/**
 * @deprecated - conversion to v4 done
 */
export default (app) => app.use(checkQueryChainIdValidity()).get("/recipients", async ({ query }) => {
    const campaignId = query.campaignId;
    const chainId = query.chainId;
    return (await RewardService.breakdownForCampaign({
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
    });
}, {
    query: t.Object({
        campaignId: t.String(),
        chainId: t.Numeric(),
    }),
    tags: ["Campaigns"],
});
