import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import { type Campaign, type CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawTemplate;
    call: string;
    target: keyof callKeysRfx;
    metaData?: keyof callKeysRfx;
};
type callKeysRfx = mandatoryCallKeys & {
    shortToken: string;
    longToken: string;
    symbolShortToken: string;
    symbolLongToken: string;
    decimalsToken: string;
    decimalsShortToken: string;
    decimalsLongToken: string;
    balanceShortToken: string;
    balanceLongToken: string;
    RFX_DATASTORE: string;
    metaDataShort: string;
    metaDataLong: string;
};
type dataRawTemplate = callKeysRfx & {};
type dataTypeRfx = dataType & {
    symbolShortToken: string;
    symbolLongToken: string;
};
export declare class RfxProcessor extends GenericProcessor<callKeysRfx, dataRawTemplate, dataTypeRfx> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound1(typeInfo: dataRawTemplate): void;
    processingRound5(index: number, type: Erc20SubType, typeInfo: dataRawTemplate, calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<dataTypeRfx>;
}
export {};
