import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import { type Campaign, type CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawGamma;
    call: string;
    target: keyof callKeysGamma;
    metaData?: keyof callKeysGamma;
};
type callKeysGamma = mandatoryCallKeys & {
    token0: string;
    token1: string;
    CFMMPrice: string;
    cfmm: string;
};
type dataRawGamma = callKeysGamma & {
    tokensRaw: string[];
    tokenBalances: string[];
    symbolToken0: string;
    symbolToken1: string;
    decimalsToken0: string;
    decimalsToken1: string;
    balanceToken0: string;
    balanceToken1: string;
};
type dataTypeGamma = dataType & {};
export declare class GammaProcessor extends GenericProcessor<callKeysGamma, dataRawGamma, dataTypeGamma> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound2(typeInfo: dataRawGamma): void;
    processingRound5(_index: number, type: Erc20SubType, typeInfo: dataRawGamma, _calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<dataTypeGamma>;
    computeRound1(type: Erc20SubType, typeInfo: dataRawGamma): import("../tokenTypeStruct").tokenTypeStruct;
    computeRound2(index: number, type: Erc20SubType, typeInfo: dataRawGamma, calls: string[]): import("../tokenTypeStruct").tokenTypeStruct;
    computeRound3(index: number, type: Erc20SubType, typeInfo: dataRawGamma, calls: string[]): import("../tokenTypeStruct").tokenTypeStruct;
    computeRound4(index: number, type: Erc20SubType, typeInfo: dataRawGamma, calls: string[], campaign: CampaignParameters<Campaign.ERC20>): import("../tokenTypeStruct").tokenTypeStruct;
    computeRound5(index: number, type: Erc20SubType, typeInfo: dataRawGamma, calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<import("../tokenTypeStruct").tokenTypeStruct>;
}
export {};
