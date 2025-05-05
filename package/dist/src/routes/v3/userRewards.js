import checkQueryAddressValidity from "@/hooks/checkQueryAddressValidity";
import { RewardConvertorService } from "@/modules/v4/reward/reward.converter";
import { UserRewardV3Dto } from "@/modules/v4/reward/reward.model";
import { RewardService } from "@/modules/v4/reward/reward.service";
import { InvalidParameter } from "@/utils/error";
import { throwOnUnsupportedChainId } from "@/utils/throw";
import { t } from "elysia";
import { utils } from "ethers";
import checkQueryChainIdValidity from "../../hooks/checkQueryChainIdValidity";
/**
 * @deprecated - conversion to v4 done
 */
export const query = t.Object({
    chainId: t.Number(),
    reloadChainId: t.Optional(t.Number()),
    mainParameter: t.Optional(t.String()),
    proof: t.Optional(t.String()),
    rewardToken: t.Optional(t.String()),
    user: t.String(),
});
export default (app) => app
    .use(checkQueryChainIdValidity())
    .use(checkQueryAddressValidity())
    .get("/userRewards", async ({ query }) => {
    const { chainId, user } = query;
    throwOnUnsupportedChainId(chainId);
    let proofString = query.proof;
    let proof = false;
    if (proofString) {
        proofString = proofString.toLowerCase();
        if (proofString !== "true" && proofString !== "false") {
            throw new InvalidParameter(`Invalid proof parameter: ${proofString} is not a boolean`);
        }
        if (proofString === "true") {
            proof = true;
        }
    }
    let mainParameter = query.mainParameter;
    if (mainParameter) {
        try {
            mainParameter = utils.getAddress(mainParameter);
        }
        catch (_e) {
            throw new InvalidParameter(`Invalid main parameter: ${mainParameter} is not an address`);
        }
        if (proof) {
            throw new InvalidParameter("Cannot request proof and mainParameter at the same time");
        }
    }
    // @Warning: this is not taking into account the mainParameter filter
    const v4Res = await RewardService.getUserRewardsByChain(user, false, [chainId], query.reloadChainId ?? null, true);
    const v3Res = RewardConvertorService.convertV4toUserRewardV3(v4Res, proof);
    return v3Res;
}, {
    transform({ query }) {
        if (query.chainId !== undefined) {
            query.chainId = Number.parseInt(query.chainId);
        }
    },
    query,
    response: { 200: UserRewardV3Dto },
    tags: ["Rewards"],
});
