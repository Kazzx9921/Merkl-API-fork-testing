import { AuthorizationHeadersDto, BackOfficeGuard } from "@/guards/BackOffice.guard";
import { RewardService } from "@/modules/v4/reward/reward.service";
import { throwOnInvalidRequiredAddress, throwOnUnsupportedChainId } from "@/utils/throw";
import { Elysia, t } from "elysia";
import { CheckTerms, GetManyUserQuery, OptionalChainIdDto, UserDto, UserRewardRouteDto, UserRewardsResourceDto, UserTagsDto, UserUniqueDto, } from "./user.model";
import { UserService } from "./user.service";
export const UserController = new Elysia({ prefix: "/users", detail: { tags: ["Users"] } })
    // ─── Get User's Rewards With Breakdown ──────────────────────────────
    .get("/:address/rewards", async ({ params, query }) => {
    const rewardsByChain = await RewardService.getUserRewardsByChain(params.address, false, typeof query.chainId === "number" ? [query.chainId] : query.chainId, !!query.reloadChainId ? query.reloadChainId : null, !!query.test ? query.test : false, !!query.claimableOnly);
    return RewardService.removeOpportunityFromRewardBreakdown(rewardsByChain);
}, {
    params: UserUniqueDto,
    query: UserRewardRouteDto,
    beforeHandle: ({ query, params }) => {
        params.address = throwOnInvalidRequiredAddress(params.address);
        if (typeof query.chainId === "number") {
            throwOnUnsupportedChainId(query.chainId);
        }
        else {
            for (const chainId of query.chainId) {
                throwOnUnsupportedChainId(chainId);
            }
        }
        if (!!query.reloadChainId)
            throwOnUnsupportedChainId(query.reloadChainId);
    },
    response: t.Array(UserRewardsResourceDto),
    detail: { description: "Get the rewards associated to a user on a given chain." },
})
    // ─── Check if user has signed terms ─────────────────────────────────
    .get("/:address/terms", async ({ query, params }) => await UserService.checkTerms(params?.address, query?.chainId), {
    query: CheckTerms,
    detail: {
        description: "Check if a user address has signed Merkl's terms.",
    },
})
    .guard({ detail: { hide: true } })
    // ─── Get Many Users ──────────────────────────────────────────────────
    .get("/", async ({ query }) => await UserService.findMany(query), { query: GetManyUserQuery })
    // ─── Get A User By Address ───────────────────────────────────────────
    .get("/:address", async ({ params }) => await UserService.findUnique(params.address))
    // ─── Get User's Rewards With Breakdown And Details for our FE ────────
    .get("/:address/rewards/breakdowns", async ({ params, query }) => {
    const rewardsByChain = await RewardService.getUserRewardsByChain(params.address, true, query?.chainIds, query.reloadChainId ?? null, !!query.test ? query.test : false, !!query.claimableOnly);
    return RewardService.splitRewardsBreakdownByOpportunity(rewardsByChain);
}, {
    params: UserUniqueDto,
    query: OptionalChainIdDto,
    beforeHandle: ({ params, query }) => {
        params.address = throwOnInvalidRequiredAddress(params.address);
        if (!!query.reloadChainId)
            throwOnUnsupportedChainId(query.reloadChainId);
        for (const chainId of query?.chainIds ?? []) {
            throwOnUnsupportedChainId(chainId);
        }
    },
})
    .guard({
    headers: AuthorizationHeadersDto,
    beforeHandle: BackOfficeGuard,
})
    // ─── Create A User ───────────────────────────────────────────────────
    .post("/", async ({ body }) => await UserService.create(body), {
    body: UserDto,
})
    // ─── Get All Tagged Users ─────────────────────────────────────────────
    .get("/tags", async () => await UserService.findManyWithTags())
    // ─── Update User's Tags ──────────────────────────────────────────────
    .patch("/:address/tags", async ({ params, body }) => UserService.updateTags(params.address, body.tags), {
    params: UserUniqueDto,
    body: UserTagsDto,
})
    // ─── Sync Creator Tags With Engine Db ────────────────────────────────
    .post("/sync", async () => {
    await UserService.syncTags();
    await UserService.syncOpportunityTags();
});
