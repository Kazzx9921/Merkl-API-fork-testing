import { AuthorizationHeadersDto, BackOfficeGuard } from "@/guards/BackOffice.guard";
import { throwOnInvalidRequiredAddress, throwOnUnsupportedChainId } from "@/utils/throw";
import Elysia from "elysia";
import { ChainDto, DateDto, GetTransactionsQueryModel, RevenuesDto, TokensDateDto, TokensDto, } from "./accounting.model";
import { AccountingService } from "./accounting.service";
export const AccountingController = new Elysia({ prefix: "/accounting", detail: { tags: ["Accounting"], hide: true } })
    .get("/", async ({ query }) => await AccountingService.findMany(query), {
    query: GetTransactionsQueryModel,
    headers: AuthorizationHeadersDto,
    beforeHandle: async ({ headers }) => {
        await BackOfficeGuard({ headers });
    },
})
    .group("/revenues", app => {
    return app
        .get("", async () => await AccountingService.getAllRevenueBreakdownByChain(), {
        headers: AuthorizationHeadersDto,
        beforeHandle: async ({ headers }) => {
            await BackOfficeGuard({ headers });
        },
    })
        .get("/per-month/:year/:month", async ({ params }) => await AccountingService.getMonthlyRevenue(params.year, params.month), {
        params: DateDto,
        headers: AuthorizationHeadersDto,
        beforeHandle: async ({ headers }) => {
            await BackOfficeGuard({ headers });
        },
    })
        .get("/chains/:chainId", async ({ params }) => await AccountingService.getRevenueByChain(params.chainId), {
        params: ChainDto,
        headers: AuthorizationHeadersDto,
        beforeHandle: async ({ params, headers }) => {
            await BackOfficeGuard({ headers });
            throwOnUnsupportedChainId(params.chainId);
        },
    })
        .get("/chains/:chainId/per-month/:year/:month", async ({ params }) => await AccountingService.getMonthlyRevenueByChain(params.chainId, params.year, params.month), {
        params: RevenuesDto,
        headers: AuthorizationHeadersDto,
        beforeHandle: async ({ params, headers }) => {
            await BackOfficeGuard({ headers });
            throwOnUnsupportedChainId(params.chainId);
        },
    });
})
    // ─── Tokens Group ────────────────────────────────────────────────────
    .group("/tokens", app => {
    return app
        .get("/:chainId/:tokenAddress", async ({ params }) => await AccountingService.getTokenTransaction(params.tokenAddress, params.chainId), {
        params: TokensDto,
        headers: AuthorizationHeadersDto,
        beforeHandle: async ({ params, headers }) => {
            await BackOfficeGuard({ headers });
            params.tokenAddress = throwOnInvalidRequiredAddress(params.tokenAddress);
            throwOnUnsupportedChainId(params.chainId);
        },
    })
        .get("/:chainId/:tokenAddress/per-month/:year/:month", async ({ params }) => await AccountingService.getTokenMonthlyTransaction(params.tokenAddress, params.chainId, params.year, params.month), {
        params: TokensDateDto,
        headers: AuthorizationHeadersDto,
        beforeHandle: async ({ params, headers }) => {
            await BackOfficeGuard({ headers });
            params.tokenAddress = throwOnInvalidRequiredAddress(params.tokenAddress);
            throwOnUnsupportedChainId(params.chainId);
        },
    });
});
