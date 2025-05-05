import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import { type Campaign, type CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawCompound;
    call: string;
    target: keyof callKeysCompound;
    metaData?: keyof callKeysCompound;
};
type callKeysCompound = mandatoryCallKeys & {
    tokenAddress: string;
    totalBorrow: string;
    balanceBaseToken: string;
    symbolBaseToken: string;
    decimalsBaseToken: string;
    baseToken: string;
    totalSupply: string;
    blacklistedSupply: string;
};
type dataRawCompound = callKeysCompound & {};
type dataTypeCompound = dataType & {
    tokenAddress: string;
    totalBorrow: number;
    balanceBaseToken: number;
    symbolBaseToken: string;
    decimalsBaseToken: string;
    baseToken: string;
    totalSupply: number;
    tvl: number;
    priceTargetToken: number;
    cardName: string;
    blacklistedSupply: number;
};
export declare class CompoundProcessor extends GenericProcessor<callKeysCompound, dataRawCompound, dataTypeCompound> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound5(_index: number, type: Erc20SubType, typeInfo: dataRawCompound, _calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<dataTypeCompound>;
}
export {};
