import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import { type Campaign, type CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawCurveN;
    call: string;
    target: keyof callKeysCurveN;
    metaData?: keyof callKeysCurveN | string;
    optional?: boolean;
};
type callKeysCurveN = mandatoryCallKeys & {
    [key: `token${number}`]: string;
    [key: `symbolToken${number}`]: string;
    [key: `decimalsToken${number}`]: string;
    [key: `balanceToken${number}`]: string;
    [key: `${number}`]: string;
    name: string;
};
type dataRawCurveN = callKeysCurveN & {
    numberTokens: number;
};
type dataTypeCurveN = dataType & {
    numberTokens: number;
};
export declare class CurveNPoolProcessor extends GenericProcessor<callKeysCurveN, dataRawCurveN, dataTypeCurveN> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound2(typeInfo: dataRawCurveN): void;
    processingRound3(typeInfo: dataRawCurveN): void;
    computeRound3(index: number, type: Erc20SubType, typeInfo: dataRawCurveN, calls: string[]): import("../tokenTypeStruct").tokenTypeStruct;
    computeRound4(index: number, type: Erc20SubType, typeInfo: dataRawCurveN, calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>): import("../tokenTypeStruct").tokenTypeStruct;
    processingRound5(_index: number, type: Erc20SubType, typeInfo: dataRawCurveN, _calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<dataTypeCurveN>;
}
export {};
