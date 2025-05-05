import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import { type Campaign, type CampaignParameters } from "@sdk";
import { BigNumber } from "ethers";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawHourglass;
    call: string;
    target: keyof callKeysHourglass;
    metaData?: keyof callKeysHourglass;
};
export type callKeysHourglass = mandatoryCallKeys & {
    depositor: string;
    underlying: string;
    symbolUnderlyingToken: string;
    decimalsUnderlying: string;
    balanceOfUnderlying: string;
};
type dataRawHourglass = callKeysHourglass & {};
type dataTypeHourglass = dataType & {
    underlying: string;
    symbolUnderlyingToken: string;
    decimalsUnderlying: number;
    priceTargetToken: number;
    balanceOfUnderlying: BigNumber;
};
export declare class HourglassProcessor extends GenericProcessor<callKeysHourglass, dataRawHourglass, dataTypeHourglass> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound5(_index: number, type: Erc20SubType, typeInfo: dataRawHourglass, _calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<dataTypeHourglass>;
}
export {};
