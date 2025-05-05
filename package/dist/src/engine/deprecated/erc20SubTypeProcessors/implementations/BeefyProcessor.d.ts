import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import { type Campaign, type CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawBeefy;
    call: string;
    target: keyof callKeysBeefy;
    metaData?: keyof callKeysBeefy;
};
type callKeysBeefy = mandatoryCallKeys & {
    underlying: string;
    pricePerShare: string;
    token0: string;
    token1: string;
    totalSupplyUnderlying: string;
    symbolToken0: string;
    symbolToken1: string;
    decimalsToken0: string;
    decimalsToken1: string;
    balanceToken0: string;
    balanceToken1: string;
};
type dataRawBeefy = callKeysBeefy & {};
type dataTypeBeefy = dataType & {
    underlying: string;
    pricePerShare: number;
    token0: string;
    token1: string;
    totalSupplyUnderlying: string;
    symbolToken0: string;
    symbolToken1: string;
    decimalsToken0: string;
    decimalsToken1: string;
    balanceToken0: string;
    balanceToken1: string;
    priceTargetToken: number;
};
export declare class BeefyProcessor extends GenericProcessor<callKeysBeefy, dataRawBeefy, dataTypeBeefy> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound5(_index: number, type: Erc20SubType, typeInfo: dataRawBeefy, _calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<dataTypeBeefy>;
}
export {};
