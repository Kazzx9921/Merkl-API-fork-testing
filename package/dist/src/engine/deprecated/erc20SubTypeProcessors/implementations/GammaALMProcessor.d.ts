import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import { type Campaign, type CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawGamma;
    call: string;
    target: keyof callKeysGamma;
    metaData?: any;
};
type callKeysGamma = mandatoryCallKeys & {
    tokenPrice: string;
    name: string;
};
type dataRawGamma = callKeysGamma & {
    underlyingProtocol: string;
};
type dataTypeGamma = dataType & {
    tokenPrice: string;
};
export declare class GammaALMProcessor extends GenericProcessor<callKeysGamma, dataRawGamma, dataTypeGamma> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound5(_index: number, type: Erc20SubType, typeInfo: dataRawGamma, _calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, _pricer: Pricer): Promise<dataTypeGamma>;
}
export {};
