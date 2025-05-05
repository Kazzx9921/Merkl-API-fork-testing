import { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import { type Campaign, type CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawFrax;
    call: string;
    target: keyof callKeysFrax;
    metaData?: keyof callKeysFrax;
};
type callKeysFrax = mandatoryCallKeys & {
    underlying: string;
    sharePrice: string;
    symbolUnderlyingToken: string;
    decimalsUnderlyingToken: string;
};
type dataRawFrax = callKeysFrax & {};
type dataTypeFrax = dataType & {
    underlying: string;
    sharePrice: number;
    symbolUnderlyingToken: string;
    decimalsUnderlyingToken: string;
};
export declare class FraxProcessor extends GenericProcessor<callKeysFrax, dataRawFrax, dataTypeFrax> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound5(_index: number, type: Erc20SubType, typeInfo: dataRawFrax, _calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<dataTypeFrax>;
}
export {};
