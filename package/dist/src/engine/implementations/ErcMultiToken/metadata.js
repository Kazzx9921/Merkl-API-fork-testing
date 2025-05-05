import { OpportunityAction } from "@db/api";
import { ChainInteractionService, TokenInteractionService } from "@sdk";
import { utils } from "ethers";
export class ErcMultiTokenMetadata {
    async build(campaign) {
        const { params, computeChainId } = campaign;
        const { tokenId, targetToken } = params;
        // Sonic Market Case
        try {
            const BOOK_MANAGER = "0xD4aD5Ed9E1436904624b6dB8B1BE31f36317C636";
            const tokenInterface = new utils.Interface(["function getBookPairs(bytes32) view returns (uint192,uint192)"]);
            const bookManagerInterface = new utils.Interface([
                "function getBookKey(uint192) view returns (address,uint64,address,uint64,address,uint64)",
            ]);
            const callResult1 = await ChainInteractionService(computeChainId).fetchState([
                {
                    target: targetToken,
                    callData: tokenInterface.encodeFunctionData("getBookPairs", [tokenId]),
                    allowFailure: true,
                },
            ]);
            const pairAId = tokenInterface.decodeFunctionResult("getBookPairs", callResult1[0].returnData)[0];
            const pairBId = tokenInterface.decodeFunctionResult("getBookPairs", callResult1[0].returnData)[1];
            const callResult2 = await ChainInteractionService(computeChainId).fetchState([
                {
                    target: BOOK_MANAGER,
                    callData: bookManagerInterface.encodeFunctionData("getBookKey", [pairAId]),
                    allowFailure: true,
                },
                {
                    target: BOOK_MANAGER,
                    callData: bookManagerInterface.encodeFunctionData("getBookKey", [pairBId]),
                    allowFailure: true,
                },
            ]);
            const baseCurrency = bookManagerInterface.decodeFunctionResult("getBookKey", callResult2[0].returnData)[0];
            const quoteCurrency = bookManagerInterface.decodeFunctionResult("getBookKey", callResult2[1].returnData)[0];
            const baseCurrencyInfo = await TokenInteractionService(computeChainId).info(baseCurrency);
            const quoteCurrencyInfo = await TokenInteractionService(computeChainId).info(quoteCurrency);
            return {
                action: OpportunityAction.HOLD,
                name: `Participate to Sonic Market ${baseCurrencyInfo.symbol}-${quoteCurrencyInfo.symbol}`,
                tokens: [
                    { chainId: computeChainId, address: targetToken },
                    { chainId: computeChainId, address: baseCurrency },
                    { chainId: computeChainId, address: quoteCurrency },
                ],
                explorerAddress: targetToken,
                mainProtocol: "sonicmarket",
                depositUrl: `https://www.sonic.market/earn/${tokenId}?chain=${computeChainId}`,
            };
        }
        catch { }
        return {
            action: OpportunityAction.HOLD,
            name: `Hold ${params.symbolTargetToken} with token ID ${tokenId}`,
            tokens: [{ chainId: computeChainId, address: targetToken }],
            explorerAddress: targetToken,
            mainProtocol: undefined,
            depositUrl: undefined,
        };
    }
}
