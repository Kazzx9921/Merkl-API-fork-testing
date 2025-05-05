import { OpportunityAction } from "@db/api";
export class DefaultMetadata {
    async build(campaign) {
        const { rewardToken } = campaign;
        return {
            action: OpportunityAction.HOLD,
            name: "Reward Opportunity",
            tokens: [],
            explorerAddress: rewardToken.address,
        };
    }
}
