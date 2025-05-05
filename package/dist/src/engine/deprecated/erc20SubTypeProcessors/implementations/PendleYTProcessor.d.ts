import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import type { Campaign, CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawPendleYT;
    call: string;
    target: keyof callKeysPendleYT;
    metaData?: keyof callKeysPendleYT;
};
type callKeysPendleYT = mandatoryCallKeys & {
    SYToken: string;
    underlying: string;
    symbolUnderlyingToken: string;
};
type dataRawPendleYT = callKeysPendleYT & {
    readTokensRaw: string[];
};
type dataTypePendleYT = dataType & {};
export declare class PendleYTProcessor extends GenericProcessor<callKeysPendleYT, dataRawPendleYT, dataTypePendleYT> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound5(_index: number, type: Erc20SubType, typeInfo: dataRawPendleYT, _calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<dataTypePendleYT>;
}
export {};
