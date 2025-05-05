import { NotFoundError } from "@/errors/NotFound.error";
import { AuthorizationHeadersDto, BackOfficeGuard } from "@/guards/BackOffice.guard";
import { getUserAllowance } from "@/libs/tokens/allowances";
import { throwOnInvalidAddress, throwOnInvalidRequiredAddress, throwOnUnsupportedChainId } from "@/utils/throw";
import Elysia, { t } from "elysia";
import { CreateTokenDto, FindUniqueTokenAllowanceDto, FindUniqueTokenDto, GetTokenBalanceDto, GetTokenQueryDto, NotionWebhookAddTokenDto, TokenIdDto, UpdateTokenDto, } from "./token.model";
import { TokenService } from "./token.service";
// ─── Tokens Controller ───────────────────────────────────────────────────────
export const TokenController = new Elysia({ prefix: "/tokens", detail: { tags: ["Tokens"] } })
    // ─── Get A Token By Id ───────────────────────────────────────────────
    .get("/:id", async ({ params }) => {
    try {
        const [chainId, address] = params.id.split("-");
        return await TokenService.findUniqueOrThrow({ chainId: +chainId, address });
    }
    catch (err) {
        if (err.code && err.code === "P2025")
            throw new NotFoundError();
    }
}, {
    params: FindUniqueTokenDto,
    detail: {
        hide: true,
    },
})
    .get("/:id/allowance/:owner/:spender", async ({ params: { id, owner, spender } }) => {
    try {
        const [chainId, address] = id.split("-");
        const token = await TokenService.findUniqueOrThrow({ chainId: +chainId, address });
        const allowance = await getUserAllowance(token.chainId, token.address, owner, spender);
        return { ...token, allowance };
    }
    catch (err) {
        if (err.code && err.code === "P2025")
            throw new NotFoundError();
    }
}, {
    params: FindUniqueTokenAllowanceDto,
    detail: {
        hide: true,
    },
})
    // ─── Get All Valid Reward Tokens across all chains ───────────────────
    .get("/reward", async ({ query }) => TokenService.getAllValidRewardTokens(query), {
    query: t.Object({
        chainId: t.Optional(t.RegExp(/^\d+(,\d+)*$/)),
    }),
    detail: {
        description: "Get all tokens that are accept as reward tokens",
    },
})
    // ─── Get Valid Reward Tokens on a given chain ────────────────────────
    .get("/reward/:chainId", async ({ params }) => TokenService.getValidRewardTokens(params.chainId), {
    params: t.Object({
        chainId: t.Numeric(),
    }),
    beforeHandle: ({ params }) => throwOnUnsupportedChainId(params.chainId),
    detail: {
        description: "Get the list of tokens that are accept as reward tokens on a given chain",
    },
})
    // ─── Get Tokens With Balances ────────────────────────────────────────
    .get("/balances", async ({ query: { chainId, userAddress, tokenAddress, additionalTokenAddresses } }) => {
    if (tokenAddress)
        return await TokenService.fetchTokensAndBalances(chainId, userAddress, [tokenAddress].concat(additionalTokenAddresses ?? []));
    return await TokenService.fetchVerifiedAndNativeBalances(chainId, userAddress, additionalTokenAddresses);
}, {
    beforeHandle: ({ query }) => {
        throwOnUnsupportedChainId(query.chainId);
        query.userAddress = throwOnInvalidRequiredAddress(query.userAddress);
        query.tokenAddress = throwOnInvalidAddress(query.tokenAddress);
    },
    query: GetTokenBalanceDto,
    detail: {
        hide: true,
    },
})
    // ─── Get Many Tokens ─────────────────────────────────────────────────
    .get("/", async ({ query }) => await TokenService.findManyOrFetch(query), {
    query: GetTokenQueryDto,
    detail: {
        hide: true,
    },
})
    // ─── Count Tokens ────────────────────────────────────────────────────
    .get("/count", async ({ query }) => await TokenService.countMany(query), {
    query: GetTokenQueryDto,
    detail: {
        hide: true,
    },
})
    // ─── Create a new Token entity ────────────────────────────────────────────
    .post("/", async ({ body }) => await TokenService.fillAndCreate(body), {
    body: CreateTokenDto,
    headers: AuthorizationHeadersDto,
    beforeHandle: async ({ headers, body }) => {
        await BackOfficeGuard({ headers });
        body.address = throwOnInvalidRequiredAddress(body.address);
        throwOnUnsupportedChainId(body.chainId);
    },
    detail: { hide: true },
})
    // ─── Update token fields Status ────────────────────────────────────────────
    .patch("/:id", async ({ params, body }) => await TokenService.update(params.id, body), {
    params: TokenIdDto,
    body: UpdateTokenDto,
    headers: AuthorizationHeadersDto,
    beforeHandle: BackOfficeGuard,
    detail: { hide: true },
})
    .group("/webhooks", app => {
    return app.post("/notion", async ({ body }) => TokenService.notionWebhook(body), {
        body: NotionWebhookAddTokenDto,
        headers: AuthorizationHeadersDto,
        beforeHandle: BackOfficeGuard,
        detail: { hide: true },
    });
});
