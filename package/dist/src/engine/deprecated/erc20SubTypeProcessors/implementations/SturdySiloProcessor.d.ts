import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import { type Campaign, type CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawSturdySilo;
    call: string;
    target: keyof callKeysSturdySilo;
    metaData?: keyof callKeysSturdySilo;
};
type callKeysSturdySilo = mandatoryCallKeys & {
    underlying: string;
    sharePrice: string;
    collateralContract: string;
    collateral: string;
    symbolUnderlyingToken: string;
    decimalsUnderlyingToken: string;
    symbolCollateral: string;
};
type dataRawSturdySilo = callKeysSturdySilo & {};
type dataTypeSturdySilo = dataType & {
    underlying: string;
    sharePrice: number;
    collateral: string;
    collateralContract: string;
    symbolUnderlyingToken: string;
    decimalsUnderlyingToken: string;
    symbolCollateral: string;
};
export declare class SturdySiloProcessor extends GenericProcessor<callKeysSturdySilo, dataRawSturdySilo, dataTypeSturdySilo> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound5(_index: number, type: Erc20SubType, typeInfo: dataRawSturdySilo, _calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<dataTypeSturdySilo>;
}
export {};
