import { Pricer } from "@/utils/pricer";
import { BN2Number, ChainInteractionService, ERC20Interface, } from "@sdk";
export class Erc20SnapshotDynamicData {
    async build(chainId, campaigns) {
        const pricer = await Pricer.load();
        const calls = [];
        for (const campaign of campaigns) {
            calls.push({
                allowFailure: false,
                callData: ERC20Interface.encodeFunctionData("totalSupply"),
                target: campaign.campaignParameters.targetToken,
            });
        }
        const result = await ChainInteractionService(chainId).fetchState(calls);
        let i = 0;
        const dynamicData = [];
        for (const campaign of campaigns) {
            const priceTargetToken = await pricer.get({
                address: campaign.campaignParameters.targetToken,
                chainId,
                symbol: campaign.campaignParameters.symbolTargetToken,
            });
            const totalSupplyTargetToken = BN2Number(ERC20Interface.decodeFunctionResult("totalSupply", result[i++].returnData)[0], campaign.campaignParameters.decimalsTargetToken);
            dynamicData.push({
                ...campaign,
                totalSupplyTargetToken,
                tvl: totalSupplyTargetToken * priceTargetToken,
            });
        }
        return dynamicData;
    }
}
