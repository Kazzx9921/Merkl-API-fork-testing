import { getClamsInfo } from "@/libs/deprecated-merklv3";
import { InvalidParameter } from "@/utils/error";
import { throwOnUnsupportedChainId } from "@/utils/throw";
import { AMM, ChainId, isSupportedChain } from "@sdk";
import { t } from "elysia";
import checkQueryAddressValidity from "../../hooks/checkQueryAddressValidity";
export const query = t.Object({
    AMMs: t.Optional(t.Union([t.String(), t.Array(t.String())])),
    chainIds: t.Optional(t.Union([t.Numeric(), t.Array(t.Numeric())])),
    user: t.Optional(t.String()),
    onlyLive: t.Optional(t.String()),
});
export const response = t.Record(t.String({ title: "Merkl" }), t.Object({
    merkleRoot: t.Optional(t.String()),
    message: t.Optional(t.String()),
    validRewardTokens: t.Optional(t.Array(t.Object({
        decimals: t.Number(),
        minimumAmountPerEpoch: t.Number(),
        symbol: t.String(),
        token: t.String(),
    }))),
    pools: t.Record(t.String(), t.Object({
        alm: t.Object({}),
        amm: t.Number(),
        ammAlgo: t.Number(),
        ammAlgoName: t.String(),
        ammName: t.String(),
        aprs: t.Object({}),
        chainId: t.Number(),
        decimalsToken0: t.Number(),
        decimalsToken1: t.Number(),
        disputeLive: t.Boolean(),
        distributionData: t.Array(t.Unknown()),
        endOfDisputePeriod: t.Number(),
        meanAPR: t.Number(),
        pool: t.String(),
        poolBalanceToken0: t.Number(),
        poolBalanceToken1: t.Number(),
        poolFee: t.Number(),
        poolTotalLiquidity: t.Number(),
        rewardsPerToken: t.Object({}),
        symbolToken0: t.String(),
        symbolToken1: t.String(),
        tick: t.Number(),
        token0: t.String(),
        token1: t.String(),
        tvl: t.Union([t.Number(), t.Null()]),
    })),
}));
export const merklRoute = async ({ query, set }) => {
    const user = query.user;
    let AMMs;
    let rawAMMs = query.AMMs;
    if (!rawAMMs) {
        rawAMMs = query["AMMs[]"];
    }
    if (!rawAMMs) {
        rawAMMs = query["AMMs[0]"];
    }
    if (!rawAMMs) {
        AMMs = undefined;
    }
    else if (typeof rawAMMs === "string") {
        if (rawAMMs.includes(",")) {
            AMMs = rawAMMs.split(",");
        }
        else {
            AMMs = [rawAMMs];
        }
    }
    if (!!AMMs) {
        AMMs = AMMs.map(amm => {
            return amm.toLowerCase();
        });
        for (const filterAMM of AMMs) {
            if (Object.keys(AMM)
                .filter(amm => Number.isNaN(Number(amm)))
                .map(amm => {
                return amm.toLowerCase();
            })
                .indexOf(filterAMM.toLowerCase()) === -1) {
                throw new InvalidParameter(`API for Merkl products by Angle Labs does not support this type of AMM: ${filterAMM}`);
            }
        }
    }
    let rawChainIds = query.chainIds;
    if (!rawChainIds) {
        rawChainIds = query["chainIds[]"];
    }
    if (!rawChainIds) {
        rawChainIds = query["chainIds[0]"];
    }
    let chainIds;
    if (!rawChainIds) {
        chainIds = Object.keys(ChainId)
            .map(k => Number.parseInt(k))
            .filter(k => isSupportedChain(k, "merkl"));
    }
    else if (typeof rawChainIds === "number") {
        chainIds = [rawChainIds];
    }
    else if (typeof rawChainIds === "string") {
        chainIds = [Number.parseInt(rawChainIds)];
    }
    else {
        chainIds = rawChainIds;
    }
    for (const chainId of chainIds)
        throwOnUnsupportedChainId(chainId);
    let onlyLive = false;
    if (query.onlyLive === "true") {
        onlyLive = true;
    }
    return getClamsInfo(chainIds, AMMs, user, onlyLive);
};
export default (app) => app.use(checkQueryAddressValidity()).get("/merkl", merklRoute, {
    // query,
    tags: ["Merkl"],
});
