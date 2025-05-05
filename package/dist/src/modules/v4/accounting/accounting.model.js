import { t } from "elysia";
export const TokensDto = t.Object({
    chainId: t.Numeric(),
    tokenAddress: t.String(),
});
export const GetTransactionsQueryModel = t.Object({
    page: t.Optional(t.Numeric()),
    items: t.Optional(t.Numeric()),
});
export const TokensDateDto = t.Object({
    chainId: t.Numeric(),
    tokenAddress: t.String(),
    month: t.Numeric(),
    year: t.Numeric(),
});
export const DateDto = t.Object({
    month: t.Numeric(),
    year: t.Numeric(),
});
export const ChainDto = t.Object({
    chainId: t.Numeric(),
});
export const RevenuesDto = t.Object({
    chainId: t.Numeric(),
    month: t.Numeric(),
    year: t.Numeric(),
});
export const GetRevenuesDto = t.Object({
    chainId: t.Numeric(),
    month: t.Numeric(),
    year: t.Numeric(),
});
