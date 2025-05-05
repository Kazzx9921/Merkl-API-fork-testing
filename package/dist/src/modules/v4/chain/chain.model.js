import { ExplorerType } from "@db/api";
import { t } from "elysia";
// ─── DTOs ────────────────────────────────────────────────────────────────────
export const ChainResourceDto = t.Object({
    id: t.Number(),
    name: t.String(),
    icon: t.String(),
});
export const GetChainQueryDto = t.Object({
    name: t.Optional(t.String({ description: "Search by blockchain name" })),
    test: t.Optional(t.Boolean({ description: "Includes chains that have only test opportunities.", default: false })),
});
export const ChainUniqueDto = t.Object({
    chainId: t.Numeric(),
});
export const ChainUniqueOptionalDto = t.Object({
    chainId: t.Optional(t.Numeric()),
});
export const ChainArrayOptionalDto = t.Object({
    chainIds: t.Optional(t
        .Transform(t.Union([t.String(), t.Array(t.Numeric())]))
        .Decode(value => (typeof value === "string" ? value.split(",").map(v => Number.parseInt(v)) : value))
        .Encode(value => [...value])),
}, {
    description: "A required comma separated list of chain ids.<br>You can get the list of all supported chains by calling [GET /v4/chains](#tag/chains/GET/v4/chains/)",
});
export const UpdateChainDto = t.Object({
    icon: t.Optional(t.String({ format: "uri" })),
    dailyRewards: t.Optional(t.Number({})),
    liveCampaigns: t.Optional(t.Number()),
    // iconFile: t.Optional(t.File()),
});
export const CreateChainDto = t.Object({
    id: t.Numeric(),
    name: t.String(),
    icon: t.String({ format: "uri" }),
    explorerType: t.Enum(ExplorerType),
    explorerUrl: t.String({ format: "uri" }),
});
