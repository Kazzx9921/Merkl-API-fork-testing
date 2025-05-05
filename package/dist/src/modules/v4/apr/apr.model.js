import { AprType } from "@db/api";
import { t } from "elysia";
// ─── Dtos ────────────────────────────────────────────────────────────────────
export const AprBreakdownResourceDto = t.Object({
    identifier: t.String(),
    type: t.Enum(AprType),
    value: t.Number(),
});
export const AprRecordResourceDto = t.Object({
    cumulated: t.Number(),
    timestamp: t.Union([t.BigInt(), t.String()]),
    breakdowns: t.Array(AprBreakdownResourceDto),
});
