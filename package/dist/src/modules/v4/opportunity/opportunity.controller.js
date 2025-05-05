import { HttpErrorDto, NotFoundError, NotFoundErrorDto } from "@/errors";
import { BackOfficeGuard } from "@/guards/BackOffice.guard";
import { AuthorizationHeadersDto, TokenAuthGuard } from "@/guards/TokenAuth.guard";
import { GetCampaignQueryDto } from "@/modules/v4/campaign/campaign.model";
import { log } from "@/utils/logger";
import { throwOnUnsupportedActionList } from "@/utils/throw";
import { ChainId } from "@sdk";
import Elysia, { t } from "elysia";
import { CreateOpportunityDto, GetOpportunitiesQueryDto, GetOpportunityQueryDto, OpportunityAggregateFieldDto, OpportunityDeleteOverrideDto, OpportunityOverrideDto, OpportunityResourceDto, OpportunityUniqueDto, OpportunityUniqueUpdateDto, OpportunityWithCampaignsResourceDto, } from "./opportunity.model";
import { OpportunityService } from "./opportunity.service";
import { transformId } from "./transform-id.pipe";
import { validateId } from "./validate-id.pipe";
// ─── Opportunities Controller ────────────────────────────────────────────────
export const OpportunityController = new Elysia({
    prefix: "/opportunities",
    detail: {
        tags: ["Opportunities"],
    },
})
    // ─── Create An Opportunity ───────────────────────────────────────────
    .post("/", async ({ body }) => await OpportunityService.create(body), {
    beforeHandle: TokenAuthGuard,
    headers: AuthorizationHeadersDto,
    body: CreateOpportunityDto,
    detail: { hide: true },
})
    // ─── Override An Opportunity Field ───────────────────────────────────
    .patch("/:id/override", async ({ params, body }) => await OpportunityService.override(params.id, body), {
    headers: AuthorizationHeadersDto,
    params: OpportunityUniqueDto,
    body: OpportunityOverrideDto,
    beforeHandle: BackOfficeGuard,
})
    .delete("/:id/override", async ({ params, body }) => await OpportunityService.deleteOverrides(params.id, body), {
    headers: AuthorizationHeadersDto,
    params: OpportunityUniqueDto,
    body: OpportunityDeleteOverrideDto,
    beforeHandle: BackOfficeGuard,
    detail: { hide: true },
})
    // ─── Tries to reparse An Opportunity ─────────────────────────────────
    .post("/:id", async ({ params }) => {
    try {
        if (!params.id.includes("-"))
            return await OpportunityService.recreate(params.id);
        const [chainId, type, identifier] = params.id.split("-");
        return await OpportunityService.recreate(OpportunityService.hashId({
            chainId: +chainId,
            type: type,
            identifier,
        }));
    }
    catch (err) {
        log.error("error recreating opportunity", err);
        if (err.code && err.code === "P2025")
            throw new NotFoundError();
        throw err;
    }
}, {
    beforeHandle: BackOfficeGuard,
    headers: AuthorizationHeadersDto,
    params: OpportunityUniqueUpdateDto,
    detail: { hide: true },
})
    // ─── Get All Opportunities ───────────────────────────────────────────
    .get("/", async ({ query }) => OpportunityService.findMany(query), {
    query: GetOpportunitiesQueryDto,
    detail: {
        description: `**Retrieve Multiple Opportunities**
      <p>This endpoint enables you to search for opportunities by providing specific criteria through query parameters.</p>`,
    },
    beforeHandle: ({ query }) => {
        if (!!query.action)
            throwOnUnsupportedActionList(query.action);
    },
    response: t.Array(t.Union([OpportunityResourceDto, t.Null()])),
})
    // ─── Get Opportunities Count ─────────────────────────────────────────
    .get("/count", async ({ query }) => await OpportunityService.countMany(query), {
    query: GetOpportunitiesQueryDto,
    beforeHandle: ({ query }) => {
        if (!!query.action)
            throwOnUnsupportedActionList(query.action);
    },
    detail: { description: "Get the count of opportunities corresponding to the query." },
    response: { 200: t.Number() },
})
    .get("/bins/apr", async ({ query }) => await OpportunityService.getAprBins(query), {
    query: GetOpportunitiesQueryDto,
})
    .get("/bins/tvl", async ({ query }) => await OpportunityService.getTvlBins(query), {
    query: GetOpportunitiesQueryDto,
})
    // ─── Get An Opportunity By Id ────────────────────────────────────────
    .get("/:id", async ({ params, query }) => {
    try {
        if (!params.id.includes("-"))
            return await OpportunityService.findUniqueOrThrow(params.id, query.campaigns ?? false, query.test ?? false, query.point ?? false);
        const [chainId, type, identifier] = params.id.split("-");
        return await OpportunityService.findUniqueOrThrow({
            chainId: +chainId,
            type: type,
            identifier,
        }, query.campaigns ?? false, query.test ?? false, query.point ?? false);
    }
    catch (err) {
        if (err.code && err.code === "P2025")
            throw new NotFoundError();
        throw err;
    }
}, {
    params: OpportunityUniqueDto,
    query: GetOpportunityQueryDto,
    transform: transformId,
    beforeHandle: validateId,
    response: {
        200: OpportunityResourceDto,
        404: NotFoundErrorDto,
        500: HttpErrorDto,
    },
    detail: { description: "Get a unique opportunity." },
})
    .get("/campaigns", async ({ query }) => OpportunityService.findManyByCampaigns(query), {
    query: GetCampaignQueryDto,
    response: {
        200: t.Array(OpportunityWithCampaignsResourceDto),
        404: NotFoundErrorDto,
        500: HttpErrorDto,
    },
    detail: {
        description: "Get many opportunities, including related [campaigns](#tag/campaigns/).",
    },
})
    // ─── Get An Opportunity By Id With Related Campaigns ─────────────────
    .get("/:id/campaigns", async ({ query, params }) => {
    try {
        if (!params.id.includes("-"))
            return await OpportunityService.getUniqueWithCampaignsOrThrow(params.id, query.test ?? false, query.point ?? false);
        const [chainId, type, identifier] = params.id.split("-");
        const response = await OpportunityService.getUniqueWithCampaignsOrThrow({
            chainId: +chainId,
            type: type,
            identifier,
        }, query.test ?? false, query.point ?? false);
        if (response.chainId === ChainId.ETHERLINK) {
            const campaigns = response.campaigns;
            for (let campaign of Object.values(campaigns)) {
                const updatedParams = campaign.params;
                updatedParams.blacklist = [];
                campaign = {
                    ...campaign,
                    params: updatedParams,
                };
            }
        }
        return response;
    }
    catch (err) {
        if (err.code && err.code === "P2025")
            throw new NotFoundError();
        throw err;
    }
}, {
    query: GetOpportunityQueryDto,
    params: OpportunityUniqueDto,
    transform: transformId,
    beforeHandle: validateId,
    response: {
        200: OpportunityWithCampaignsResourceDto,
        404: NotFoundErrorDto,
        500: HttpErrorDto,
    },
    detail: {
        description: "Get a unique opportunity, including related [campaigns](#tag/campaigns/).",
    },
})
    // ─── Get Aggregate Fields ────────────────────────────────────────────
    .get("/aggregate/:field", async ({ query, params }) => await OpportunityService.aggregate(query, params.field), {
    params: OpportunityAggregateFieldDto,
    query: GetOpportunitiesQueryDto,
    beforeHandle: ({ query }) => {
        if (!!query.action)
            throwOnUnsupportedActionList(query.action);
    },
})
    // ─── Get Aggregate Fields ────────────────────────────────────────────
    .get("/aggregate/max/:field", async ({ query, params }) => await OpportunityService.aggregateMax(query, params.field), {
    params: OpportunityAggregateFieldDto,
    query: GetOpportunitiesQueryDto,
    beforeHandle: ({ query }) => {
        if (!!query.action)
            throwOnUnsupportedActionList(query.action);
    },
})
    // ─── Get Aggregate Fields ────────────────────────────────────────────
    .get("/aggregate/min/:field", async ({ query, params }) => await OpportunityService.aggregateMin(query, params.field), {
    params: OpportunityAggregateFieldDto,
    query: GetOpportunitiesQueryDto,
    beforeHandle: ({ query }) => {
        if (!!query.action)
            throwOnUnsupportedActionList(query.action);
    },
});
