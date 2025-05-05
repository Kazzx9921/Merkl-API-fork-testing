import { AuthorizationHeadersDto, BackOfficeGuard } from "@/guards/BackOffice.guard";
import { Elysia } from "elysia";
import { CampaignIdDto, CampaignQueryDto, CreateCreatorDto, CreatorAddressDto, GetManyCreatorQuery, UpdateCreatorDto, } from "./creator.model";
import { CreatorService } from "./creator.service";
// ─── Creators Controller ─────────────────────────────────────────────────────
export const CreatorController = new Elysia({ prefix: "/creators", detail: { tags: ["Creator"] } })
    // ─── Crud OPS ────────────────────────────────────────────────────────────────
    // ─── Create A Creator ────────────────────────────────────────────────
    .post("/", async ({ body }) => await CreatorService.create(body), {
    headers: AuthorizationHeadersDto,
    body: CreateCreatorDto,
    beforeHandle: BackOfficeGuard,
})
    // ─── Get Many Creators ───────────────────────────────────────────────
    .get("/", async ({ query }) => await CreatorService.findMany(query), { query: GetManyCreatorQuery })
    // ─── Get A Unique Creator By Id ──────────────────────────────────────
    .get("/:address", async ({ params: { address } }) => CreatorService.findUnique(address), {
    params: CreatorAddressDto,
})
    // ─── Update A Creator ────────────────────────────────────────────────
    .patch("/:address", async ({ params: { address }, body }) => CreatorService.update(address, body), {
    headers: AuthorizationHeadersDto,
    body: UpdateCreatorDto,
    params: CreatorAddressDto,
    beforeHandle: BackOfficeGuard,
})
    // ─── Delete A Creator ────────────────────────────────────────────────
    .delete("/:address", async ({ params: { address } }) => CreatorService.delete(address), {
    headers: AuthorizationHeadersDto,
    params: CreatorAddressDto,
    beforeHandle: BackOfficeGuard,
})
    // ─── Service Specific Methods ────────────────────────────────────────────────
    .get("/:address/dashboard", async ({ params }) => CreatorService.getGlobalDashboard(params.address), {
    params: CreatorAddressDto,
})
    .get("/:address/campaigns", async ({ params: { address }, query }) => CreatorService.getCampaignsFor(address, query.status), {
    params: CreatorAddressDto,
    query: CampaignQueryDto,
})
    .get("/campaigns/:id", async ({ params: { id } }) => CreatorService.getCampaignMetrics(id), {
    params: CampaignIdDto,
});
