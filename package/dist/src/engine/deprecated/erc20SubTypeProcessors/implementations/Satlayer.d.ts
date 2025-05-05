import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import type { Campaign, CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawSatlayer;
    call: string;
    target: keyof callKeysSatlayer;
    metaData?: keyof callKeysSatlayer;
};
export type callKeysSatlayer = mandatoryCallKeys & {
    owner: string;
    symbol: string;
    symbolUnderlyingToken: string;
    underlying: string;
};
type dataRawSatlayer = callKeysSatlayer & {};
type dataTypeSatlayer = dataType & {
    owner: string;
    symbol: string;
    underlying: string;
    symbolUnderlyingToken: string;
    priceTargetToken: number;
};
export declare class SatlayerProcessor extends GenericProcessor<callKeysSatlayer, dataRawSatlayer, dataTypeSatlayer> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound5(_index: number, type: Erc20SubType, typeInfo: dataRawSatlayer, _calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<dataTypeSatlayer>;
}
export {};
