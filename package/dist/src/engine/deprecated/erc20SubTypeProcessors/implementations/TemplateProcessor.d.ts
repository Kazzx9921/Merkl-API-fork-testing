import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import type { Campaign, CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawTemplate;
    call: string;
    target: keyof callKeysTemplate;
    metaData?: keyof callKeysTemplate;
};
type callKeysTemplate = mandatoryCallKeys & {};
type dataRawTemplate = callKeysTemplate & {};
type dataTypeTemplate = dataType & {};
export declare class TemplateProcessor extends GenericProcessor<callKeysTemplate, dataRawTemplate, dataTypeTemplate> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound1(typeInfo: dataRawTemplate): void;
    processingRound2(typeInfo: dataRawTemplate): void;
    processingRound3(typeInfo: dataRawTemplate): void;
    processingRound4(typeInfo: dataRawTemplate): void;
    processingRound5(index: number, type: Erc20SubType, typeInfo: dataRawTemplate, calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<dataTypeTemplate>;
    computeRound1(type: Erc20SubType, typeInfo: dataRawTemplate): import("../tokenTypeStruct").tokenTypeStruct;
    computeRound2(index: number, type: Erc20SubType, typeInfo: dataRawTemplate, calls: string[]): import("../tokenTypeStruct").tokenTypeStruct;
    computeRound3(index: number, type: Erc20SubType, typeInfo: dataRawTemplate, calls: string[]): import("../tokenTypeStruct").tokenTypeStruct;
    computeRound4(index: number, type: Erc20SubType, typeInfo: dataRawTemplate, calls: string[], campaign: CampaignParameters<Campaign.ERC20>): import("../tokenTypeStruct").tokenTypeStruct;
    computeRound5(index: number, type: Erc20SubType, typeInfo: dataRawTemplate, calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<import("../tokenTypeStruct").tokenTypeStruct>;
}
export {};
