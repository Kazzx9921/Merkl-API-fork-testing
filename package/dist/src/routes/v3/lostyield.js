import { Redis } from "@/cache";
import { TokenService } from "@/modules/v4/token/token.service";
import { batchMulticallCallWithRetry } from "@/utils/generic";
import { getLastBlockBeforeWithCache } from "@/utils/lastBlockBefore";
import { log } from "@/utils/logger";
import { providers } from "@/utils/providers";
import { BN2Number, ChainId, DAY, ERC20Interface } from "@sdk";
import { t } from "elysia";
import { utils } from "ethers";
import moment from "moment";
import checkQueryAddressValidity from "../../hooks/checkQueryAddressValidity";
const CONSTANTS = {
    [ChainId.MAINNET]: [
        utils.getAddress("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"),
        utils.getAddress("0xdac17f958d2ee523a2206206994597c13d831ec7"),
    ],
    [ChainId.BASE]: [
        utils.getAddress("0x833589fcd6edb6e08f4c7c32d4f71b54bda02913"),
        utils.getAddress("0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2"),
    ],
    [ChainId.ARBITRUM]: [
        utils.getAddress("0xaf88d065e77c8cc2239327c5edb3a432268e5831"),
        utils.getAddress("0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"),
    ],
    [ChainId.OPTIMISM]: [
        utils.getAddress("0x0b2c639c533813f4aa9d7837caf62653d097ff85"),
        utils.getAddress("0x94b008aa00579c1307b0ef2c499ad98a8ce58e58"),
    ],
    [ChainId.POLYGON]: [
        utils.getAddress("0x3c499c542cef5e3811e1192ce70d8cc03d5c3359"),
        utils.getAddress("0xc2132d05d31c914a87c6611c10748aeb04b58e8f"),
    ],
};
const getLostYield = async (user) => {
    const result = {};
    const now = moment().unix();
    const LOOKBACK = 30 * DAY;
    const AVERAGING_PERIOD = 2 * DAY;
    const promises = Object.keys(CONSTANTS).map(chainId => (async () => {
        try {
            const tokenList = await TokenService.findManyObjectPerAddress({
                chainId: Number.parseInt(chainId),
                verified: true,
            });
            result[chainId] = {};
            for (const token of CONSTANTS[Number.parseInt(chainId)]) {
                result[chainId][token] = { total: 0, yield: 0 };
            }
            const currentBlockNumber = await providers[Number.parseInt(chainId)].getBlockNumber();
            const startBlockNumber = await getLastBlockBeforeWithCache(Math.floor((now - LOOKBACK) / AVERAGING_PERIOD) * AVERAGING_PERIOD, Number.parseInt(chainId));
            const AVERAGING_PERIOD_IN_BLOCKS = Math.floor((currentBlockNumber - startBlockNumber) / (LOOKBACK / AVERAGING_PERIOD));
            let blockNumber = startBlockNumber;
            const averagingPromises = [];
            let blocksByChain = 0;
            while (blockNumber < currentBlockNumber) {
                blocksByChain++;
                averagingPromises.push((async () => {
                    const calls = [];
                    for (const token of CONSTANTS[Number.parseInt(chainId)]) {
                        calls.push({
                            target: token,
                            callData: ERC20Interface.encodeFunctionData("balanceOf", [user]),
                            allowFailure: true,
                        });
                    }
                    // console.log(`Calling multicall with ${calls.length} calls for block ${blockNumber} on chain ${chainId}`);
                    const results = await batchMulticallCallWithRetry(Number.parseInt(chainId), { calls, blockNumber });
                    let i = 0;
                    for (const token of CONSTANTS[Number.parseInt(chainId)]) {
                        const tokenDetails = tokenList[utils.getAddress(token)];
                        const balance = ERC20Interface.decodeFunctionResult("balanceOf", results[i++].returnData)[0];
                        result[chainId][token].total += BN2Number(balance, tokenDetails.decimals);
                    }
                })());
                blockNumber += AVERAGING_PERIOD_IN_BLOCKS;
            }
            await Promise.all(averagingPromises);
            for (const token of CONSTANTS[Number.parseInt(chainId)]) {
                result[chainId][token].total = result[chainId][token].total / blocksByChain;
                result[chainId][token].yield = result[chainId][token].total * 0.04;
            }
        }
        catch (e) {
            log.error(`Failed to get yield data for ${user} on chain ${chainId}`, e);
        }
    })());
    await Promise.all(promises);
    return result;
};
export const query = t.Object({
    user: t.String(),
});
export const response = t.Record(t.String({ title: "ChainId" }), t.Record(t.String({ title: "TokenAddress" }), t.Object({ total: t.Number(), yield: t.Number() })));
export default (app) => app.use(checkQueryAddressValidity()).get("/lostyield", async ({ query }) => {
    return await Redis.getOrSet(`LostYield_${query.user}`, getLostYield, query.user);
}, {
    query: t.Object({
        user: t.String(),
    }),
    tags: ["Protocols"],
});
