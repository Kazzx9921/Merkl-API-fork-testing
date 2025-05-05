import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import type { Campaign, CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawVicuna;
    call: string;
    target: keyof callKeysVicuna;
    metaData?: any;
};
type callKeysVicuna = mandatoryCallKeys & {
    tokenPrice: string;
    name: string;
};
type dataRawVicuna = callKeysVicuna & {};
type dataTypeVicuna = dataType & {
    tokenPrice: string;
};
export declare class VicunaProcessor extends GenericProcessor<callKeysVicuna, dataRawVicuna, dataTypeVicuna> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound5(_index: number, type: Erc20SubType, typeInfo: dataRawVicuna, _calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, _pricer: Pricer): Promise<dataTypeVicuna>;
}
export {};
