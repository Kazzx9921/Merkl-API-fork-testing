import { t } from "elysia";
// ─── DTOs ────────────────────────────────────────────────────────────────────
export const CreatorDto = t.Object({
    addresses: t.Array(t.String()),
    icon: t.Optional(t.String()),
    id: t.String(),
    name: t.String(),
    rebateFee: t.Optional(t.Number({ maximum: 100, minimum: 0 })),
});
export const CreateCreatorDto = t.Object({
    id: t.String(),
    addresses: t.Array(t.String()),
    icon: t.Optional(t.String()),
    name: t.String(),
});
export const GetManyCreatorQuery = t.Object({
    id: t.Optional(t.String()),
    address: t.Optional(t.String()),
    page: t.Optional(t.Number()),
    items: t.Optional(t.Number()),
});
export const UpdateCreatorDto = t.Object({
    addresses: t.Array(t.String()),
    icon: t.Optional(t.String()),
    name: t.String(),
});
export const CreatorAddressDto = t.Object({
    address: t.String(),
});
export const CampaignIdDto = t.Object({
    id: t.String(),
});
export const CampaignStatusDto = t.Enum({ PAST: "PAST", LIVE: "LIVE", FUTURE: "FUTURE" });
export const CampaignQueryDto = t.Object({
    status: t.Optional(CampaignStatusDto),
});
export const CreatorIdDto = t.Object({
    id: t.String(),
});
export const UpdateCreatorRebateDto = t.Object({
    rebate: t.Number({ maximum: 100, minimum: 0 }),
});
