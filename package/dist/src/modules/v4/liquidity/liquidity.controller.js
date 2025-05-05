import { throwOnInvalidRequiredAddress, throwOnUnsupportedChainId } from "@/utils/throw";
import { Elysia } from "elysia";
import { PositionsInputDto } from "./liquidity.model";
import { LiquidityService } from "./liquidity.service";
// ─── Positions Controller ──────────────────────────────────────────────
export const LiquidityController = new Elysia({ prefix: "/liquidity", detail: { tags: ["Positions"], hide: true } })
    // ─── Get User Positions on a Chain ───────────────────────────────────
    .get("/", async ({ query }) => {
    return await LiquidityService.fetchPositions(query);
}, {
    query: PositionsInputDto,
    beforeHandle: ({ query }) => {
        throwOnUnsupportedChainId(query.chainId);
        query.address = throwOnInvalidRequiredAddress(query.address);
    },
});
