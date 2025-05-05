import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import type { Campaign, CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawEqualizerGauge;
    call: string;
    target: keyof callKeysEqualizerGauge;
    metaData?: any;
};
type callKeysEqualizerGauge = mandatoryCallKeys & {
    tokenPrice: string;
    name: string;
};
type dataRawEqualizerGauge = callKeysEqualizerGauge & {};
type dataTypeEqualizerGauge = dataType & {
    tokenPrice: string;
};
export declare class EqualizerGaugeProcessor extends GenericProcessor<callKeysEqualizerGauge, dataRawEqualizerGauge, dataTypeEqualizerGauge> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound5(_index: number, type: Erc20SubType, typeInfo: dataRawEqualizerGauge, _calls: string[], campaign: CampaignParameters<Campaign.ERC20>, _pricer: Pricer): Promise<dataTypeEqualizerGauge>;
}
export {};
