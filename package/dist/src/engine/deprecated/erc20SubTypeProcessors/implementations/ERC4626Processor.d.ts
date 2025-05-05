import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import { type Campaign, type CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawERC4626;
    call: string;
    target: keyof callKeysERC4626;
    metaData?: any;
};
type callKeysERC4626 = mandatoryCallKeys & {
    asset: string;
    decimalsAsset: string;
    name: string;
    symbolAsset: string;
    totalAssets: string;
};
type dataRawERC4626 = callKeysERC4626 & {};
type dataTypeERC4626 = dataType & {
    asset: string;
    decimalsAsset: string;
    symbolAsset: string;
    totalAssets: string;
};
export declare class ERC4626Processor extends GenericProcessor<callKeysERC4626, dataRawERC4626, dataTypeERC4626> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound5(_index: number, type: Erc20SubType, typeInfo: dataRawERC4626, _calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<dataTypeERC4626>;
}
export {};
