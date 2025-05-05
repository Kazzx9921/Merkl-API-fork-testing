import { TokenService } from "@/modules/v4/token/token.service";
import { OpportunityAction } from "@db/api";
export class BadgerMetadata {
    async build(campaign) {
        const { params, computeChainId } = campaign;
        try {
            const [token] = await TokenService.findManyOrCreate([{ chainId: computeChainId, address: params.targetToken }]);
            if (!token)
                throw new Error("Failed to fetch tokens");
            return {
                action: OpportunityAction.BORROW,
                name: `Borrow ${token.symbol}`,
                tokens: [{ chainId: computeChainId, address: token?.address }],
                mainProtocol: "badger",
                depositUrl: BadgerMetadata.generateUrl(computeChainId, params),
            };
        }
        catch {
            return {
                action: OpportunityAction.BORROW,
                name: `Borrow ${params.symbolTargetToken}`,
                tokens: [{ chainId: computeChainId, address: params.targetToken }],
                mainProtocol: "badger",
                depositUrl: BadgerMetadata.generateUrl(computeChainId, params),
            };
        }
    }
    static generateUrl(_computeChainId, _params) {
        return "https://www.ebtc.finance/dapp/borrow";
    }
}
