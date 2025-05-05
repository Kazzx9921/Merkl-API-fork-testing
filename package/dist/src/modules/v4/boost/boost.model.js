import { t } from "elysia";
export const getEulerBoostBody = t.Union([
    t.Object({
        addresses: t.Array(t.String()),
    }),
    t.Array(t.Object({
        address: t.String(),
        score: t.String(),
    })),
]);
export const getZksyncBoost = t.Object({
    protocol: t.String(),
    target: t.String(),
});
