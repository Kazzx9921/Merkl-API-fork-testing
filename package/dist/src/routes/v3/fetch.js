import { providers } from "@/utils/providers";
import { DistributionCreator__factory, parseCampaign, registry } from "@sdk";
import { t } from "elysia";
import checkQueryChainIdValidity from "../../hooks/checkQueryChainIdValidity";
export const query = t.Object({
    chainId: t.Numeric(),
    index: t.Numeric(),
});
/** Fetch params  */
export default (app) => app.use(checkQueryChainIdValidity()).get("/fetch", async (request) => {
    const chainId = request.query.chainId;
    /** Merkl reward manager contract */
    const distributionCreator = DistributionCreator__factory.connect(registry(chainId)?.Merkl?.DistributionCreator, providers[chainId]);
    const campaignStruct = await distributionCreator.campaignList(request.query.index);
    try {
        const parsingResult = await parseCampaign(chainId, { ...campaignStruct, amount: campaignStruct.amount.toString() }, request.query.index ?? 0);
        if (parsingResult.success)
            return JSON.stringify(parsingResult.parsedCampaign);
        throw parsingResult.message;
    }
    catch (e) {
        return { message: `Error parsing campaign: ${e}`, name: "Error" };
    }
}, {
    query,
    tags: ["Campaigns"],
});
