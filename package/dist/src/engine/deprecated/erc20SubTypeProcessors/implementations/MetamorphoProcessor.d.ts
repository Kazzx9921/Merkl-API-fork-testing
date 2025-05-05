import type { Pricer } from "@/utils/pricer";
import { type Campaign, type CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
type callType = {
    key: keyof dataRawMetamorpho;
    call: string;
    target: keyof callKeysMetamorpho;
    metaData?: keyof callKeysMetamorpho;
};
type callKeysMetamorpho = mandatoryCallKeys & {
    underlying: string;
    symbolUnderlyingToken: string;
    decimalsUnderlyingToken: string;
    totalAssets: string;
};
type dataRawMetamorpho = callKeysMetamorpho & {};
type dataTypeMetamorpho = dataType & {
    underlying: string;
    symbolUnderlyingToken: string;
    priceTargetToken: number;
};
export declare class MetamorphoProcessor extends GenericProcessor<callKeysMetamorpho, dataRawMetamorpho, dataTypeMetamorpho> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound5(_index: number, type: Erc20SubType, typeInfo: dataRawMetamorpho, _calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<dataTypeMetamorpho>;
    computeRound3(index: number, type: Erc20SubType, typeInfo: dataRawMetamorpho, calls: string[]): import("../tokenTypeStruct").tokenTypeStruct;
}
export {};
