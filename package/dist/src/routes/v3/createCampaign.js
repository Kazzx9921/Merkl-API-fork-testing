import { executeSimple } from "@/utils/execute";
import { BN2Number, DistributionCreatorInterface, registry } from "@sdk";
import { t } from "elysia";
import checkQueryAddressValidity from "../../hooks/checkQueryAddressValidity";
import checkQueryChainIdValidity from "../../hooks/checkQueryChainIdValidity";
import { merklChainDataWithCache } from "../../libs/merklChainData";
export const query = t.Object({
    chainId: t.Numeric(),
    user: t.String(),
});
export default (app) => app
    .use(checkQueryChainIdValidity())
    .use(checkQueryAddressValidity())
    .get("/createCampaign", async (request) => {
    const chainId = request.query.chainId;
    const user = request.query.user;
    const { feeRebate, signed } = await executeSimple(chainId, campaignCreationUserInfo(user, chainId));
    // Need to get the message and valid tokens from cache
    const { message, validRewardTokens } = await merklChainDataWithCache(chainId);
    return {
        feeRebate,
        message,
        signed,
        validRewardTokens,
    };
}, {
    query,
    tags: ["Campaigns"],
});
async function campaignCreationUserInfo(user, chainId) {
    const creatorAddress = registry(chainId)?.Merkl?.DistributionCreator;
    const calls = [
        {
            callData: DistributionCreatorInterface.encodeFunctionData("feeRebate", [user]),
            target: creatorAddress,
        },
        {
            callData: DistributionCreatorInterface.encodeFunctionData("userSignatures", [user]),
            target: creatorAddress,
        },
        {
            callData: DistributionCreatorInterface.encodeFunctionData("userSignatureWhitelist", [user]),
            target: creatorAddress,
        },
        {
            callData: DistributionCreatorInterface.encodeFunctionData("messageHash"),
            target: creatorAddress,
        },
    ];
    return {
        cached: false,
        call: {
            callData: calls,
            handler: () => { },
            reducer: async (result) => {
                let i = 0;
                const feeRebate = BN2Number(DistributionCreatorInterface.decodeFunctionResult("feeRebate", result[i++])[0]?.toString());
                const signature = DistributionCreatorInterface.decodeFunctionResult("userSignatures", result[i++])[0]?.toString();
                const signatureWhitelist = DistributionCreatorInterface.decodeFunctionResult("userSignatureWhitelist", result[i++])[0]?.toString();
                const messageHash = DistributionCreatorInterface.decodeFunctionResult("messageHash", result[i++])[0]?.toString();
                const signed = signature === messageHash || signatureWhitelist === messageHash;
                return { feeRebate, signed };
            },
        },
    };
}
