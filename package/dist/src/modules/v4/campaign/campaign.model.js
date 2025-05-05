import { TokenResourceDto } from "@/modules/v4/token/token.model";
import { CampaignManualOverride, Status } from "@db/api";
import { t } from "elysia";
import { ChainResourceDto } from "../chain/chain.model";
import { CampaignStatusResourceDto } from "../status/status.model";
// ─── DTOs ────────────────────────────────────────────────────────────────────
export const CampaignUniqueDto = t.Object({
    distributionChain: t.Numeric(),
    campaignId: t.String(),
});
export const CampaignsDto = t.Array(t.String());
export const CampaignResourceDto = t.Object({
    id: t.String(),
    computeChainId: t.Number(),
    distributionChainId: t.Number(),
    campaignId: t.String(),
    type: t.String(),
    subType: t.Union([t.Number(), t.Null()]),
    rewardTokenId: t.String(),
    amount: t.String(),
    opportunityId: t.String(),
    startTimestamp: t.Union([t.String(), t.Numeric()]),
    endTimestamp: t.Union([t.String(), t.Numeric()]),
    creatorAddress: t.String(),
    creator: t.Optional(t.Object({
        address: t.String(),
        tags: t.Optional(t.Array(t.String())),
        creatorId: t.Optional(t.Nullable(t.String())),
    })),
    params: t.Any(),
    description: t.Optional(t.String()),
    chain: ChainResourceDto,
    rewardToken: TokenResourceDto,
    distributionChain: t.Optional(ChainResourceDto),
    campaignStatus: t.Optional(CampaignStatusResourceDto),
    createdAt: t.String({ format: "date" }),
    rootCampaignId: t.Optional(t.String()),
    parentCampaignId: t.Optional(t.String()),
});
export const CampaignConfigMinimal = t.Object({
    computeChainId: t.Number(),
    params: t.Any(),
    type: t.String(),
    subType: t.Optional(t.Number()),
    distributionChainId: t.Number(),
    endTimestamp: t.Number(),
    startTimestamp: t.Number(),
    rewardToken: t.String(),
    id: t.Optional(t.String()),
    campaignId: t.Optional(t.String()),
    amount: t.Optional(t.String()),
    creatorAddress: t.Optional(t.String()),
});
export const CreateCampaignDto = t.Object({
    computeChainId: t.Number(),
    chainId: t.Number(),
    campaignId: t.String(),
    rootCampaignId: t.Optional(t.String()),
    parentCampaignId: t.Optional(t.String()),
    identifier: t.Optional(t.String()),
    creator: t.String(),
    type: t.Numeric(),
    subType: t.Optional(t.Number()),
    rewardTokenAddress: t.String(),
    amount: t.String(),
    opportunityIdentifier: t.String(),
    startTimestamp: t.String(),
    endTimestamp: t.String(),
    params: t.String(),
    tags: t.Optional(t.Array(t.String())),
});
export const UpdateCampaignDto = t.Object({
    distributionChain: t.Numeric(),
    campaignId: t.String(),
    opportunityIdentifier: t.Optional(t.String()),
});
export const UpdateCampaignCreatorDto = t.Object({
    distributionChain: t.Numeric(),
    campaignId: t.String(),
    creatorAddress: t.String(),
});
export const RemoveManualOverrideDto = t.Object({
    distributionChain: t.Numeric(),
    campaignId: t.String(),
    field: t.Enum(CampaignManualOverride),
});
export const UpdateMetaDataCampaignDto = t.Object({
    distributionChain: t.Numeric(),
    campaignId: t.String(),
    url: t.String(),
});
export const GetCampaignQueryDto = t.Object({
    creatorTag: t.Optional(t.String({ description: "Filter campaigns created by a user who has a specific tag" })),
    creatorAddress: t.Optional(t.String()),
    creatorId: t.Optional(t.String({ description: "Filter campaigns created by a user who is registered as a merkl creator" })),
    chainId: t.Optional(t.Numeric({
        description: "Filter by compute chain.<br>You can get the list of all supported chains by calling [GET /v4/chains](#tag/chains/GET/v4/chains/)",
    })),
    distributionChainIds: t.Optional(t.Array(t.Numeric({
        description: "Filter by distribution chain.<br>You can get the list of all supported chains by calling [GET /v4/chains](#tag/chains/GET/v4/chains/)",
    }))),
    type: t.Optional(t.String({ description: "Filter by type of campaign" })),
    types: t.Optional(t.Array(t.String({ description: "Filter by type of campaign using an array. The `type` entry has priority." }))),
    subType: t.Optional(t.Number({
        description: "Silo, Radiant, Morpho, Dolomite, Compound, Ajna and Euler campaigns have a subtype attribute you can filter on",
    })),
    campaignId: t.Optional(t.String({
        description: "Filter campaigns by campaignId. Some campaigns take place on different blockchains, one resource per chain will be returned, sharing the same campaignId",
    })),
    mainParameter: t.Optional(t.String({
        description: "the mainParameter represents the address of the contract targeted by a campaign (e.g. a Uniswap pool)",
    })),
    tokenSymbol: t.Optional(t.String({ description: "Filter by reward token symbol (e.g. USDC for campaigns rewarding in USDC)" })),
    tokenAddress: t.Optional(t.String({
        description: "Filter results by the reward token address. Use in combination with chainId for accuracy",
    })),
    test: t.Optional(t.Boolean({ description: "Return campaigns rewarding in test tokens", default: false })),
    point: t.Optional(t.Boolean({ description: "Return campaigns rewarding in points", default: false })),
    opportunityId: t.Optional(t.String({
        description: "Filter by opportunity. You can find opportunity ids by calling [GET /v4/opportunities](#tag/opportunities/GET/v4/opportunities)",
    })),
    status: t.Optional(t.Enum(Status, {
        description: "Get only live, past or future campaigns. Has precendence over timestamp filters",
    })),
    startTimestamp: t.Optional(t.String({ pattern: "[0-9]*", description: "Returns campaigns starting *after* the given unix timestamp" })),
    endTimestamp: t.Optional(t.String({ pattern: "[0-9]*", description: "Returns campaigns ending *after* the given unix timestamp" })),
    withOpportunity: t.Optional(t.Boolean({
        description: "Include opportunity data. Will slow down the request. Default: false",
    })),
    createdAfter: t.Optional(t.Union([t.Date({ description: "Return campaigns created after the given date. Format: YYYY-MM-DD" }), t.Null()])),
    rootCampaignId: t.Optional(t.String({
        description: "Filter campaigns by rootCampaignId. This only return subcampaigns.",
    })),
    parentCampaignId: t.Optional(t.String({
        description: "Filter campaigns by parentCampaignId. This only return subcampaigns.",
    })),
    page: t.Optional(t.Numeric({ description: "0-indexed page number", default: 0 })),
    items: t.Optional(t.Numeric({ description: "Number of items returned by page", default: 20 })), // items per page
});
