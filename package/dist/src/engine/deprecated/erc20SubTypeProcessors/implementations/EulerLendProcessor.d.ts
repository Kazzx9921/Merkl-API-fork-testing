import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import { type Campaign, type CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawEuler;
    call: string;
    target: keyof callKeysEuler;
    metaData?: keyof callKeysEuler;
};
type callKeysEuler = mandatoryCallKeys & {
    addressVault: string;
    totalAssets: string;
};
type dataRawEuler = callKeysEuler & {
    symbolUnderlyingToken: string;
};
type dataTypeEuler = dataType & {
    addressVault: string;
    asset: string;
    symbolAsset: string;
    decimalsAsset: number;
    totalSupply: number;
    totalAssets: string;
};
export declare class EulerLendProcessor extends GenericProcessor<callKeysEuler, dataRawEuler, dataTypeEuler> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound2(typeInfo: dataRawEuler, campaign: CampaignParameters<Campaign.EULER>): void;
    processingRound5(_index: number, type: Erc20SubType, typeInfo: dataRawEuler, _calls: string[], campaign: CampaignParameters<Campaign.EULER>): Promise<dataTypeEuler>;
}
export {};
