import { t } from "elysia";
// ─── Dtos ────────────────────────────────────────────────────────────────────
export const TokenResourceDto = t.Object({
    id: t.String(),
    name: t.Union([t.String(), t.Null()]),
    chainId: t.Number(),
    address: t.String(),
    decimals: t.Number(),
    icon: t.String(),
    verified: t.Boolean(),
    isTest: t.Boolean(),
    isPoint: t.Boolean(),
    isPreTGE: t.Boolean(),
    price: t.Optional(t.Union([t.Union([t.Number(), t.Null()])])),
    symbol: t.String(),
});
export const FindUniqueTokenDto = t.Object({
    id: t.String(),
});
export const FindUniqueTokenAllowanceDto = t.Object({
    id: t.String(),
    owner: t.String(),
    spender: t.String(),
});
export const GetTokenQueryDto = t.Object({
    id: t.Optional(t.Array(t.String())),
    symbol: t.Optional(t.String()),
    displaySymbol: t.Optional(t.String()), // To filter by displaySymbol or if null symbol
    chainId: t.Optional(t.Numeric()),
    isNative: t.Optional(t.Boolean()),
    address: t.Optional(t.String()),
    name: t.Optional(t.String()),
    search: t.Optional(t.String()),
    page: t.Optional(t.Number()),
    items: t.Optional(t.Number()),
    verified: t.Optional(t.Boolean()),
    test: t.Optional(t.Boolean()),
    missingIcons: t.Optional(t.Boolean()),
    missingPrice: t.Optional(t.Boolean()),
});
export const TokenDto = t.Object({
    address: t.String(),
    chainId: t.Numeric(),
});
export const GetTokenBalanceDto = t.Object({
    chainId: t.Numeric(),
    userAddress: t.String(),
    verified: t.Optional(t.Boolean()),
    tokenAddress: t.Optional(t.String({ description: "If provided, the default verified token balances won't be included" })),
    additionalTokenAddresses: t.Optional(t.Array(t.String())),
});
export const TokenIdDto = t.Object({ id: t.String() });
export const UpdateTokenDto = t.Object({
    isTest: t.Optional(t.Boolean()),
    isPoint: t.Optional(t.Boolean()),
    isPreTGE: t.Optional(t.Boolean()),
    verified: t.Optional(t.Boolean()),
    icon: t.Optional(t.String({ format: "uri" })),
    // iconFile: t.Optional(t.File()),
    displaySymbol: t.Optional(t.String()),
    name: t.Optional(t.String()),
});
export const CreateTokenDto = t.Object({
    chainId: t.Numeric(),
    address: t.String(),
    icon: t.String(),
    verified: t.Boolean(),
    isTest: t.Optional(t.Boolean()),
});
export const NotionWebhookAddTokenDto = t.Object({
    data: t.Object({
        properties: t.Object({
            "Icon (Required)": t.Object({
                files: t.Array(t.Union([
                    t.Object({ file: t.Object({ url: t.String() }) }),
                    t.Object({ external: t.Object({ url: t.String() }) }),
                ])),
            }),
            "Address (in checksum format) (Required)": t.Object({
                rich_text: t.Array(t.Object({ plain_text: t.String() })),
            }),
            "Chain ID (Required)": t.Object({ number: t.Numeric() }),
            "Symbol (Optional)": t.Object({ rich_text: t.Array(t.Object({ plain_text: t.String() })) }),
            "CoinGecko API ID (Recommended)": t.Object({ rich_text: t.Array(t.Object({ plain_text: t.String() })) }),
        }),
    }),
}, { additionalProperties: true });
