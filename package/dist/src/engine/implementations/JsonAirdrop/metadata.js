import { log } from "@/utils/logger";
import { OpportunityAction } from "@db/api";
export class JsonAirdropMetadata {
    async build(campaign) {
        const { params, computeChainId, creatorAddress } = campaign;
        const ACI = "0xdeadD8aB03075b7FBA81864202a2f59EE25B312b".toLowerCase();
        const aaveDAO = "0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A".toLowerCase();
        const aciPrefix = creatorAddress.toLowerCase() === ACI && "Get Merit rewards -";
        const aavePrefix = creatorAddress.toLowerCase() === aaveDAO && "Get aAMPL distribution -";
        const prefix = aavePrefix ? aavePrefix : aciPrefix ? aciPrefix : "Get airdrop in";
        let tokenAddress;
        try {
            const res = await fetch(params.jsonUrl);
            if (!res.ok)
                throw new Error(`Response status: ${res.status}`);
            tokenAddress = (await res.json()).rewardToken;
            return {
                action: OpportunityAction.DROP,
                name: `${prefix} ${params.symbolRewardToken}`,
                tokens: [
                    {
                        chainId: computeChainId,
                        address: tokenAddress, // TODO: Make sure targetToken is set
                    },
                ],
                mainProtocol: aavePrefix || aciPrefix ? "aave" : undefined,
            };
        }
        catch (err) {
            log.error("failed to fetch token address on IPFS", err);
            return {
                action: OpportunityAction.DROP,
                name: `${prefix} ${params.symbolRewardToken}`,
                tokens: [],
                mainProtocol: aavePrefix || aciPrefix ? "aave" : undefined,
                depositUrl: JsonAirdropMetadata.generateUrl(computeChainId, params),
            };
        }
    }
    static generateUrl(_computeChainId, params) {
        return params.jsonUrl;
    }
}
