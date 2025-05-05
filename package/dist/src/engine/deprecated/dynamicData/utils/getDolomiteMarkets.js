import { Redis } from "@/cache";
import { batchMulticallCallWithRetry } from "@/utils/generic";
import { providers } from "@/utils/providers";
import { DOLOMITE_MARGIN_MAPPING, DolomiteInterface, DolomiteMargin__factory, ERC20Interface, } from "@sdk";
export const getDomiteMarkets = async (chainId) => {
    if (!DOLOMITE_MARGIN_MAPPING[chainId]) {
        throw "Dolomite is not supported on this chain";
    }
    const dolomiteMarginContract = await DolomiteMargin__factory.connect(DOLOMITE_MARGIN_MAPPING[chainId], providers[chainId]);
    const numMarkets = (await dolomiteMarginContract.getNumMarkets()).toNumber();
    const calls = [];
    for (let index = 0; index < numMarkets; index++) {
        calls.push({
            allowFailure: true,
            callData: DolomiteInterface.encodeFunctionData("getMarket", [index]),
            target: DOLOMITE_MARGIN_MAPPING[chainId],
        });
    }
    const res = await batchMulticallCallWithRetry(chainId, {
        calls,
    });
    if (!res.every(r => r.success)) {
        throw "Failed to fetch market data for Dolomite";
    }
    const markets = [];
    const secondCalls = [];
    for (let index = 0; index < numMarkets; index++) {
        const token = DolomiteInterface.decodeFunctionResult("getMarket", res[index].returnData)[0].token;
        secondCalls.push({
            allowFailure: true,
            callData: ERC20Interface.encodeFunctionData("symbol"),
            target: token,
        });
    }
    const secondRes = await batchMulticallCallWithRetry(chainId, {
        calls: secondCalls,
    });
    for (let index = 0; index < numMarkets; index++) {
        const token = DolomiteInterface.decodeFunctionResult("getMarket", res[index].returnData)[0].token;
        let symbol = "";
        try {
            symbol = ERC20Interface.decodeFunctionResult("symbol", secondRes[index].returnData)[0];
        }
        catch { }
        markets.push({
            index,
            token,
            symbol,
        });
    }
    return markets;
};
export const getDolomiteMarketWithCache = async (chainId) => await Redis.getOrSet("DolomiteMarkets", getDomiteMarkets, chainId);
