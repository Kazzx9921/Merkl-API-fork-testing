import { AccountingController } from "@/modules/v4/accounting/accounting.controller";
import { BlacklistController } from "@/modules/v4/blacklist/blacklist.controller";
import { BoostController } from "@/modules/v4/boost/boost.controller";
import { CampaignController } from "@/modules/v4/campaign/campaign.controller";
import { CampaignTestController } from "@/modules/v4/campaign/campaign.test.controller";
import { ChainController } from "@/modules/v4/chain/chain.controller";
import { ClaimController } from "@/modules/v4/claims/claims.controller";
import { ComputedValueController } from "@/modules/v4/computedValue/computedValue.controller";
import { CreatorController } from "@/modules/v4/creator/creator.controller";
import { ExplorerController } from "@/modules/v4/explorer/explorer.controller";
import { InteractionController } from "@/modules/v4/interaction/interaction.controller";
import { LiquidityController } from "@/modules/v4/liquidity/liquidity.controller";
import { MerklRootController } from "@/modules/v4/merklRoot/merklRoot.controller";
import { OpportunityController } from "@/modules/v4/opportunity/opportunity.controller";
import { PriceController } from "@/modules/v4/price/price.controller";
import { ProgramPayloadController } from "@/modules/v4/programPayload/programPayload.controller";
import { ProtocolController } from "@/modules/v4/protocol/protocol.controller";
import { RewardController } from "@/modules/v4/reward/reward.controller";
import { StatusController } from "@/modules/v4/status/status.controller";
import { TokenController } from "@/modules/v4/token/token.controller";
import { UniswapController } from "@/modules/v4/uniswap/uniswap.controller";
import { UserController } from "@/modules/v4/user/user.controller";
import { ErrorHandler } from "@/plugins/error-handling.plugin";
import { TailSampler } from "@/utils/TailSampler";
import bigintToString from "@/utils/bigintToString";
import { opentelemetry } from "@elysiajs/opentelemetry";
import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { RedisInstrumentation } from "@opentelemetry/instrumentation-redis-4";
import { AlwaysOffSampler, BatchSpanProcessor } from "@opentelemetry/sdk-trace-node";
import { PrismaInstrumentation } from "@prisma/instrumentation";
import Elysia from "elysia";
import { ReferralController } from "./referral/referral.controller";
import { TurtleController } from "./turtle/turtle.controller";
// ─── V4 Router ───────────────────────────────────────────────────────────────
export const v4 = new Elysia({ tags: ["v4"], prefix: "/v4" })
    // ─── OpenTelemetry ───────────────────────────────────────────────────
    .use(opentelemetry({
    sampler: process.env.TRACE === "true" ? new TailSampler(0.01) : new AlwaysOffSampler(),
    spanProcessors: [
        new BatchSpanProcessor(new OTLPTraceExporter({
            url: process.env.OTEL_COLLECTOR,
            headers: {
                "signoz-ingestion-key": String(process.env.SIGNOZ_INGESTION_KEY),
            },
        })),
    ],
    instrumentations: [
        getNodeAutoInstrumentations({
            "@opentelemetry/instrumentation-redis": { enabled: false },
        }),
        new PrismaInstrumentation(),
        new RedisInstrumentation({
            enabled: true,
            requireParentSpan: false,
            dbStatementSerializer: (cmdName, cmdArgs) => {
                return [cmdName, ...cmdArgs].join(" ");
            },
        }),
    ],
    serviceName: "merkl-api",
}))
    // ─── Error Handling ──────────────────────────────────────────────────
    .use(ErrorHandler)
    // ─── Response Transformation ─────────────────────────────────────────
    .onAfterHandle(({ response }) => bigintToString(response))
    // ─── Route Controllers ───────────────────────────────────────────────
    .use(OpportunityController)
    .use(CampaignController)
    .use(CampaignTestController)
    .use(ProtocolController)
    .use(ExplorerController)
    .use(TokenController)
    .use(RewardController)
    .use(ChainController)
    .use(PriceController)
    .use(BlacklistController)
    .use(UserController)
    .use(MerklRootController)
    .use(InteractionController)
    .use(AccountingController)
    .use(StatusController)
    .use(LiquidityController)
    .use(ClaimController)
    .use(ProgramPayloadController)
    .use(BoostController)
    .use(ComputedValueController)
    .use(CreatorController)
    .use(ReferralController)
    .use(UniswapController)
    .use(TurtleController);
