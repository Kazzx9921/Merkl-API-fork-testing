import { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import { type Campaign, type CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawStakedCurve;
    call: string;
    target: keyof callKeysStakedCurve;
    metaData?: keyof callKeysStakedCurve;
    optional?: boolean;
};
type callKeysStakedCurve = mandatoryCallKeys & {
    lp_price: string;
    token0: string;
    token1: string;
    token2: string;
    symbolToken0: string;
    symbolToken1: string;
    symbolToken2: string;
    underlying: string;
    amount: string;
};
type dataRawStakedCurve = callKeysStakedCurve & {
    poolTokens: {
        [key: string]: string;
    };
    toAssets: string;
    symbolUnderlyingToken: string;
};
type dataTypeStakedCurve = dataType & {
    lp_price: number;
    token0: string;
    token1: string;
    token2: string;
    symbolToken0: string;
    symbolToken1: string;
    underlying: string;
    symbolToken2: string;
    symbolUnderlyingToken: string;
    poolTokens: {
        [key: string]: string;
    };
};
export declare class StakedCurveProcessor extends GenericProcessor<callKeysStakedCurve, dataRawStakedCurve, dataTypeStakedCurve> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound3(typeInfo: dataRawStakedCurve): void;
    processingRound5(_index: number, type: Erc20SubType, typeInfo: dataRawStakedCurve, _calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<dataTypeStakedCurve>;
}
export {};
