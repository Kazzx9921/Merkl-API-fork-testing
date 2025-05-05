import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import { type Campaign, type CampaignParameters, type UniswapV4PoolKey } from "@sdk";
import type { PoolStateStructOutput } from "libs/sdk/src/generated/BunniV2Hub";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawBunniV2;
    call: string;
    target: keyof callKeysBunniV2;
    metaData?: keyof callKeysBunniV2;
};
type callKeysBunniV2 = mandatoryCallKeys & {
    decimalsToken0: string;
    decimalsToken1: string;
    hub: string;
    poolId: string;
    poolKey: string;
    poolState: string;
    symbolToken0: string;
    symbolToken1: string;
    token0: string;
    token1: string;
    totalSupply: string;
};
type dataRawBunniV2 = callKeysBunniV2 & {
    poolId: string;
    poolKey: UniswapV4PoolKey;
    poolState: PoolStateStructOutput;
};
type dataTypeBunniV2 = dataType & {
    poolId: string;
    balance0: string;
    balance1: string;
};
export declare class BunniV2Processor extends GenericProcessor<callKeysBunniV2, dataRawBunniV2, dataTypeBunniV2> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound2(typeInfo: dataRawBunniV2): void;
    processingRound5(_index: number, type: Erc20SubType, typeInfo: dataRawBunniV2, _calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<dataTypeBunniV2>;
}
export {};
