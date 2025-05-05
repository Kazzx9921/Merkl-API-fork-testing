import { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import { TokenService } from "@/modules/v4/token/token.service";
import { processorMapping } from "./implementations/processorMapping";
export async function getTokenPricesInfo(index, type, typeInfo, calls, campaign, pricer) {
    const ProcessorClass = processorMapping[type];
    try {
        if (!ProcessorClass) {
            throw new Error(`Processor not found for key: ${type}`);
        }
        const processorObject = new ProcessorClass();
        return processorObject.computeRound5(index, type, typeInfo, calls, campaign, pricer);
    }
    catch (error) {
        console.error(error);
        return {
            type: Erc20SubType.unknown,
            calls: [],
            typeInfo: {
                totalSupply: 0,
                blacklistedSupply: 0,
                priceTargetToken: await TokenService.getPrice({
                    address: campaign.campaignParameters.targetToken,
                    chainId: campaign.computeChainId,
                }),
            },
        };
    }
}
