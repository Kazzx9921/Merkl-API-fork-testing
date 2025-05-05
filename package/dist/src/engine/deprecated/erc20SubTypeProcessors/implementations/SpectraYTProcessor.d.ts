import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import type { Campaign, CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawSpectra;
    call: string;
    target: keyof callKeysSpectra;
    metaData?: any;
};
type callKeysSpectra = mandatoryCallKeys & {
    tokenPrice: string;
    name: string;
    principalToken: string;
};
type dataRawSpectra = callKeysSpectra & {
    principalToken: string;
};
type dataTypeSpectra = dataType & {
    tokenPrice: string;
};
export declare class SpectraYTProcessor extends GenericProcessor<callKeysSpectra, dataRawSpectra, dataTypeSpectra> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound5(_index: number, type: Erc20SubType, typeInfo: dataRawSpectra, _calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, _pricer: Pricer): Promise<dataTypeSpectra>;
}
export {};
