import { throwOnInvalidRequiredAddress, throwOnUnsupportedChainId } from "@/utils/throw";
import Elysia from "elysia";
import { ChainArrayOptionalDto } from "../chain/chain.model";
import { UserUniqueDto } from "../user/user.model";
import { ClaimService } from "./claims.service";
// ─── Claim Controller ───────────────────────────────────────────────────────
export const ClaimController = new Elysia({ prefix: "/claims", detail: { tags: ["Claims"] } })
    // ─── Get Historical Claims ────────────────────────────────────────────
    .get("/:address", async ({ params, query }) => await ClaimService.getHistoricalClaims(params, query.chainIds), {
    params: UserUniqueDto,
    query: ChainArrayOptionalDto,
    beforeHandle: ({ params, query }) => {
        params.address = throwOnInvalidRequiredAddress(params.address);
        for (const chainId of query?.chainIds ?? []) {
            throwOnUnsupportedChainId(chainId);
        }
    },
});
