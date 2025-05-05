import { AprRecordResourceDto } from "@/modules/v4/apr/apr.model";
import { CampaignResourceDto } from "@/modules/v4/campaign/campaign.model";
import { ProtocolResourceDto } from "@/modules/v4/protocol/protocol.model";
import { DailyRewardsRecordResourceDto } from "@/modules/v4/reward/reward.model";
import { TokenDto, TokenResourceDto } from "@/modules/v4/token/token.model";
import { TvlRecordResourceDto } from "@/modules/v4/tvl/tvl.model";
import { DistributionType, OpportunityAction, OpportunityManualOverride, Status } from "@db/api";
import { t } from "elysia";
import { ChainResourceDto } from "../chain/chain.model";
// ─── DTOs ────────────────────────────────────────────────────────────────────
export const OpportunityResourceDto = t.Object({
    chainId: t.Number(),
    type: t.String(),
    identifier: t.String(),
    name: t.String(),
    description: t.String(),
    howToSteps: t.Array(t.String()),
    status: t.String(),
    action: t.String(),
    tvl: t.Number(),
    apr: t.Number(),
    dailyRewards: t.Number(),
    depositUrl: t.Optional(t.String()),
    explorerAddress: t.Optional(t.String()),
    distributionType: t.Optional(t.Enum(DistributionType)),
    tags: t.Array(t.String()),
    id: t.String(),
    tokens: t.Array(TokenResourceDto),
    chain: ChainResourceDto,
    aprRecord: t.Optional(AprRecordResourceDto),
    tvlRecord: t.Optional(TvlRecordResourceDto),
    rewardsRecord: t.Optional(DailyRewardsRecordResourceDto),
    lastCampaignCreatedAt: t.String({ format: "date" }),
    protocol: t.Optional(t.Union([ProtocolResourceDto, t.Null()])),
});
export const OpportunityWithCampaignsResourceDto = t.Composite([
    OpportunityResourceDto,
    t.Object({ campaigns: t.Array(CampaignResourceDto) }),
]);
export const OpportunityUniqueDto = t.Object({
    id: t.String({
        pattern: "(([0-9]*)-([0-9A-Z]*)-(0x([0-9A-Za-z])*))|([0-9]{1,20})",
        description: "The id of the opportunity. You can find opportunities including their id at [GET /v4/opportunities](#tag/opportunities/GET/v4/opportunities/)",
    }),
});
export const OpportunityUniqueUpdateDto = t.Object({
    id: t.String({
        pattern: "(([0-9]*)-([0-9A-Z]*)-(0x([0-9A-Za-z])*))|([0-9]{1,20})",
        description: "The id of the opportunity. You can find opportunities including their id at [GET /v4/opportunities](#tag/opportunities/GET/v4/opportunities/)",
    }),
    campaignId: t.Optional(t.String({ description: "The id of the campaign you want to reparse with" })),
});
export const AggregationResourceDto = t.Object({
    sum: t.Number(),
});
export const GetOpportunitiesQueryDto = t.Object({
    name: t.Optional(t.String({ description: "Filter by name" })),
    search: t.Optional(t.String({ description: "Search amongst multiple values (token, protocols, tags, campaigns)" })),
    campaignId: t.Optional(t.String({ description: "Search the opportunity linked to a given campaignId" })),
    //TODO: find a systemic way of handling query param arrays
    chainId: t.Optional(t.RegExp(/^\d+(,\d+)*$/, {
        description: "A comma separated list of chain ids. Example: ?chainId=1,42161<br>You can get the list of all supported chains by calling [GET /v4/chains](#tag/chains/GET/v4/chains/)",
    })),
    action: t.Optional(t.String({
        description: `A comma seprated list actions. Legal values are: ${Object.values(OpportunityAction).join(", ")}`,
    })),
    type: t.Optional(t.String({ description: "A comma separated list of Opportunity type" })),
    creatorAddress: t.Optional(t.String({ description: "Filter by creator address" })),
    tags: t.Optional(t.String({ description: "Filter by tag" })),
    test: t.Optional(t.Boolean({ description: "Include opportunities with test campaigns" })),
    point: t.Optional(t.Boolean({ description: "Include opportunities with point campaigns", default: false })),
    minimumTvl: t.Optional(t.Number({ description: "Minimum TVL threshhold in USD" })),
    status: t.Optional(t.RegExp(/^(LIVE|PAST|SOON)(,(LIVE|PAST|SOON)){0,2}$/, {
        description: "A comma separeted list of status. Legal values are: `LIVE`, `PAST`, `SOON`",
    })),
    identifier: t.Optional(t.String({ description: "Filter by identifier (mainParameter)." })),
    campaigns: t.Optional(t.Boolean({ description: "Include campaign data. Will slow down the request. Default: false" })),
    tokens: t.Optional(t.String({ description: "A comma separated list of token symbol. Use to filter by token" })),
    rewardTokenSymbol: t.Optional(t.String({
        description: "Filter by opportunity that have at least 1 campaigns where the reward token has this symbol",
    })),
    sort: t.Optional(t.RegExp(/(apr|tvl|rewards|lastCampaignCreatedAt)/, {
        description: "Sort by `apr`, `tvl`, `rewards` or last campaign creation date",
    })),
    order: t.Optional(t.RegExp(/desc|asc/, {
        description: "`asc` to sort in ascending order or `desc` to sort in descending order.",
        default: "desc",
    })),
    mainProtocolId: t.Optional(t.String({
        description: "A comma separated list of protocol ids. You can get the list of all supported protocols by calling [GET /v4/protocols](#tag/protocols/GET/v4/protocols/)",
    })),
    page: t.Optional(t.Numeric({ description: "0-indexed page number", default: 0 })),
    items: t.Optional(t.Numeric({ description: "Number of items returned by page", default: 20 })), // items per page
});
export const GetOpportunityQueryDto = t.Object({
    test: t.Optional(t.Boolean({ description: "Include test campaigns" })),
    point: t.Optional(t.Boolean({ description: "Include point campaigns", default: false })),
    campaigns: t.Optional(t.Boolean({ description: "Include campaign data. Will slow down the request. Default: false" })),
});
export const CreateOpportunityDto = t.Object({
    chainId: t.Number(),
    type: t.String(),
    identifier: t.String(),
    name: t.Optional(t.String()),
    status: t.Enum(Status),
    action: t.Enum(OpportunityAction),
    description: t.Optional(t.String()),
    howToSteps: t.Optional(t.Array(t.String())),
    tokens: t.Array(TokenDto),
    protocols: t.Optional(t.Array(t.String())),
    mainProtocol: t.Optional(t.String()),
    depositUrl: t.Optional(t.String()),
    explorerAddress: t.Optional(t.String()),
    tags: t.Optional(t.Array(t.String())),
});
export const OpportunityAggregateFieldDto = t.Object({
    field: t.Union(["dailyRewards", "tvl", "apr"].map(v => t.Literal(v))),
});
export const OpportunityIdDto = t.Object({ id: t.String() });
export const OpportunityOverrideDto = t.Object({
    name: t.Optional(t.String()),
    description: t.Optional(t.String()),
    howToSteps: t.Optional(t.Array(t.String())),
    depositUrl: t.Optional(t.String({ format: "uri" })),
    explorerAddress: t.Optional(t.String({ format: "uri" })),
    action: t.Optional(t.Enum(OpportunityAction)),
});
export const OpportunityDeleteOverrideDto = t.Array(t.Enum(OpportunityManualOverride));
