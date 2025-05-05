import { sanitizeChainName } from "@/utils/sanitizeChain";
import { OpportunityAction } from "@db/api";
import { getAddress } from "viem";
export class UniswapV4Metadata {
    async build(campaign) {
        const { params, computeChainId } = campaign;
        const whitelistNameString = "";
        //   if (params.whitelist.length > 0) {
        //     for (const whitelist of params.whitelist) {
        //       if (whitelistNameString.length > 0) {
        //         whitelistNameString += "or";
        //       }
        //       const forwarder = params.forwarders.find(x => getAddress(x.sender) === getAddress(whitelist));
        //       const forwarderType = (forwarder as CLAMMForwarder)?.type;
        //       const forwarderName = !!forwarderType ? almName(forwarderType) : null;
        //       if (!!forwarderName) {
        //         whitelistNameString += ` ${forwarderName} `;
        //       }
        //     }
        //   }
        return {
            name: `Provide liquidity to ${whitelistNameString} UniswapV4 ${params.symbolCurrency0}-${params.symbolCurrency1}${params.lpFee ? ` ${params.lpFee / 10_000}%` : ""}`,
            action: OpportunityAction.POOL,
            tokens: [
                { chainId: computeChainId, address: params.currency0 },
                { chainId: computeChainId, address: params.currency1 },
            ],
            mainProtocol: "uniswap",
            explorerAddress: getAddress(params.poolManager),
            depositUrl: UniswapV4Metadata.generateUrl(computeChainId, params),
        };
    }
    static generateUrl(computeChainId, params) {
        return `https://app.uniswap.org/explore/pools/${sanitizeChainName(computeChainId)}/${params.poolId}`;
    }
}
