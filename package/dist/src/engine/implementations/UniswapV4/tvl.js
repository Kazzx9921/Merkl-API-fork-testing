import { BucketService } from "@/modules/v4/bucket/bucket.service";
import { TokenService } from "@/modules/v4/token/token.service";
import { log } from "@/utils/logger";
import { engineDbClient } from "@db";
import { TvlType } from "@db/api";
import { BN2Number, ChainInteractionService, NETWORK_LABELS, } from "@sdk";
/**
 * Compute TVL
 * @dev important: using the most recent state save with current prices
 *      it's only an estimate
 */
async function computeUniV4PoolTVLFromMostRecentStateSave(computeChainId, poolID) {
    let stateSave;
    let blockNumber;
    let states = {};
    // TEMPORARY: handle Gamma TVL
    const nodesTVL = {};
    try {
        const currentBlock = await ChainInteractionService(computeChainId).getBlockNumber();
        const mostRecentStateSave = await engineDbClient.stateSave.findFirst({
            where: {
                id: `UniswapV4_${computeChainId}_${poolID}`,
                blockNumber: {
                    lte: currentBlock,
                },
            },
            orderBy: {
                blockNumber: "desc",
            },
        });
        stateSave = mostRecentStateSave.state;
        blockNumber = mostRecentStateSave?.blockNumber;
        states = stateSave.states;
    }
    catch {
        log.warn(`merklDynamic data - failed to read a recent state of pool ${poolID} on ${NETWORK_LABELS[computeChainId]}`);
        return { amount0: 0n, amount1: 0n, blockNumber: blockNumber ?? 0, nodesTVL };
    }
    const { fileName } = states;
    // Get nodes
    const nodes = await engineDbClient.nodes.findMany({
        where: { chainId: computeChainId, nodeType: "GammaUniV4" },
        select: { nodeType: true, recipient: true },
    });
    // Bucket service
    let amount0 = 0n;
    let amount1 = 0n;
    try {
        const bucket = new BucketService("merkl-production-states", "merkl-production");
        const storedStates = JSON.parse(await bucket.pull(fileName));
        for (const [_, { value, params: _params }] of Object.entries(storedStates)) {
            amount0 += BigInt(value.amount0);
            amount1 += BigInt(value.amount1);
            // TEMPORARY: handle Gamma TVL
            if (nodes.map(node => node.recipient).includes(_params.recipient)) {
                const node = nodes.find(node => node.recipient === _params.recipient);
                if (!node) {
                    log.warn(`merklDynamic data - failed to find node ${_params.recipient} for pool ${poolID}`);
                    continue;
                }
                if (!nodesTVL[node.nodeType]) {
                    nodesTVL[node.nodeType] = { amount0: 0n, amount1: 0n };
                }
                nodesTVL[node.nodeType].amount0 += BigInt(value.amount0);
                nodesTVL[node.nodeType].amount1 += BigInt(value.amount1);
            }
        }
    }
    catch {
        log.warn(`merklDynamic data - failed to decode state of pool ${poolID} on ${NETWORK_LABELS[computeChainId]}`);
    }
    return { amount0, amount1, blockNumber: blockNumber, nodesTVL };
}
export class UniswapV4TVLBuilder {
    async build(computeChainId, campaigns) {
        const tvls = [];
        for (const campaign of campaigns) {
            const { amount0: poolBalanceToken0, amount1: poolBalanceToken1, nodesTVL, } = await computeUniV4PoolTVLFromMostRecentStateSave(computeChainId, campaign.campaignParameters.poolId);
            const token0Id = TokenService.hashId({
                chainId: computeChainId,
                address: campaign.campaignParameters.currency0,
            });
            const token1Id = TokenService.hashId({
                chainId: computeChainId,
                address: campaign.campaignParameters.currency1,
            });
            if (Object.keys(nodesTVL).length > 0) {
                for (const node of Object.values(nodesTVL)) {
                    node.tvl =
                        (await TokenService.getValueByTokenId(token0Id, node.amount0)) +
                            (await TokenService.getValueByTokenId(token1Id, node.amount1));
                }
            }
            tvls.push({
                campaign,
                tvl: (await TokenService.getValueByTokenId(token0Id, poolBalanceToken0)) +
                    (await TokenService.getValueByTokenId(token1Id, poolBalanceToken1)),
                tvlBreakdown: [
                    {
                        identifier: token0Id,
                        type: TvlType.TOKEN,
                        value: BN2Number(poolBalanceToken0, campaign.campaignParameters.decimalsCurrency0),
                    },
                    {
                        identifier: token1Id,
                        type: TvlType.TOKEN,
                        value: BN2Number(poolBalanceToken1, campaign.campaignParameters.decimalsCurrency1),
                    },
                    // TEMPORARY: handle Gamma TVL
                    ...(nodesTVL
                        ? Object.entries(nodesTVL).map(([nodeType, { tvl }]) => ({
                            identifier: nodeType,
                            type: TvlType.PROTOCOL,
                            value: tvl ?? 0,
                        }))
                        : []),
                ],
            });
        }
        return tvls;
    }
}
