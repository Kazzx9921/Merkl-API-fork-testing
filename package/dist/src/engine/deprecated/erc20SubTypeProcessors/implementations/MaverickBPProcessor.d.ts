import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import { type Campaign, type CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawMaverickBP;
    call: string;
    target: keyof callKeysMaverickBP;
    metaData?: keyof callKeysMaverickBP;
};
type callKeysMaverickBP = mandatoryCallKeys & {
    boostedPositionInformation: string;
    token0: string;
    token1: string;
    lensAddress: string;
};
type dataRawMaverickBP = callKeysMaverickBP & {
    amount0: string;
    amount1: string;
    decimalsToken0: string;
    decimalsToken1: string;
    bpInfoReturnData: {
        [key: string]: string | number;
    };
    symbolToken0: string;
    symbolToken1: string;
};
type dataTypeMaverickBP = dataType & {
    amount0: number;
    amount1: number;
    decimalsToken0: number;
    decimalsToken1: number;
    lensAddress: string;
    symbolToken0: string;
    symbolToken1: string;
    token0: string;
    token1: string;
};
export declare class MaverickBPProcessor extends GenericProcessor<callKeysMaverickBP, dataRawMaverickBP, dataTypeMaverickBP> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound1(typeInfo: dataRawMaverickBP): void;
    processingRound2(typeInfo: dataRawMaverickBP): void;
    processingRound5(_index: number, type: Erc20SubType, typeInfo: dataRawMaverickBP, _calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<dataTypeMaverickBP>;
}
export {};
