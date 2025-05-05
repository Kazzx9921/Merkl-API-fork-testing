import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import { type Campaign, type CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawFluid;
    call: string;
    target: keyof callKeysFluid;
    metaData?: keyof callKeysFluid;
};
type callKeysFluid = mandatoryCallKeys & {
    underlying: string;
    exchangeRate: string;
    symbolUnderlyingToken: string;
    decimalsUnderlyingToken: string;
    amount: string;
    toAssets: string;
};
type dataRawFluid = callKeysFluid & {};
type dataTypeFluid = dataType & {
    underlying: string;
    exchangeRate: number;
    symbolUnderlyingToken: string;
    decimalsUnderlyingToken: string;
    totalSupply: number;
    amount: string;
    toAssets: string;
};
export declare class FluidProcessor extends GenericProcessor<callKeysFluid, dataRawFluid, dataTypeFluid> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound5(_index: number, type: Erc20SubType, typeInfo: dataRawFluid, _calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<dataTypeFluid>;
    processingRound3(typeInfo: dataRawFluid): void;
}
export {};
