import { OpportunityAction } from "@db/api";
import { getAddress } from "viem";
export class SiloMetadata {
    async build(campaign) {
        let { params, computeChainId, subType } = campaign;
        if (!subType)
            subType = 0;
        let suffix = ["Deposit", "Protected Deposit", "Debt"][subType];
        const assetSymbol = params.symbolTargetToken;
        if (params.forwarders.length === 1 && assetSymbol)
            suffix += ` (${assetSymbol} Market)`;
        return {
            action: subType <= 1 ? OpportunityAction.LEND : OpportunityAction.BORROW,
            name: [subType <= 1 ? "Lend" : "Borrow", params.symbolTargetToken, suffix].join(" "),
            tokens: [{ chainId: computeChainId, address: params.targetToken }],
            mainProtocol: "silo",
            explorerAddress: getAddress(params.targetToken),
        };
    }
}
