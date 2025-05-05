import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import { type Campaign, type CampaignParameters } from "@sdk";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawzkSwapThreePool;
    call: string;
    target: keyof callKeysZkswapThreePool;
    metaData?: keyof callKeysZkswapThreePool;
};
type callKeysZkswapThreePool = mandatoryCallKeys & {
    balances: string;
    coins: string;
    minter: string;
    pool: string;
    token0Address: string;
    token0Index: string;
    token1Address: string;
    token1Index: string;
    token2Address: string;
    token2Index: string;
};
type dataRawzkSwapThreePool = callKeysZkswapThreePool & {
    balance0: string;
    balance1: string;
    balance2: string;
    symbolToken0: string;
    symbolToken1: string;
    symbolToken2: string;
    decimalsToken0: string;
    decimalsToken1: string;
    decimalsToken2: string;
};
type dataTypeZkSwapThreePool = dataType & {
    pool: string;
    symbolToken0: string;
    symbolToken1: string;
    symbolToken2: string;
    token0Address: string;
    token1Address: string;
    token2Address: string;
};
export declare class ZkSwapThreePoolProcessor extends GenericProcessor<callKeysZkswapThreePool, dataRawzkSwapThreePool, dataTypeZkSwapThreePool> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound2(typeInfo: dataRawzkSwapThreePool): void;
    processingRound5(_index: number, type: Erc20SubType, typeInfo: dataRawzkSwapThreePool, _calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<dataTypeZkSwapThreePool>;
}
export {};
