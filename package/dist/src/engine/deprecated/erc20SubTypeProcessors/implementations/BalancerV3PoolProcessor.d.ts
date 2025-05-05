import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import { type Campaign, type CampaignParameters } from "@sdk";
import type { BigNumber } from "ethers";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawBalancerV3;
    call: string;
    target: keyof callKeysBalancerV3;
    metaData?: keyof callKeysBalancerV3 | string;
    optional?: boolean;
};
type callKeysBalancerV3 = mandatoryCallKeys & {
    [key: `token${number}`]: string;
    [key: `symbolToken${number}`]: string;
    [key: `decimalsToken${number}`]: string;
    [key: `${number}`]: string;
    name: string;
};
type dataRawBalancerV3 = callKeysBalancerV3 & {
    numberTokens: number;
    [key: `balanceToken${number}`]: BigNumber;
    tokenInfo: {
        tokens: string[];
        tokenInfo: string[][];
        balancesRaw: BigNumber[];
        lastBalancesLiveScaled18: BigNumber[];
    };
};
type dataTypeBalancerV3 = dataType & {
    numberTokens: number;
};
export declare class BalancerV3PoolProcessor extends GenericProcessor<callKeysBalancerV3, dataRawBalancerV3, dataTypeBalancerV3> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound2(typeInfo: dataRawBalancerV3): void;
    computeRound3(index: number, type: Erc20SubType, typeInfo: dataRawBalancerV3, calls: string[]): import("../tokenTypeStruct").tokenTypeStruct;
    processingRound5(_index: number, type: Erc20SubType, typeInfo: dataRawBalancerV3, _calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<dataTypeBalancerV3>;
}
export {};
