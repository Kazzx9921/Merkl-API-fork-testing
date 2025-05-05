import { throwOnUnsupportedChainId } from "@/utils/throw";
import Elysia from "elysia";
import { ReferralCodeDto, ReferralRedeemCodeDto } from "./referral.model";
import { ReferralService } from "./referral.service";
// ─── Rewards Controller ──────────────────────────────────────────────────────
export const ReferralController = new Elysia({ prefix: "/referral", detail: { tags: ["Referral"] } })
    // ─── Get Reward Breakdowns For Campaign Ids ──────────────────────────
    .get("/code", async ({ query: { chainId, referralKey, address } }) => await ReferralService.getCodeOrTransaction(chainId, referralKey, address), {
    query: ReferralCodeDto,
    beforeHandle: ({ query: { chainId } }) => {
        throwOnUnsupportedChainId(chainId);
    },
    detail: {
        description: "Returns the transaction to register user as a referrer on-chain and some additional state",
    },
})
    .get("/redeem", async ({ query: { chainId, referralKey, code } }) => await ReferralService.getReferralTransaction(chainId, referralKey, code), {
    query: ReferralRedeemCodeDto,
    beforeHandle: ({ query: { chainId } }) => {
        throwOnUnsupportedChainId(chainId);
    },
    detail: {
        description: "Returns the transaction to redeem a referral code on-chain and some additional state",
    },
});
