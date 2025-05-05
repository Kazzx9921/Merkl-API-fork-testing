import { RewardService } from "@/modules/v4/reward/reward.service";
import { InvalidParameter } from "@/utils/error";
import { t } from "elysia";
import checkQueryChainIdValidity from "../../hooks/checkQueryChainIdValidity";
/**
 * @deprecated - conversion to v4 done
 */
export const query = t.Object({
    campaignId: t.String(),
    chainId: t.Numeric(),
    from: t.Optional(t.Numeric()),
    mainParameter: t.Optional(t.String()),
    to: t.Optional(t.Numeric()),
});
export default (app) => app.use(checkQueryChainIdValidity()).get("/rewardsReport", async ({ query }) => {
    const campaignId = query.campaignId;
    const chainId = query.chainId;
    const from = query.from;
    const to = query.to;
    if (!!to || !!from)
        throw new InvalidParameter("Passing timestamps to this route was disabled for now");
    if (!!query.mainParameter)
        throw new InvalidParameter("Using this route with a main parameter was temporarily disabled");
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
    query,
    tags: ["Rewards"],
});
