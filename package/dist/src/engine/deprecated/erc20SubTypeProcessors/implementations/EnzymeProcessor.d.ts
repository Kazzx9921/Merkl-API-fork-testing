import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import { type Campaign, type CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawEnzyme;
    call: string;
    target: keyof callKeysEnzyme;
    metaData?: keyof callKeysEnzyme;
};
type callKeysEnzyme = mandatoryCallKeys & {
    factory: string;
    underlying: string;
    exchangeRate: string;
    symbolUnderlyingToken: string;
    fundValueCalculator: string;
    dispatcher: string;
};
type dataRawEnzyme = callKeysEnzyme & {
    exchangeRateRaw: Array<string>;
};
type dataTypeEnzyme = dataType & {
    factory: string;
    underlying: string;
    exchangeRate: number;
    symbolUnderlyingToken: string;
    fundValueCalculator: string;
};
export declare class EnzymeProcessor extends GenericProcessor<callKeysEnzyme, dataRawEnzyme, dataTypeEnzyme> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound5(_index: number, type: Erc20SubType, typeInfo: dataRawEnzyme, _calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<dataTypeEnzyme>;
    processingRound2(typeInfo: dataRawEnzyme): void;
    computeRound3(index: number, type: Erc20SubType, typeInfo: dataRawEnzyme, calls: string[]): import("../tokenTypeStruct").tokenTypeStruct;
}
export {};
