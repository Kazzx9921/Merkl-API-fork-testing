import { AuthorizationHeadersDto, BackOfficeGuard } from "@/guards/BackOffice.guard";
// import { AuthorizationHeadersDto, BackOfficeGuard } from "@/guards/BackOffice.guard";
import Elysia, { t } from "elysia";
import { throwOnUnsupportedChainId } from "src/utils/throw";
import { CampaignAmountsInputDto, CampaignDataDto, CampaignPayloadInputDto, ProgramPayloadInputDto, SinglePayloadInputDto, } from "./programPayload.model";
import { ProgramPayloadService } from "./programPayload.service";
// ─── ProgramPaylod Controller ───────────────────────────────────────────────────────
export const ProgramPayloadController = new Elysia({ prefix: "/program-payload", detail: { tags: ["ProgramPayload"] } })
    // ─── Get payload for a specific campaign key ───────────────────────────────────────
    .get("/", async ({ query }) => {
    return ProgramPayloadService.buildPayload(query);
}, {
    query: CampaignPayloadInputDto,
    // headers: AuthorizationHeadersDto,
    beforeHandle: ({ query, headers }) => {
        // BackOfficeGuard({ headers });
        throwOnUnsupportedChainId(query.distributionChainId);
    },
})
    .get("/config", async ({ query }) => {
    return ProgramPayloadService.buildConfig(query);
}, {
    query: CampaignPayloadInputDto,
    // headers: AuthorizationHeadersDto,
    beforeHandle: ({ query, headers }) => {
        // BackOfficeGuard({ headers });
        throwOnUnsupportedChainId(query.distributionChainId);
    },
    detail: { description: "Generate the configuration for a specific hardcoded campaign from a program" },
})
    .get("/template-config/:campaignType", async ({ params }) => {
    return ProgramPayloadService.buildConfigTemplate(params);
}, {
    params: t.Object({ campaignType: t.Number() }),
    detail: { description: "Generate the template configuration with expected types for a specific campaign" },
})
    .get("/campaignData", async ({ query }) => {
    return ProgramPayloadService.buildCampaignData(query);
}, {
    query: CampaignPayloadInputDto,
    // headers: AuthorizationHeadersDto,
    beforeHandle: ({ query, headers }) => {
        // BackOfficeGuard({ headers });
        throwOnUnsupportedChainId(query.distributionChainId);
    },
    detail: { description: "Generate the campaign data for a specific hardcoded campaign from a program" },
})
    .get("/program", async ({ query }) => {
    return ProgramPayloadService.buildProgramPayload(query);
}, {
    query: ProgramPayloadInputDto,
    // headers: AuthorizationHeadersDto,
    beforeHandle: ({ query, headers }) => {
        // BackOfficeGuard({ headers });
        throwOnUnsupportedChainId(query.distributionChainId);
    },
    detail: { description: "Generate the complete payload for a program" },
})
    .post("/program/withAmounts", async ({ query, body }) => {
    return ProgramPayloadService.buildProgramPayloadWithAmounts(query, body);
}, {
    query: ProgramPayloadInputDto,
    body: CampaignAmountsInputDto,
    beforeHandle: ({ query }) => {
        throwOnUnsupportedChainId(query.distributionChainId);
    },
    detail: { description: "Generate the payload with the campaigns and amounts provided" },
})
    .post("/payload/from-config", async ({ query, body }) => {
    return ProgramPayloadService.buildPayloadFromConfig(body, query.debug);
}, {
    query: t.Object({ debug: t.Optional(t.Boolean({ description: "Debug mode" })) }),
    body: SinglePayloadInputDto,
    detail: { description: "BETA FEATURE : Generate the payload from a config file." },
})
    .post("/parse/from-campaign-data", async ({ body }) => {
    return ProgramPayloadService.buildConfigFromCampaignData(body);
}, {
    headers: AuthorizationHeadersDto,
    body: CampaignDataDto,
    beforeHandle: ({ headers }) => {
        BackOfficeGuard({ headers });
    },
    detail: { hide: true },
});
