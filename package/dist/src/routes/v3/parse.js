import { parseCampaign } from "@sdk";
import { t } from "elysia";
import checkQueryChainIdValidity from "../../hooks/checkQueryChainIdValidity";
export const query = t.Object({
    campaign: t.Any(),
    chainId: t.Numeric(),
    index: t.Optional(t.Numeric()),
});
export default (app) => app.use(checkQueryChainIdValidity()).get("/parse", async (request) => {
    const chainId = request.query.chainId;
    try {
        const parsingResult = await parseCampaign(chainId, await JSON.parse(request.query.campaign), request.query.index ?? 0);
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
