import { AuthorizationHeadersDto, EngineGuard } from "@/guards/Engine.guard";
import { CampaignService } from "@/modules/v4/campaign/campaign.service";
import { throwOnInvalidRequiredAddress } from "@/utils/throw";
import Elysia from "elysia";
import { GetCampaignComputedValue, GetUserComputedValues, UpsertCampaignComputedValue, UpsertUserComputedValues, } from "./computedValue.model";
import { ComputedValueService } from "./computedValue.service";
export const ComputedValueController = new Elysia({
    prefix: "/value",
    detail: { tags: ["Value"] },
})
    // ─── Get a Campaign Value ──────────────────────────────────────
    .get("/campaign/:campaignId/:field", async ({ params }) => CampaignService.findCampaignValue(params), {
    params: GetCampaignComputedValue,
    detail: { description: "Gets campaign-level values computed by Merkl Engine (for example average boost)" },
})
    // ─── Get user Values ──────────────────────────────────────
    .get("/user/:address/:field", async ({ params }) => ComputedValueService.findUserValues(params), {
    params: GetUserComputedValues,
    beforeHandle: ({ params }) => {
        params.address = throwOnInvalidRequiredAddress(params.address);
    },
    detail: {
        description: "Gets campaign-level values computed by Merkl Engine (for example position specific boosts)",
    },
})
    // ─── Update a Campaign Value ──────────────────────────────────────
    .post("/engine/campaign", async ({ body }) => await ComputedValueService.upsertCampaignComputedValue(body), {
    headers: AuthorizationHeadersDto,
    body: UpsertCampaignComputedValue,
    beforeHandle: ({ headers }) => {
        EngineGuard({ headers });
    },
    detail: { hide: true },
})
    // ─── Update some User Values ──────────────────────────────────────
    .post("/engine/user", async ({ body }) => await ComputedValueService.upsertUserComputedValues(body), {
    headers: AuthorizationHeadersDto,
    body: UpsertUserComputedValues,
    beforeHandle: async ({ headers, body }) => {
        await EngineGuard({ headers });
        for (const item of body) {
            item.address = throwOnInvalidRequiredAddress(item.address);
        }
    },
    detail: { hide: true },
});
