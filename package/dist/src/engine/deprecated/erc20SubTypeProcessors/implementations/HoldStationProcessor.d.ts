import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import { type Campaign, type CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawHS;
    call: string;
    target: keyof callKeysHS;
    metaData?: keyof callKeysHS;
};
type callKeysHS = mandatoryCallKeys & {
    tvl: string;
    underlying: string;
};
type dataRawHS = callKeysHS & {
    decimalsUnderlying: string;
    symbolUnderlyingToken: string;
};
type dataTypeHS = dataType & {};
export declare class HoldStationProcessor extends GenericProcessor<callKeysHS, dataRawHS, dataTypeHS> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound5(_index: number, type: Erc20SubType, typeInfo: dataRawHS, _calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<dataTypeHS>;
}
export {};
