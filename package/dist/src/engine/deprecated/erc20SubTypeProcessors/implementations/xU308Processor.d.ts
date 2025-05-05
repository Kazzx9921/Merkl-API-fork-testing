import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import type { Campaign, CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawxU308;
    call: string;
    target: keyof callKeysxU308;
    metaData?: keyof callKeysxU308;
};
type callKeysxU308 = mandatoryCallKeys & {
    pool: string;
    sqrtPriceX96: string;
    _token0: string;
    _token1: string;
    symbolToken0: string;
    symbolToken1: string;
    decimalsToken0: string;
    decimalsToken1: string;
    balanceToken0: string;
    balanceToken1: string;
    totalAssets: string;
};
type dataRawxU308 = callKeysxU308 & {};
type dataTypexU308 = dataType & {
    pool: string;
};
export declare class xU308Processor extends GenericProcessor<callKeysxU308, dataRawxU308, dataTypexU308> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound2(typeInfo: dataRawxU308): void;
    processingRound5(_index: number, type: Erc20SubType, typeInfo: dataRawxU308, _calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, _pricer: Pricer): Promise<dataTypexU308>;
}
export {};
