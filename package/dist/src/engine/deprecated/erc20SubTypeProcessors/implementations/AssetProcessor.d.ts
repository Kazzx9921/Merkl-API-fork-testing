import { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import { type Campaign, type CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawAsset;
    call: string;
    target: keyof callKeysAsset;
    metaData?: keyof callKeysAsset;
    optional?: boolean;
};
type callKeysAsset = mandatoryCallKeys & {
    underlying: string;
    exchangeRate: string;
    symbolUnderlyingToken: string;
    decimalsUnderlyingToken: string;
};
type dataRawAsset = callKeysAsset & {};
type dataTypeAsset = dataType & {
    underlying: string;
    exchangeRate: number;
    symbolUnderlyingToken: string;
    decimalsUnderlyingToken: string;
};
export declare class AssetProcessor extends GenericProcessor<callKeysAsset, dataRawAsset, dataTypeAsset> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound2(typeInfo: dataRawAsset): void;
    processingRound5(index: number, type: Erc20SubType, typeInfo: dataRawAsset, calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<dataTypeAsset>;
}
export {};
