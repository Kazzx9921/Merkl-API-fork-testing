import { BackOfficeGuard } from "@/guards/BackOffice.guard";
import { AuthorizationHeadersDto, EngineGuard } from "@/guards/Engine.guard";
import { throwOnUnsupportedChainId } from "@/utils/throw";
import Elysia from "elysia";
import { CampaignUniqueDto, ComputedUntilDto, DelayDto, QueryCampaignStatusDto, StatusErrorDto, UpdateCampaignStatusDto, } from "./status.model";
import { StatusService } from "./status.service";
export const StatusController = new Elysia({ prefix: "/campaign-status", detail: { tags: ["Status"], hide: true } })
    // ─── Update a Campaign Status ──────────────────────────────────────
    .put("/engine/:campaignId", async ({ params, body }) => {
    const [distributionChain, campaignId] = params.campaignId.split("-");
    return await StatusService.update({ distributionChain: +distributionChain, campaignId }, body);
}, {
    beforeHandle: EngineGuard,
    headers: AuthorizationHeadersDto,
    body: UpdateCampaignStatusDto,
})
    // ─── Updates only the computed until field ───────────────────────────
    .put("/engine/computedUntil/:campaignId", async ({ params, body }) => {
    const [distributionChain, campaignId] = params.campaignId.split("-");
    return await StatusService.updateComputedUntil({ distributionChain: +distributionChain, campaignId }, body.computedUntil);
}, {
    beforeHandle: EngineGuard,
    headers: AuthorizationHeadersDto,
    body: ComputedUntilDto,
})
    // ─── Updates only the computed until field ───────────────────────────
    .put("/error/:campaignId", async ({ params, body }) => {
    const [distributionChain, campaignId] = params.campaignId.split("-");
    return await StatusService.updateErrorMessage({ distributionChain: +distributionChain, campaignId }, body.error);
}, {
    beforeHandle: BackOfficeGuard,
    headers: AuthorizationHeadersDto,
    body: StatusErrorDto,
})
    // ─── Is Safe For Overlaps ───────────────────────────────────────────
    .get("/engine/overlaps", async ({ query }) => await StatusService.isSafeForOverlaps(query), {
    beforeHandle: EngineGuard,
    headers: AuthorizationHeadersDto,
    query: CampaignUniqueDto,
})
    // ─── Find Many Status ─────────────────────────────────────────────────
    .get("/", async ({ query }) => await StatusService.findMany(query), { query: QueryCampaignStatusDto })
    // ─── Get A Status By Id ───────────────────────────────────────────────
    // campaignId will be either a rough campaignId in the engine sense, a campaignId in the api db way, or a distributionChain_campaignId
    .get("/:campaignId", async ({ params }) => {
    if (!params.campaignId.includes("-") && params.campaignId.startsWith("0x"))
        return await StatusService.findManyByCampaignId(params.campaignId);
    if (!params.campaignId.includes("-"))
        return await StatusService.findUniqueOrThrow(params.campaignId);
    const [distributionChain, campaignId] = params.campaignId.split("-");
    return await StatusService.findUniqueOrThrow({ distributionChain: +distributionChain, campaignId });
})
    // ─── Fetch information about delays ────────────────────────────────────
    .group("/delay", app => {
    return app
        .get("/", async ({ query }) => StatusService.findManyDelay(query), {
        query: DelayDto,
        beforeHandle: ({ query }) => {
            if (!!query.chainId) {
                throwOnUnsupportedChainId(query.chainId);
            }
        },
        detail: { hide: true },
    })
        .get("/status", async () => StatusService.findUpdatesAndDelays(), {
        detail: { hide: true },
    });
});
