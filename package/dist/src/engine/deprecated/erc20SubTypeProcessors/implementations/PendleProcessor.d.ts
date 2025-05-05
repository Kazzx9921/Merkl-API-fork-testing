import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import type { Campaign, CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawPendle;
    call: string;
    target: keyof callKeysPendle;
    metaData?: keyof callKeysPendle;
};
type callKeysPendle = mandatoryCallKeys & {
    SYToken: string;
    underlying: string;
    symbolUnderlyingToken: string;
};
type dataRawPendle = callKeysPendle & {
    readTokensRaw: string[];
};
type dataTypePendle = dataType & {};
export declare class PendleProcessor extends GenericProcessor<callKeysPendle, dataRawPendle, dataTypePendle> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound5(_index: number, type: Erc20SubType, typeInfo: dataRawPendle, _calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<dataTypePendle>;
}
export {};
