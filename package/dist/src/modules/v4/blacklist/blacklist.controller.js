import { AuthorizationHeadersDto, BackOfficeGuard } from "@/guards/BackOffice.guard";
import { throwOnInvalidRequiredAddress, throwOnUnsupportedChainId } from "@/utils/throw";
import { NULL_ADDRESS } from "@sdk";
import Elysia from "elysia";
import { AddBlacklistDto, CheckBlacklistDto, RemoveBlacklistDto } from "./blacklist.model";
import { BlacklistService } from "./blacklist.service";
export const BlacklistController = new Elysia({ prefix: "/blacklists", detail: { tags: ["Blacklists"], hide: true } })
    // ─── Get Entire Blacklist ────────────────────────────────────────────
    .get("/", async () => await BlacklistService.findMany())
    .get("/mapping", async () => await BlacklistService.findMapping())
    // ─── Check If An Address Is Blacklisted ──────────────────────────────
    .get("/check/:address", async ({ params }) => await BlacklistService.isBlacklisted(params.address), {
    params: CheckBlacklistDto,
    beforeHandle: ({ params }) => {
        params.address = throwOnInvalidRequiredAddress(params.address);
    },
})
    // ─── Add User To Blacklist ───────────────────────────────────────────
    .post("/", async ({ body }) => await BlacklistService.add({
    ...body,
    id: BlacklistService.hashId(body.chainId, body.userAddress, body.poolAddress),
}), {
    body: AddBlacklistDto,
    headers: AuthorizationHeadersDto,
    beforeHandle: async ({ body, headers }) => {
        await BackOfficeGuard({ headers });
        body.userAddress = throwOnInvalidRequiredAddress(body.userAddress);
        body.poolAddress = throwOnInvalidRequiredAddress(body.poolAddress ?? NULL_ADDRESS);
        throwOnUnsupportedChainId(body.chainId);
    },
    detail: { hide: true },
})
    // ─── Remove A User From Blacklist ────────────────────────────────────
    .delete("/user/:address", async ({ params }) => await BlacklistService.remove(params.address), {
    params: RemoveBlacklistDto,
    headers: AuthorizationHeadersDto,
    beforeHandle: async ({ headers, params }) => {
        await BackOfficeGuard({ headers });
        params.address = throwOnInvalidRequiredAddress(params.address);
    },
    detail: { hide: true },
});
