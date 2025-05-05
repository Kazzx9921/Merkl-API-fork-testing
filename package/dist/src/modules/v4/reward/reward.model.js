import { t } from "elysia";
import { TokenResourceDto } from "../token/token.model";
// ─── DTOs ────────────────────────────────────────────────────────────────────
export const DailyRewardsBreakdownRecordResourceDto = t.Object({
    id: t.String(),
    campaignId: t.String(),
    value: t.Number(),
    dailyRewardsRecordId: t.String(),
    token: TokenResourceDto,
    amount: t.Union([t.BigInt(), t.String()]),
});
export const DailyRewardsRecordResourceDto = t.Object({
    id: t.String(),
    total: t.Number(),
    timestamp: t.Union([t.BigInt(), t.String()]),
    breakdowns: t.Array(DailyRewardsBreakdownRecordResourceDto),
});
const BreakdownDto = t.Object({
    recipient: t.String(),
    protocolId: t.Optional(t.String()),
    reason: t.String(),
    amount: t.String(),
    claimed: t.String(),
    pending: t.String(),
});
export const CreateManyBreakdownDto = t.Array(t.Object({
    distributionChainId: t.Numeric(),
    rewardToken: t.String(),
    campaignId: t.String(),
    root: t.String(),
    breakdowns: t.Array(BreakdownDto),
}));
const RewardDto = t.Object({
    root: t.String(),
    recipient: t.String(),
    distributionChainId: t.Number(),
    rewardToken: t.String(),
    amount: t.String(),
    claimed: t.String(),
    pending: t.String(),
    proofs: t.Array(t.String()),
});
export const CreateManyRewardDto = t.Array(RewardDto);
export const RegisterClaimsDto = t.Array(t.Object({
    chainId: t.Numeric(),
    recipient: t.String(),
    token: t.String(),
    root: t.String(),
}));
const PendingDto = t.Object({
    recipient: t.String(),
    reason: t.String(),
    pending: t.String(),
});
export const UpdatePendingDto = t.Object({
    distributionChainId: t.Numeric(),
    rewardToken: t.String(),
    campaignId: t.String(),
    root: t.String(),
    data: t.Array(PendingDto),
});
export const RewardsByUser = t.Object({
    address: t.String(),
});
export const RewardsByUserAndChain = t.Object({
    address: t.String(),
    chainId: t.Numeric(),
});
export const UserRewardQueryDto = t.Object({
    chainId: t.Numeric(),
    mainParameter: t.Optional(t.String()),
    proof: t.Optional(t.String()),
    rewardToken: t.Optional(t.String()),
    user: t.String(),
});
export const RewardsPerChainDto = t.Object({
    chainId: t.Numeric(),
});
export const CampaignIdWithoutPageDto = t.Object({
    chainId: t.Numeric({
        description: "Chain ID",
    }),
    campaignIds: t
        .Transform(t.Union([
        t.String({
            description: "Comma-separated campaign IDs",
        }),
        t.Array(t.String()),
    ]))
        .Decode(value => {
        return typeof value === "string" ? value.split(",") : value;
    })
        .Encode(value => [...value]),
});
export const CampaignIdListDto = t.Object({
    chainId: t.Numeric(),
    campaignIds: t
        .Transform(t.Union([t.String(), t.Array(t.String())]))
        .Decode(value => (typeof value === "string" ? value.split(",") : value))
        .Encode(value => [...value]),
    page: t.Optional(t.Numeric()), // 0-indexed
    items: t.Optional(t.Numeric()), // items per page
});
export const CampaignIdDto = t.Object({
    chainId: t.Numeric({
        description: "Chain ID",
    }),
    campaignId: t.String({
        description: "Campaign ID",
    }),
    page: t.Optional(t.Numeric({ description: "Page number", default: 0 })), // 0-indexed
    items: t.Optional(t.Numeric({ description: "Number of returned rows", default: 20 })), // items per page
});
export const TokenIdDto = t.Object({
    chainId: t.Numeric({
        description: "Chain ID",
    }),
    address: t.String({
        description: "Token Address",
    }),
    campaignIds: t.Optional(t
        .Transform(t.Union([t.String(), t.Array(t.String())]))
        .Decode(value => (typeof value === "string" ? value.split(",") : value))
        .Encode(value => [...value])),
    page: t.Optional(t.Numeric({ description: "Page number", default: 0 })), // 0-indexed
    items: t.Optional(t.Numeric({ description: "Number of returned rows", default: 20 })), // items per page
});
export const CampaignRewardsDto = t.Object({
    page: t.Optional(t.Numeric({ description: "Page number", default: 0 })), // 0-indexed
    items: t.Optional(t.Numeric({ description: "Number of returned rows", default: 20 })), // items per page
});
export const UserRewardV3Dto = t.Record(t.String({ title: "TokenAddress" }), t.Object({
    symbol: t.String(),
    decimals: t.Number(),
    accumulated: t.String(),
    unclaimed: t.String(),
    pending: t.Optional(t.String()),
    reasons: t.Record(t.String({ title: "Reason" }), t.Object({ accumulated: t.String(), unclaimed: t.String(), pending: t.Optional(t.String()) })),
    proof: t.Optional(t.Array(t.String())),
}));
export const RewardV3Dto = t.Record(t.String({ title: "Chain" }), t.Object({
    campaignData: t.Record(t.String({ title: "CampaignId" }), t.Record(t.String({ title: "reason" }), t.Object({
        accumulated: t.String(),
        unclaimed: t.String(),
        pending: t.Optional(t.String()),
        decimals: t.Numeric(),
        mainParameter: t.String(),
        symbol: t.String(),
        token: t.String(),
    }))),
    tokenData: t.Record(t.String(), t.Object({
        accumulated: t.String(),
        unclaimed: t.String(),
        pending: t.Optional(t.String()),
        decimals: t.Numeric(),
        proof: t.Array(t.String()),
        symbol: t.String(),
    })),
}), { $id: "Rewards", additionalProperties: true });
export const QueryTotalDailyRewardsSinceDto = t.Object({
    since: t.Date(),
    chainId: t.Optional(t.Numeric()),
    protocol: t.Optional(t.String()),
    type: t.Optional(t.String()),
});
