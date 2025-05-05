import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import { type Campaign, type CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawHanjiN;
    call: string;
    target: keyof callKeysHanjiN;
    metaData?: keyof callKeysHanjiN | string;
    optional?: boolean;
};
type callKeysHanjiN = mandatoryCallKeys & {
    owner: string;
    [key: `token${number}`]: string;
    [key: `symbolToken${number}`]: string;
    [key: `decimalsToken${number}`]: string;
    [key: `balanceToken${number}`]: string;
    [key: `${number}`]: string;
    name: string;
    helper: string;
    tvl: string;
};
type dataRawHanjiN = callKeysHanjiN & {
    numberTokens: number;
};
type dataTypeHanjiN = dataType & {
    numberTokens: number;
    tvl: number;
};
export declare class HanjiVaultProcessor extends GenericProcessor<callKeysHanjiN, dataRawHanjiN, dataTypeHanjiN> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound2(typeInfo: dataRawHanjiN): void;
    processingRound3(typeInfo: dataRawHanjiN): void;
    computeRound3(index: number, type: Erc20SubType, typeInfo: dataRawHanjiN, calls: string[]): import("../tokenTypeStruct").tokenTypeStruct;
    computeRound4(index: number, type: Erc20SubType, typeInfo: dataRawHanjiN, calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>): import("../tokenTypeStruct").tokenTypeStruct;
    processingRound5(_index: number, type: Erc20SubType, typeInfo: dataRawHanjiN, _calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<dataTypeHanjiN>;
}
export {};
