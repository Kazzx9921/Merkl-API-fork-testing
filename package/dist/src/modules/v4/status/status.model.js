import { RunStatus } from "@db/api";
import { t } from "elysia";
// ─── DTOs ────────────────────────────────────────────────────────────────────
export const CampaignUniqueDto = t.Object({
    distributionChain: t.Numeric(),
    campaignId: t.String(),
});
export const DelayDto = t.Object({
    endTimestampLowerBound: t.Optional(t.Numeric({
        description: "Lower bound of end timestamps - by default it'll take all campaigns where endTimestamp is more than now - 1 week",
    })),
    delayLowerBound: t.Optional(t.Numeric({ description: "To filter small delays (in seconds)" })),
    chainId: t.Optional(t.Numeric({ description: "To get delays for Campaigns on a given chain only" })),
});
export const CampaignStatusResourceDto = t.Object({
    campaignId: t.String(),
    computedUntil: t.Union([t.String(), t.Numeric()]),
    processingStarted: t.Union([t.String(), t.Numeric()]),
    status: t.String(),
    error: t.Optional(t.String()),
    details: t.Optional(t.Any()),
});
export const UpdateCampaignStatusDto = t.Union([
    t.Object({ value: t.Literal(RunStatus.SUCCESS), computedUntil: t.Numeric() }),
    t.Object({ value: t.Literal(RunStatus.PROCESSING) }),
    t.Object({ value: t.Literal(RunStatus.SKIPPED), error: t.String(), details: t.String() }),
    t.Object({ value: t.Literal(RunStatus.FAILED), error: t.String(), details: t.String() }),
]);
export const ComputedUntilDto = t.Object({ computedUntil: t.Numeric() });
export const StatusErrorDto = t.Object({ error: t.String() });
export const QueryCampaignStatusDto = t.Object({
    computeChainId: t.Optional(t.Numeric()),
    status: t.Optional(t.Union([t.Array(t.Enum(RunStatus)), t.Enum(RunStatus)])),
});
