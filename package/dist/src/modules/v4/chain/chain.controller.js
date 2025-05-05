import { AuthorizationHeadersDto, BackOfficeGuard } from "@/guards/BackOffice.guard";
import Elysia, { t } from "elysia";
import { ChainResourceDto, ChainUniqueDto, CreateChainDto, GetChainQueryDto, UpdateChainDto, } from "./chain.model";
import { ChainService } from "./chain.service";
// ─── Chains Controller ───────────────────────────────────────────────────────
export const ChainController = new Elysia({ prefix: "/chains", detail: { tags: ["Chains"] } })
    // ─── Get A Chain By Id ───────────────────────────────────────────────
    .get("/:chainId", async ({ params: { chainId } }) => {
    const chain = await ChainService.get(chainId);
    if (!chain)
        return null;
    const { Explorer, ...rest } = chain;
    return { explorers: chain.Explorer, ...rest };
}, {
    params: ChainUniqueDto,
    detail: { hide: true },
})
    // ─── Get All Supported Chains ────────────────────────────────────────
    .get("/", async ({ query }) => {
    const chains = await ChainService.findMany(query);
    return chains.map(({ Explorer, ...chain }) => ({ explorers: Explorer, ...chain }));
}, {
    query: GetChainQueryDto,
    response: t.Array(ChainResourceDto),
    detail: { description: "List chains supported and integrated by Merkl." },
})
    // ─── Count Chains ────────────────────────────────────────
    .get("/count", async ({ query }) => await ChainService.countMany(query), {
    query: GetChainQueryDto,
    detail: { hide: true },
})
    .patch("/:chainId", async ({ params, body }) => await ChainService.update(params.chainId, body), {
    params: ChainUniqueDto,
    body: UpdateChainDto,
    headers: AuthorizationHeadersDto,
    beforeHandle: BackOfficeGuard,
    detail: { hide: true },
})
    .post("/", async ({ body }) => await ChainService.create(body), {
    body: CreateChainDto,
    headers: AuthorizationHeadersDto,
    beforeHandle: BackOfficeGuard,
    detail: { hide: true },
});
