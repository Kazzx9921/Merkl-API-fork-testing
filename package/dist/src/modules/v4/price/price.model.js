import { PriceSourceMethod } from "@db/api";
import { t } from "elysia";
// ─── DTOs ────────────────────────────────────────────────────────────────────
export const CreatePriceSourceDto = t.Object({
    symbol: t.String(),
    method: t.Enum(PriceSourceMethod),
    args: t.Object({}, { additionalProperties: true }),
});
export const UpdatePriceSourceDto = t.Partial(CreatePriceSourceDto);
export const PriceSourceIdentifier = t.Object({
    symbol: t.String(),
});
