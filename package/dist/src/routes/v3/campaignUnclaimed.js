import { RewardService } from "@/modules/v4/reward/reward.service";
import { t } from "elysia";
import checkQueryChainIdValidity from "../../hooks/checkQueryChainIdValidity";
/**
 * @deprecated - conversion to v4 done
 */
export const query = t.Object({
    campaignIds: t.String(),
    chainId: t.Numeric(),
});
export default (app) => app.use(checkQueryChainIdValidity()).get("/campaignUnclaimed", async ({ query }) => {
    const campaignIds = query.campaignIds;
    let campaigns = [];
    if (campaignIds.includes(",")) {
        campaigns = campaignIds.split(",");
    }
    else {
        campaigns = [campaignIds];
    }
    const chainId = query.chainId;
    return await RewardService.getUnclaimed({
        chainId,
        campaignIds: campaigns,
    });
}, {
    query,
    tags: ["Campaigns"],
});
