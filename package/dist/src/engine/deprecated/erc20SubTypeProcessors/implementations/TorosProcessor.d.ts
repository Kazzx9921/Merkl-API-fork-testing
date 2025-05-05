import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import { type Campaign, type CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawToros;
    call: string;
    target: keyof callKeysToros;
    metaData?: any;
};
type callKeysToros = mandatoryCallKeys & {
    tokenPrice: string;
    name: string;
};
type dataRawToros = callKeysToros & {};
type dataTypeToros = dataType & {
    tokenPrice: string;
    priceTargetToken: number;
    symbolUnderlyingToken: string;
};
export declare class TorosProcessor extends GenericProcessor<callKeysToros, dataRawToros, dataTypeToros> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound5(_index: number, type: Erc20SubType, typeInfo: dataRawToros, _calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, _pricer: Pricer): Promise<dataTypeToros>;
}
export {};
