import { log } from "@/utils/logger";
import { ANGLE_NETWORKS } from "@sdk";
import { withTimeout } from "@sdk";
import { t } from "elysia";
import checkQueryChainIdValidity from "../../hooks/checkQueryChainIdValidity";
import { merklChainDataWithCache } from "../../libs/merklChainData";
export const query = t.Object({
    chainId: t.Optional(t.Numeric()),
});
export const response = t.Object({
    disputes: t.Record(t.String({ title: "ChainId" }), t.Object({
        disputeLive: t.Boolean(),
        endOfDisputePeriod: t.Number(),
        root: t.String(),
        treeRoot: t.String(),
        lastTreeRoot: t.String(),
    })),
    rewardTokens: t.Record(t.String({ title: "ChainId" }), t.Array(t.Union([
        t.Object({
            decimals: t.Number(),
            minimumAmountPerEpoch: t.Number(),
            symbol: t.String(),
            token: t.String(),
        }),
        t.Object({
            decimals: t.Number(),
            minimumAmountPerEpoch: t.Number(),
            isTokenWrapper: t.String(),
            token: t.String(),
        }),
    ]))),
});
export default (app) => app.use(checkQueryChainIdValidity()).get("/overview", async ({ query }) => {
    const chainId = query.chainId;
    const result = {
        disputes: {},
        rewardTokens: {},
    };
    const promises = [];
    const chainsToInspect = chainId ? [chainId] : ANGLE_NETWORKS.merkl;
    for (const chain of chainsToInspect) {
        promises.push(withTimeout(merklChainDataWithCache(chain), 5000));
    }
    const merklChainDataPromises = await Promise.allSettled(promises);
    for (let i = 0; i < merklChainDataPromises.length; i++) {
        const merklChainDataPromise = merklChainDataPromises[i];
        if (merklChainDataPromise.status === "rejected") {
            continue;
        }
        const merklChainData = merklChainDataPromise.value;
        if (!!merklChainData && !!merklChainData?.validRewardTokens) {
            result.disputes[chainsToInspect[i]] = {
                disputeLive: merklChainData.disputeLive,
                endOfDisputePeriod: merklChainData.endOfDisputePeriod ?? 0,
                root: merklChainData.merkleRoot,
                treeRoot: merklChainData.treeRoot,
                lastTreeRoot: merklChainData.lastTreeRoot,
            };
            result.rewardTokens[chainsToInspect[i]] = merklChainData.validRewardTokens;
        }
        else {
            log.local(`Failed to get validRewardTokens for chain ${chainsToInspect[i]}`);
        }
    }
    return result;
}, {
    transform({ query }) {
        query.chainId = !query.chainId ? undefined : query.chainId;
    },
    query,
    tags: ["Merkl"],
});
