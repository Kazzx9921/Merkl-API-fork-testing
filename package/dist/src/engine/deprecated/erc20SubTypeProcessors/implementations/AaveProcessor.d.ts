import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import type { Campaign, CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawAave;
    call: string;
    target: keyof callKeysAave;
    metaData?: keyof callKeysAave;
};
export type callKeysAave = mandatoryCallKeys & {
    underlying: string;
    symbolUnderlyingToken: string;
};
type dataRawAave = callKeysAave & {};
type dataTypeAave = dataType & {
    underlying: string;
    symbolUnderlyingToken: string;
    priceTargetToken: number;
};
export declare class AaveProcessor extends GenericProcessor<callKeysAave, dataRawAave, dataTypeAave> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound5(_index: number, type: Erc20SubType, typeInfo: dataRawAave, _calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<dataTypeAave>;
}
export {};
