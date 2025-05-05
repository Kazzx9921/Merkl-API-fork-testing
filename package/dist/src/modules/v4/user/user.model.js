import { ChainResourceDto } from "@/modules/v4/chain/chain.model";
import { t } from "elysia";
// ─── Dtos ────────────────────────────────────────────────────────────────────
export const UserRewardRouteDto = t.Object({
    chainId: t
        .Transform(t.Union([t.String(), t.Array(t.Numeric())]))
        .Decode(value => (typeof value === "string" ? value.split(",").map(v => Number.parseInt(v)) : value))
        .Encode(value => [...value]),
    reloadChainId: t.Optional(t.Numeric({
        description: "An optional chainId to bypass the cache and check if there was very recently a claim on this chain",
    })),
    test: t.Optional(t.Boolean({ description: "Include test token rewards" })),
    claimableOnly: t.Optional(t.Boolean({ description: "Include only claimable rewards (to avoid transferring zero amounts)" })),
}, {
    description: "A required comma separated list of chain ids.<br>You can get the list of all supported chains by calling [GET /v4/chains](#tag/chains/GET/v4/chains/)",
});
export const UserRewardsResourceDto = t.Object({
    chain: ChainResourceDto,
    rewards: t.Array(t.Object({
        root: t.String(),
        recipient: t.String(),
        proofs: t.Array(t.String()),
        token: t.Object({
            address: t.String(),
            chainId: t.Number(),
            symbol: t.String(),
            decimals: t.Number(),
        }),
        breakdowns: t.Array(t.Object({
            reason: t.String(),
            amount: t.String(),
            claimed: t.String(),
            pending: t.String(),
            campaignId: t.String(),
        })),
        claimed: t.Union([t.BigInt(), t.String()]),
        amount: t.Union([t.BigInt(), t.String()]),
        pending: t.Union([t.BigInt(), t.String()]),
    })),
});
export const UserUniqueDto = t.Object({
    address: t.String(),
});
export const OptionalChainIdDto = t.Object({
    chainIds: t.Optional(t
        .Transform(t.Union([t.String(), t.Array(t.Numeric())]))
        .Decode(value => (typeof value === "string" ? value.split(",").map(v => Number.parseInt(v)) : value))
        .Encode(value => [...value])),
    reloadChainId: t.Optional(t.Numeric()),
    test: t.Optional(t.Boolean({ description: "Include test token rewards" })),
    claimableOnly: t.Optional(t.Boolean({ description: "Include only claimable rewards (to avoid transferring zero amounts)" })),
});
export const UserDto = t.Object({
    address: t.String(),
    tags: t.Array(t.String()),
});
export const CreatorDto = t.Object({
    address: t.String(),
    tags: t.Array(t.String()),
});
export const GetManyUserQuery = t.Object({
    address: t.Optional(t.String()),
    tags: t.Optional(t.Array(t.String())),
    page: t.Optional(t.Number()),
    items: t.Optional(t.Number()),
});
export const CheckTerms = t.Object({
    chainId: t.Numeric(),
});
export const UserTagsDto = t.Object({
    tags: t.Array(t.String()),
});
