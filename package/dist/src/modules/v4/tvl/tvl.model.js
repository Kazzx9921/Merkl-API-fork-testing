import { TvlType } from "@db/api";
import { t } from "elysia";
// ─── Dtos ────────────────────────────────────────────────────────────────────
export const TvlBreakdownResourceDto = t.Object({
    identifier: t.String(),
    type: t.Enum(TvlType),
    value: t.Number(),
});
export const TvlRecordResourceDto = t.Object({
    total: t.Number(),
    timestamp: t.Union([t.BigInt(), t.String()]),
    breakdowns: t.Array(TvlBreakdownResourceDto),
});
