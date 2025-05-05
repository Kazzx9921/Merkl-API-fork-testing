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
    decimalsToken: string;
    underlying: string;
    pricePerShare: string;
    totalSupplyUnderlying: string;
    symbolUnderlyingToken: string;
};
type dataRawBeefy = callKeysBeefy & {};
type dataTypeBeefy = dataType & {
    underlying: string;
    pricePerShare: number;
};
export declare class WoofiProcessor extends GenericProcessor<callKeysBeefy, dataRawBeefy, dataTypeBeefy> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound5(index: number, type: Erc20SubType, typeInfo: dataRawBeefy, calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<dataTypeBeefy>;
}
export {};
