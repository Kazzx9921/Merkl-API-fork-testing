import { RewardConvertorService } from "@/modules/v4/reward/reward.converter";
import { RewardService } from "@/modules/v4/reward/reward.service";
import { ChainId, isSupportedChain } from "@sdk";
import { t } from "elysia";
import checkQueryAddressValidity from "../../hooks/checkQueryAddressValidity";
/**
 * @deprecated - conversion to v4 done
 */
export const query = t.Object({
    chainIds: t.Optional(t.Union([t.String(), t.Array(t.String())])),
    user: t.String(),
    creatorTag: t.Optional(t.String()),
});
export default (app) => app.use(checkQueryAddressValidity()).get("/rewards", async ({ query }) => {
    let rawChainIds = query.chainIds;
    if (typeof rawChainIds === "string" && rawChainIds.includes(",")) {
        rawChainIds = rawChainIds.split(",");
    }
    let chainIds;
    if (!rawChainIds) {
        chainIds = Object.keys(ChainId)
            .map(k => Number.parseInt(k))
            .filter(k => isSupportedChain(k, "merkl"));
    }
    else if (typeof rawChainIds === "string") {
        chainIds = [Number.parseInt(rawChainIds)];
    }
    else {
        chainIds = rawChainIds.map(chainId => Number.parseInt(chainId));
    }
    const user = query.user;
    // @Warning: this is not taking into account the creator tag filter
    const v4Res = await RewardService.getUserRewardsByChain(user, false, chainIds, null, true);
    const v3Res = RewardConvertorService.convertV4toRewardV3(v4Res);
    return v3Res;
}, { query, tags: ["Rewards"] });
