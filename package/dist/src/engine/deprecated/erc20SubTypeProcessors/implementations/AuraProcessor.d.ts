import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import { type Campaign, type CampaignParameters } from "@sdk";
import type { BigNumber } from "ethers";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawAura;
    call: string;
    target: keyof callKeysAura;
    metaData?: keyof callKeysAura;
};
type callKeysAura = mandatoryCallKeys & {
    balancerPool: string;
    vault: string;
    auraOperator: string;
    poolId: string;
    totalSupplyBalancerPool: string;
    gaugeContract: string;
    auraStaker: string;
    totalSupplyGauge: string;
    pid: string;
    gaugeBalance: string;
    auraBalance: string;
    vaultBalance: string;
};
type dataRawAura = callKeysAura & {
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
type dataTypeAura = dataType & {
    balancerPool: string;
    vault: string;
    auraOperator: string;
    poolId: string;
    totalSupplyBalancerPool: number;
    gaugeContract: string;
    auraStaker: string;
    totalSupplyGauge: number;
    pid: string;
    gaugeBalance: number;
    auraBalance: number;
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
export declare class AuraProcessor extends GenericProcessor<callKeysAura, dataRawAura, dataTypeAura> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound4(typeInfo: dataRawAura): void;
    processingRound5(index: number, type: Erc20SubType, typeInfo: dataRawAura, calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<dataTypeAura>;
    computeRound4(index: number, type: Erc20SubType, typeInfo: dataRawAura, calls: string[], campaign: CampaignParameters<Campaign.ERC20>): {
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
            balancerPool: string;
            vault: string;
            auraOperator: string;
            poolId: string;
            totalSupplyBalancerPool: string;
            gaugeContract: string;
            auraStaker: string;
            totalSupplyGauge: string;
            pid: string;
            gaugeBalance: string;
            auraBalance: string;
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
