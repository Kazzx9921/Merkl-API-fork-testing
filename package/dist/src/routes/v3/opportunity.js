import { OpportunityConvertorService } from "@/modules/v4/opportunity/opportunity.converter";
import { t } from "elysia";
export const query = t.Object({
    campaigns: t.Optional(t.Boolean()),
    testTokens: t.Optional(t.Boolean()),
    mainParameter: t.Optional(t.String()),
    chainId: t.Optional(t.Numeric()),
    type: t.Optional(t.Numeric()),
    action: t.Optional(t.String()),
    tag: t.Optional(t.String()),
});
export default (app) => {
    return app.get("/opportunity", async ({ query: { campaigns: showCampaigns, ...filters } }) => {
        await OpportunityConvertorService.logKeyAndTTLV3Opportunities(showCampaigns ?? false, !!filters.testTokens ? filters.testTokens : false, !!filters.mainParameter ? filters.mainParameter : undefined, !!filters.chainId ? filters.chainId.toString() : undefined);
        return await OpportunityConvertorService.wrapV3Opportunities(showCampaigns ?? false, !!filters.testTokens ? filters.testTokens : false, !!filters.mainParameter ? filters.mainParameter : undefined, !!filters.chainId ? filters.chainId.toString() : undefined);
    }, {
        transform({ query }) {
            query.chainId = !query.chainId ? undefined : Number.parseInt(query.chainId.toString());
            query.type = !query.type ? undefined : Number.parseInt(query.type.toString());
            query.campaigns =
                query.campaigns === false || query.campaigns?.toString() === "false" ? false : !!query.campaigns;
            query.testTokens =
                query.testTokens === false || query.testTokens?.toString() === "false" ? false : !!query.testTokens;
        },
        query,
        tags: ["Opportunity"],
    });
};
