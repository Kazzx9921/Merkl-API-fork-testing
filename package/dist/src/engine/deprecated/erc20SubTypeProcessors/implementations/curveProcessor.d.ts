import { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import { type Campaign, type CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawCurve;
    call: string;
    target: keyof callKeysCurve;
    metaData?: keyof callKeysCurve;
    optional?: boolean;
};
type callKeysCurve = mandatoryCallKeys & {
    lp_price: string;
    token0: string;
    token1: string;
    token2: string;
    symbolToken0: string;
    symbolToken1: string;
    symbolToken2: string;
};
type dataRawCurve = callKeysCurve & {
    poolTokens: {
        [key: string]: string;
    };
    numberTokens: number;
};
type dataTypeCurve = dataType & {
    numberTokens: number;
    lp_price: number;
    token0: string;
    token1: string;
    token2: string;
    symbolToken0: string;
    symbolToken1: string;
    symbolToken2: string;
    poolTokens: {
        [key: string]: string;
    };
};
export declare class CurveProcessor extends GenericProcessor<callKeysCurve, dataRawCurve, dataTypeCurve> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound5(_index: number, type: Erc20SubType, typeInfo: dataRawCurve, _calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<dataTypeCurve>;
}
export {};
