import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import { type Campaign, type CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawStability;
    call: string;
    target: keyof callKeysStability;
    metaData?: keyof callKeysStability;
};
export type callKeysStability = mandatoryCallKeys & {
    price: string;
    name: string;
};
type dataRawStability = callKeysStability & {};
type dataTypeStability = dataType & {
    price: string;
    name: string;
};
export declare class StabilityProcessor extends GenericProcessor<callKeysStability, dataRawStability, dataTypeStability> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound5(_index: number, type: Erc20SubType, typeInfo: dataRawStability, _calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<dataTypeStability>;
}
export {};
