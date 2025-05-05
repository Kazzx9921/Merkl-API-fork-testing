import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import type { Campaign, CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callKeysSplice = mandatoryCallKeys & {
    priceTargetToken: string;
};
type dataRawSplice = callKeysSplice & {};
type dataTypeSplice = dataType & {
    priceTargetToken: number;
};
export declare class SpliceProcessor extends GenericProcessor<callKeysSplice, dataRawSplice, dataTypeSplice> {
    processingRound5(_index: number, _type: Erc20SubType, typeInfo: dataRawSplice, _calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, _pricer: Pricer): Promise<dataTypeSplice>;
    computeRound3(index: number, type: Erc20SubType, typeInfo: dataRawSplice, calls: string[]): import("../tokenTypeStruct").tokenTypeStruct;
}
export {};
