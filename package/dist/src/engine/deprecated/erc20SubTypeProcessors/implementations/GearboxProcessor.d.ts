import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import { type Campaign, type CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawGearbox;
    call: string;
    target: keyof callKeysGearbox;
    metaData?: keyof callKeysGearbox;
    optional?: boolean;
};
type callKeysGearbox = mandatoryCallKeys & {
    stakingToken: string;
    balanceStakingToken: string;
    underlyingToken: string;
    totalSupplyStakingToken: string;
    decimalsStakingToken: string;
    totalAssets: string;
    decimalsUnderlyingToken: string;
    symbolUnderlyingToken: string;
};
type dataRawGearbox = callKeysGearbox & {
    isTrade: boolean;
};
type dataTypeGearbox = dataType & {
    stakingToken: string;
    balanceStakingToken: number;
    underlyingToken: string;
    totalSupplyStakingToken: number;
    decimalsStakingToken: string;
    totalAssets: number;
    percentageOfSupplyUnderlyingPoolTokens: number;
};
export declare class GearboxProcessor extends GenericProcessor<callKeysGearbox, dataRawGearbox, dataTypeGearbox> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound2(typeInfo: dataRawGearbox): Promise<void>;
    processingRound5(_index: number, type: Erc20SubType, typeInfo: dataRawGearbox, _calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<dataTypeGearbox>;
}
export {};
