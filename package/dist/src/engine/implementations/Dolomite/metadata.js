import { OpportunityAction } from "@db/api";
import { getAddress } from "viem";
export class DolomiteMetadata {
    async build(campaign) {
        const { params, computeChainId, subType } = campaign;
        const subtypes = [
            { name: "Supply (delta)", action: OpportunityAction.LEND },
            { name: "Supply", action: OpportunityAction.LEND },
            { name: "Borrow", action: OpportunityAction.BORROW },
        ];
        const subtype = subtypes[subType ?? 0];
        return {
            action: subtype.action,
            tokens: [{ chainId: computeChainId, address: params.targetToken }],
            name: `${subtype.name} ${params.symbolTargetToken}`,
            mainProtocol: "dolomite",
            explorerAddress: getAddress(params.targetToken),
        };
    }
}
