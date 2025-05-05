import { log } from "@/utils/logger";
import { OpportunityAction } from "@db/api";
import { ChainInteractionService, NETWORK_LABELS, RadiantInterface, } from "@sdk";
import { getAddress } from "viem";
export class RadiantMetadata {
    async build(campaign) {
        let { params, computeChainId, subType } = campaign;
        if (!subType)
            subType = 0;
        const tokens = [{ chainId: computeChainId, address: params.targetToken }];
        try {
            const result = await ChainInteractionService(computeChainId).fetchState([
                {
                    target: params.targetToken,
                    allowFailure: true,
                    callData: RadiantInterface.encodeFunctionData("UNDERLYING_ASSET_ADDRESS"),
                },
            ]);
            const underlyingAddress = getAddress(RadiantInterface.decodeFunctionResult("UNDERLYING_ASSET_ADDRESS", result[0].returnData)[0]);
            tokens.push({ chainId: computeChainId, address: underlyingAddress });
        }
        catch {
            log.warn(`failed to fetch underlying asset address on ${NETWORK_LABELS[computeChainId]} for radiant token ${params.targetToken}`);
        }
        return {
            action: subType <= 1 ? OpportunityAction.LEND : OpportunityAction.BORROW,
            name: [subType <= 1 ? "Lend" : "Borrow", params.symbolTargetToken].join(" "),
            tokens,
            mainProtocol: "radiant",
            explorerAddress: getAddress(params.targetToken),
        };
    }
}
