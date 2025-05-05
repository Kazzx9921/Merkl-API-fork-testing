import { OpportunityAction } from "@db/api";
import { NETWORK_LABELS, almName, } from "@sdk";
import { getAddress } from "viem";
export class AmbientMetadata {
    async build(campaign) {
        const { params, computeChainId } = campaign;
        const platform = "Ambient";
        let whitelistNameString = "";
        if (params.whitelist.length > 0) {
            for (const whitelist of params.whitelist) {
                if (whitelistNameString.length > 0) {
                    whitelistNameString += "or";
                }
                const forwarder = params.forwarders.find(x => getAddress(x.sender) === getAddress(whitelist));
                const forwarderType = forwarder?.type;
                const forwarderName = !!forwarderType ? almName(forwarderType) : null;
                if (!!forwarderName) {
                    whitelistNameString += ` ${forwarderName} `;
                }
            }
        }
        return {
            name: `Provide liquidity to ${whitelistNameString} ${platform} ${params.baseToken}-${params.quoteToken}`,
            action: OpportunityAction.POOL,
            tokens: [
                { chainId: computeChainId, address: params.baseToken },
                { chainId: computeChainId, address: params.quoteToken },
            ],
            mainProtocol: "ambient",
            depositUrl: AmbientMetadata.generateUrl(computeChainId, params),
        };
    }
    static generateUrl(computeChainId, params) {
        return `https://ambient.finance/trade/market/chain=0x${NETWORK_LABELS[computeChainId].toString()}&tokenA=${params.baseToken}&tokenB=${params.quoteToken}`;
    }
}
