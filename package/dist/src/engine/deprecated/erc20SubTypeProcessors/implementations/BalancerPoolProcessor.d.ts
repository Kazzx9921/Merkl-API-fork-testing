import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import { type Campaign, type CampaignParameters } from "@sdk";
import { BigNumber } from "ethers";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawBP;
    call: string;
    target: keyof callKeysBP;
    metaData?: keyof callKeysBP;
};
type callKeysBP = mandatoryCallKeys & {
    tokenAddress: string;
    poolId: string;
    vault: string;
    totalSupply: string;
    vaultBalance: string;
    blacklistedSupply: string;
};
type dataRawBP = callKeysBP & {
    poolTokensRaw: Array<string[] | BigNumber[]>;
    poolTokens: Array<{
        token: string;
        balance: string;
        amountInPool: number;
        symbol: string;
        decimals: number;
        price: number;
    }>;
};
type dataTypeBP = dataType & {
    tokenAddress: string;
    poolId: string;
    vault: string;
    poolTokens: Array<{
        token: string;
        amountInPool: number;
        symbol: string;
        decimals: number;
        price: number;
    }>;
    totalSupply: number;
    blacklistedSupply: number;
    tvl: number;
    priceTargetToken: number;
    cardName: string;
    vaultBalance: number;
};
export declare class BalancerPoolProcessor extends GenericProcessor<callKeysBP, dataRawBP, dataTypeBP> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound5(index: number, type: Erc20SubType, typeInfo: dataRawBP, calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<dataTypeBP>;
    processingRound4(typeInfo: dataRawBP): void;
    computeRound4(index: number, type: Erc20SubType, typeInfo: dataRawBP, calls: string[], campaign: CampaignParameters<Campaign.ERC20>): {
        type: Erc20SubType;
        calls: CallDto[];
        typeInfo: {
            type: Erc20SubType;
            protocol: string;
            tokenAddress: string;
            blacklistedSupply: string;
            totalSupply: string;
            whitelistedSupply: string;
            lockNFT: string;
            eip712DomainName: string;
            stakingName: string;
            stakingSymbol: string;
            isStaking: string;
            poolId: string;
            vault: string;
            vaultBalance: string;
            poolTokensRaw: Array<string[] | BigNumber[]>;
            poolTokens: Array<{
                token: string;
                balance: string;
                amountInPool: number;
                symbol: string;
                decimals: number;
                price: number;
            }>;
        };
    };
}
export {};
