import { BackOfficeGuard } from "@/guards/BackOffice.guard";
import { AuthorizationHeadersDto, EngineGuard } from "@/guards/Engine.guard";
import { ChainDto } from "@/modules/v4/accounting/accounting.model";
import { CacheService } from "@/modules/v4/cache/cache.service";
import { CampaignService } from "@/modules/v4/campaign/campaign.service";
import { TokenService } from "@/modules/v4/token/token.service";
import { throwOnInvalidRequiredAddress, throwOnUnsupportedChainId } from "@/utils/throw";
import Elysia, { t } from "elysia";
import { TTLPresets } from "../cache/cache.model";
import { CampaignIdDto, CampaignIdWithoutPageDto, CampaignRewardsDto, CreateManyBreakdownDto, CreateManyRewardDto, RegisterClaimsDto, TokenIdDto, } from "./reward.model";
import { RewardService } from "./reward.service";
// ─── Rewards Controller ──────────────────────────────────────────────────────
export const RewardController = new Elysia({ prefix: "/rewards", detail: { tags: ["Rewards"] } })
    // ─── Get Reward Breakdowns For Campaign Ids ──────────────────────────
    .get("/", async ({ query }) => await RewardService.breakdownForCampaign(query), {
    query: CampaignIdDto,
    beforeHandle: ({ query }) => {
        throwOnUnsupportedChainId(query.chainId);
    },
    detail: {
        description: "Returns the all the address that received rewards for a given campaign, sorted by descending amounts",
    },
})
    // ─── Get Total Amount Rewarded For Campaign Id ──────────────────────
    .get("/total", async ({ query }) => await RewardService.totalForCampaign(query), {
    query: CampaignIdDto,
    beforeHandle: ({ query }) => {
        throwOnUnsupportedChainId(query.chainId);
    },
    detail: { description: "Returns the total amount distributed for a given campaign" },
})
    // ─── Get Reward Count By Chain And Root For Campaign Id ─────────────
    .get("/count", async ({ query }) => await RewardService.countForCampaign(query), {
    query: CampaignIdDto,
    beforeHandle: ({ query }) => {
        throwOnUnsupportedChainId(query.chainId);
    },
    detail: { hide: true },
})
    // ─── Get Reward by campaign ─────────────
    .group("/campaign/:campaignId", app => {
    return app
        .resolve(async ({ params: { campaignId } }) => {
        const campaign = await CampaignService.findUniqueOrThrow(CampaignService.splitIdOrThrow(campaignId));
        const token = await TokenService.findUniqueOrThrow(campaign.rewardTokenId);
        const rewardQuery = {
            chainId: token.chainId,
            address: token.address,
            campaignIds: [campaign.campaignId],
        };
        return { campaign, token, rewardQuery };
    })
        .guard({
        query: CampaignRewardsDto,
        detail: { hide: true },
    })
        .get("/", async ({ query, rewardQuery }) => await RewardService.breakdownForToken({ ...query, ...rewardQuery }))
        .get("/total", async ({ query, rewardQuery }) => await RewardService.totalForToken({ ...query, ...rewardQuery }))
        .get("/count", async ({ query, rewardQuery }) => await RewardService.countForToken({ ...query, ...rewardQuery }));
})
    // ─── Get Reward Breakdowns For Token ───────────────────────────────
    .group("/token", app => {
    return app
        .guard({
        query: TokenIdDto,
        beforeHandle: ({ query }) => {
            query.address = throwOnInvalidRequiredAddress(query.address);
            throwOnUnsupportedChainId(query.chainId);
        },
        detail: { hide: true },
    })
        .get("/", async ({ query }) => await RewardService.breakdownForToken(query))
        .get("/total", async ({ query }) => await RewardService.totalForToken(query))
        .get("/count", async ({ query }) => await RewardService.countForToken(query));
})
    .group("/engine", {
    headers: AuthorizationHeadersDto,
    beforeHandle: EngineGuard,
    detail: { hide: true },
}, app => {
    return (app
        // ─── Create Many Rewards ─────────────────────────────────────────────
        .post("/", async ({ body }) => await RewardService.createManyReward(body), {
        body: CreateManyRewardDto,
    })
        // ─── Create Many Reward Breakdowns ───────────────────────────────────
        .post("/breakdowns", async ({ body }) => await RewardService.createManyBreakdown(body), {
        body: CreateManyBreakdownDto,
    })
        // ─── Register new claims ──────────────────────────────────────────────
        .post("/claims", async ({ body }) => await RewardService.registerClaims(body), {
        body: RegisterClaimsDto,
        beforeHandle: ({ headers, body }) => {
            EngineGuard({ headers });
            for (const claim of body) {
                throwOnUnsupportedChainId(claim.chainId);
                claim.token = throwOnInvalidRequiredAddress(claim.token);
                claim.recipient = throwOnInvalidRequiredAddress(claim.recipient);
            }
        },
    }));
})
    // ─── Get Reward Count By Chain And Root ──────────────────────────────
    .get("/count/chain", async ({ query }) => await RewardService.countOnChain(query.chainId), {
    query: ChainDto,
    headers: AuthorizationHeadersDto,
    beforeHandle: ({ headers, query }) => {
        BackOfficeGuard({ headers });
        throwOnUnsupportedChainId(query.chainId);
    },
    detail: { hide: true },
})
    // ─── Unclaimed Data routes ───────────────────────────────────────────
    .group("/unclaim", app => {
    return app.get("/", async ({ query }) => await RewardService.getUnclaimed(query), {
        query: CampaignIdWithoutPageDto,
        beforeHandle: ({ query }) => {
            throwOnUnsupportedChainId(query.chainId);
        },
        detail: { description: "Returns the total of unclaimed rewards for given campaigns" },
    });
})
    .guard({
    query: t.Object({ since: t.Date() }),
    detail: { hide: true },
})
    .get("/total/distributed", async ({ query }) => await RewardService.getTotalDistributed(query.since.getTime() / 1000))
    .get("/total/distributed/by-chains", async ({ query }) => await CacheService.wrap(TTLPresets.DAY_1, RewardService.getTotalDistributedByChain, query.since.getTime() / 1000))
    .get("/total/distributed/by-types", async ({ query }) => await CacheService.wrap(TTLPresets.DAY_1, RewardService.getTotalDistributedByType, query.since.getTime() / 1000))
    .get("/total/distributed/by-protocols", async ({ query }) => await CacheService.wrap(TTLPresets.DAY_1, RewardService.getTotalDistributedByProtocol, query.since.getTime() / 1000));
