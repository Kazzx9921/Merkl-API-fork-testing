import { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import { type Campaign, type CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawNoLinkVault;
    call: string;
    target: keyof callKeysNoLinkVault;
    metaData?: keyof callKeysNoLinkVault;
};
type callKeysNoLinkVault = mandatoryCallKeys & {
    rateAccountant: string;
    base: string;
    baseSymbol: string;
};
type dataRawNoLinkVault = callKeysNoLinkVault & {
    rate: string;
};
type dataTypeNoLinkVault = dataType & {
    rate: number;
    baseSymbol: string;
};
export declare class NoLinkVaultProcessor extends GenericProcessor<callKeysNoLinkVault, dataRawNoLinkVault, dataTypeNoLinkVault> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound1(typeInfo: dataRawNoLinkVault): void;
    processingRound5(index: number, type: Erc20SubType, typeInfo: dataRawNoLinkVault, calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<dataTypeNoLinkVault>;
    computeRound1(type: Erc20SubType, typeInfo: dataRawNoLinkVault): import("../tokenTypeStruct").tokenTypeStruct;
    computeRound2(index: number, type: Erc20SubType, typeInfo: dataRawNoLinkVault, calls: string[]): import("../tokenTypeStruct").tokenTypeStruct;
    computeRound3(index: number, type: Erc20SubType, typeInfo: dataRawNoLinkVault, calls: string[]): import("../tokenTypeStruct").tokenTypeStruct;
    computeRound4(index: number, type: Erc20SubType, typeInfo: dataRawNoLinkVault, calls: string[], campaign: CampaignParameters<Campaign.ERC20>): import("../tokenTypeStruct").tokenTypeStruct;
    computeRound5(index: number, type: Erc20SubType, typeInfo: dataRawNoLinkVault, calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<import("../tokenTypeStruct").tokenTypeStruct>;
}
export {};
