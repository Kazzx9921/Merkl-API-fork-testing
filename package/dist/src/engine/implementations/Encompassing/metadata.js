import { protocolIdList } from "@/modules/v4/protocol/protocol.model";
import { log } from "@/utils/logger";
import { OpportunityAction } from "@db/api";
export class EncompassingMetadata {
    async build(campaign) {
        const { params, computeChainId, rewardToken } = campaign;
        try {
            const dataResponse = await fetch(params.dataUrl);
            if (!dataResponse.ok)
                throw new Error(`Response status: ${dataResponse.status}`);
            const data = await dataResponse.json();
            if (!protocolIdList.includes(data.mainProtocol)) {
                log.warn(`unknown Protocol ID: ${data.mainProtocol}`);
                data.mainProtocol = undefined;
            }
            return {
                action: OpportunityAction.DROP,
                name: data.opportunityName ?? `Distribution of ${params.symbolRewardToken}`,
                tokens: [
                    {
                        chainId: computeChainId,
                        address: rewardToken.address,
                    },
                ],
                mainProtocol: data.mainProtocol ?? undefined,
            };
        }
        catch (err) {
            log.error("failed to fetch data from dataUrl", err);
            return {
                action: OpportunityAction.DROP,
                name: `Distribution of ${params.symbolRewardToken}`,
                tokens: [
                    {
                        chainId: computeChainId,
                        address: rewardToken.address,
                    },
                ],
                mainProtocol: undefined,
            };
        }
    }
}
