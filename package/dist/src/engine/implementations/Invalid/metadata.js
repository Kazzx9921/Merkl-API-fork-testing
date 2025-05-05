import { OpportunityAction } from "@db/api";
export class InvalidMetadata {
    async build() {
        return {
            name: "Invalid Campaigns",
            action: OpportunityAction.INVALID,
            tokens: [],
        };
    }
}
