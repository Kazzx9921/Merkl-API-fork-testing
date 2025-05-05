import { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import { type Campaign, type CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawTempest;
    call: string;
    target: keyof callKeysTempest;
    metaData?: keyof callKeysTempest;
};
type callKeysTempest = mandatoryCallKeys & {
    addressToken0: string;
    addressToken1: string;
    addressesReturnData: string;
};
type dataRawTempest = callKeysTempest & {
    addressToken0: string;
    addressToken1: string;
    addressesReturnData: {
        [key: string]: string | number;
    };
    amount0Idle: string;
    amount0Invested: string;
    amount1Idle: string;
    amount1Invested: string;
    amountInQueue?: string;
    decimalsToken0: string;
    decimalsToken1: string;
    positionsReturnData: {
        [key: string]: string | number;
    };
    symbolToken0: string;
    symbolToken1: string;
};
type dataTypeTempest = dataType & {
    addressToken0: string;
    addressToken1: string;
    symbolToken0: string;
    symbolToken1: string;
};
export declare class TempestVaultProcessor extends GenericProcessor<callKeysTempest, dataRawTempest, dataTypeTempest> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound2(typeInfo: dataRawTempest): void;
    computeRound3(index: number, type: Erc20SubType, typeInfo: dataRawTempest, calls: string[]): import("../tokenTypeStruct").tokenTypeStruct;
    processingRound5(_index: number, type: Erc20SubType, typeInfo: dataRawTempest, _calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<dataTypeTempest>;
}
export {};
