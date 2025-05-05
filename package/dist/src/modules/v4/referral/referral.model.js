import { t } from "elysia";
// ─── DTOs ────────────────────────────────────────────────────────────────────
export const ReferralCodeDto = t.Object({
    chainId: t.Number(),
    referralKey: t.String(),
    address: t.String(),
});
export const ReferralRedeemCodeDto = t.Object({
    chainId: t.Number(),
    referralKey: t.String(),
    code: t.String(),
});
