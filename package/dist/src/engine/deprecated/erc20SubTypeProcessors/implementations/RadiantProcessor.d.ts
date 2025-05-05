import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import { type Campaign, type CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawRadiant;
    call: string;
    target: keyof callKeysRadiant;
    metaData?: keyof callKeysRadiant;
};
type callKeysRadiant = mandatoryCallKeys & {
    underlyingToken: string;
    priceBN: string;
    symbolUnderlyingToken: string;
};
type dataRawRadiant = callKeysRadiant & {};
type dataTypeRadiant = dataType & {
    priceTargetToken: number;
    underlyingToken: string;
    symbolUnderlyingToken: string;
};
export declare class RadiantProcessor extends GenericProcessor<callKeysRadiant, dataRawRadiant, dataTypeRadiant> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound5(_index: number, type: Erc20SubType, typeInfo: dataRawRadiant, _calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, _pricer: Pricer): Promise<dataTypeRadiant>;
    computeRound3(index: number, type: Erc20SubType, typeInfo: dataRawRadiant, calls: string[]): import("../tokenTypeStruct").tokenTypeStruct;
}
export {};
