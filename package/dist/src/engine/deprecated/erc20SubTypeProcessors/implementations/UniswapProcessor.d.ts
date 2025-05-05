import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import { type Campaign, type CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawUni;
    call: string;
    target: keyof callKeysUni;
    metaData?: keyof callKeysUni;
};
type callKeysUni = mandatoryCallKeys & {
    token0: string;
    token1: string;
    symbolToken0: string;
    symbolToken1: string;
    decimalsToken0: string;
    decimalsToken1: string;
    balanceToken0: string;
    balanceToken1: string;
};
type dataRawUni = callKeysUni & {};
type dataTypeUni = dataType & {
    token0: string;
    token1: string;
    symbolToken0: string;
    symbolToken1: string;
    decimalsToken0: number;
    decimalsToken1: number;
    balanceToken0: number;
    balanceToken1: number;
    priceTargetToken: number;
};
export declare class UniswapProcessor extends GenericProcessor<callKeysUni, dataRawUni, dataTypeUni> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound2(typeInfo: dataRawUni): void;
    computeRound3(index: number, type: Erc20SubType, typeInfo: dataRawUni, calls: string[]): import("../tokenTypeStruct").tokenTypeStruct;
    processingRound5(_index: number, type: Erc20SubType, typeInfo: dataRawUni, _calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<dataTypeUni>;
}
export {};
