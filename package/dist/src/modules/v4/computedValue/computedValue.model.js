import { t } from "elysia";
// ─── DTOs ────────────────────────────────────────────────────────────────────
export const GetCampaignComputedValue = t.Object({
    campaignId: t.String({
        description: "The campaign Id to get the computed value for. Can be either of the for '0x1234...5678' (solidity id) or '0x1234...5678_<DISTRIBUTION_CHAIN>' or '22222' (Database id).",
    }),
    field: t.String({
        description: "The field you're querying for. Example includes 'averageBoost', 'totalDistributedInUSD', 'forfeitingBoost'. Note that these aren't always available and depend on the campaign type.",
    }),
});
export const UpsertCampaignComputedValue = t.Object({
    campaignId: t.String(),
    value: t.Number(),
    field: t.String(),
});
export const GetUserComputedValues = t.Object({
    address: t.String({
        description: "The user's address to get the computed values for.",
    }),
    field: t.String({
        description: "The field you're querying for. Example includes 'boost'.",
    }),
});
export const UpsertUserComputedValues = t.Array(t.Object({
    campaignId: t.String(),
    address: t.String(),
    reason: t.String(),
    value: t.Number(),
    field: t.String(),
}));
