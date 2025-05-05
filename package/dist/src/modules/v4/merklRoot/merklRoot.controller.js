import { AuthorizationHeadersDto, EngineGuard } from "@/guards/Engine.guard";
import { throwOnUnsupportedChainId } from "@/utils/throw";
import Elysia from "elysia";
import { CreateRootDto, RootByTimestampsDto } from "./merklRoot.model";
import { MerklRootService } from "./merklRoot.service";
// ─── Merkl Roots Controller ─────────────────────────────────────────────
export const MerklRootController = new Elysia({ prefix: "/roots", detail: { tags: ["Roots"] } })
    // ─── Get Merkl Root By Timestamp ─────────────────────────────────────
    .get("/", async ({ query }) => await MerklRootService.rootForTimestamp(query), {
    query: RootByTimestampsDto,
    beforeHandle: async ({ query }) => {
        throwOnUnsupportedChainId(query.chainId);
    },
    detail: {
        description: "Returns the last merkl roots recorded before the provided timestamps",
    },
})
    // ─── Get all live Merkl Roots ─────────────────────────────────────────
    .get("/live", async () => await MerklRootService.fetchAll())
    // ─── Create a Merkl Root Entry ────────────────────────────────────────
    .post("/engine", async ({ body }) => {
    return await MerklRootService.create(body);
}, {
    headers: AuthorizationHeadersDto,
    body: CreateRootDto,
    beforeHandle: ({ headers, body }) => {
        EngineGuard({ headers });
        throwOnUnsupportedChainId(body.chainId);
    },
    detail: { hide: true },
});
