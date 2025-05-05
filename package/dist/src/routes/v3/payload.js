import { BASE_9, Campaign, buildCampaignPayload, parseCampaign } from "@sdk";
import { t } from "elysia";
import { BigNumber } from "ethers";
import checkQueryChainIdValidity from "../../hooks/checkQueryChainIdValidity";
import { computeFee } from "../../libs/computeFee";
export const query = t.Object({
    chainId: t.Numeric(),
    config: t.String(),
    signature: t.Optional(t.Any()),
});
export default (app) => app.use(checkQueryChainIdValidity()).get("/payload", async (request) => {
    const chainId = request.query.chainId;
    // TODO cleaner type enforcing and conversion
    const parsedConfig = JSON.parse(request.query.config);
    if (!!parsedConfig.url) {
        if (!parsedConfig.url.startsWith("http")) {
            parsedConfig.url = Buffer.from(parsedConfig.url, "base64").toString("utf-8");
        }
    }
    const feePromise = computeFee(chainId, parsedConfig);
    /** In the json case the amount given is "post-fees" */
    let fee;
    if (parsedConfig.campaignType === Campaign.JSON_AIRDROP) {
        fee = (await feePromise).fee;
        parsedConfig.amount = BigNumber.from(parsedConfig.amount)?.mul(BASE_9)?.div(BASE_9.sub(fee)).add(1).toString();
    }
    const { args, payload } = buildCampaignPayload(parsedConfig, chainId, request.query.signature);
    const parsingResult = await parseCampaign(chainId, args, 0);
    if (!parsingResult.success) {
        return { message: parsingResult.message, name: "Error" };
    }
    /** In other cases we can compute the fee only now */
    if (parsedConfig.campaignType !== Campaign.JSON_AIRDROP) {
        fee = (await feePromise).fee;
    }
    return { args, parsedCampaign: parsingResult.parsedCampaign, payload, fee };
}, {
    query,
    tags: ["Campaigns"],
});
