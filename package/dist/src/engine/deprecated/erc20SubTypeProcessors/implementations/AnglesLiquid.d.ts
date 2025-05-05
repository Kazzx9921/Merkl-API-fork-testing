import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import { type Campaign, type CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawAnglesLiquid;
    call: string;
    target: keyof callKeysAnglesLiquid;
    metaData?: keyof callKeysAnglesLiquid;
};
type callKeysAnglesLiquid = mandatoryCallKeys & {
    poolToken: string;
    totalAssets: string;
};
type dataRawAnglesLiquid = callKeysAnglesLiquid & {};
type dataTypeAnglesLiquid = dataType & {
    poolToken: string;
    totalAssets: string;
    symbolUnderlyingToken: string;
};
export declare class AnglesLiquidProcessor extends GenericProcessor<callKeysAnglesLiquid, dataRawAnglesLiquid, dataTypeAnglesLiquid> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound5(_index: number, type: Erc20SubType, typeInfo: dataRawAnglesLiquid, _calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<dataTypeAnglesLiquid>;
    computeRound1(type: Erc20SubType, typeInfo: dataRawAnglesLiquid): import("../tokenTypeStruct").tokenTypeStruct;
    computeRound2(index: number, type: Erc20SubType, typeInfo: dataRawAnglesLiquid, calls: string[]): import("../tokenTypeStruct").tokenTypeStruct;
    computeRound3(index: number, type: Erc20SubType, typeInfo: dataRawAnglesLiquid, calls: string[]): import("../tokenTypeStruct").tokenTypeStruct;
    computeRound4(index: number, type: Erc20SubType, typeInfo: dataRawAnglesLiquid, calls: string[], campaign: CampaignParameters<Campaign.ERC20>): import("../tokenTypeStruct").tokenTypeStruct;
    computeRound5(index: number, type: Erc20SubType, typeInfo: dataRawAnglesLiquid, calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<import("../tokenTypeStruct").tokenTypeStruct>;
}
export {};
