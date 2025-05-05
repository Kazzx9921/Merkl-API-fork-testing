import { VEST_TOKEN } from "@/engine/deprecated/dynamicData/implementations/Vest";
import { OpportunityAction } from "@db/api";
export class VestMetadata {
    async build(campaign) {
        const { computeChainId } = campaign;
        return {
            action: OpportunityAction.LEND,
            name: ["Vest", "supply", "treasury"].join(" "),
            tokens: [{ chainId: computeChainId, address: VEST_TOKEN }],
            mainProtocol: "vest",
        };
    }
}
