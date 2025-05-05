import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import { type Campaign, type CampaignParameters } from "@sdk";
import type { BigNumber } from "ethers";
import { GenericProcessor, type dataType, type mandatoryCallKeys } from "../GenericProcessor";
type callType = {
    key: keyof dataRawBG;
    call: string;
    target: keyof callKeysBG;
    metaData?: keyof callKeysBG;
};
type callKeysBG = mandatoryCallKeys & {
    gyroscopeToken: string;
    balanceUnderlyingPoolTokens: string;
    totalSupplyUnderlyingPoolTokens: string;
    poolId: string;
    vault: string;
    vaultBalance: string;
    poolHolder: string;
};
type dataRawBG = callKeysBG & {
    poolTokensRaw: Array<string[] | BigNumber[]>;
    poolTokens: Array<{
        token: string;
        balance: string;
    }>;
    poolHolder: string;
    poolHolderBalance: string;
};
type dataTypeBG = dataType & {
    gyroscopeToken: string;
    balanceUnderlyingPoolTokens: string;
    totalSupplyUnderlyingPoolTokens: string;
    poolId: string;
    vault: string;
    poolTokensRaw: Array<string[] | BigNumber[]>;
    poolTokens: Array<{
        token: string;
        balance: string;
    }>;
    vaultBalance: string;
    poolHolderBalance: string;
};
export declare class BEXRewardGaugeProcessor extends GenericProcessor<callKeysBG, dataRawBG, dataTypeBG> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    processingRound2(typeInfo: dataRawBG): void;
    processingRound4(typeInfo: dataRawBG): void;
    processingRound5(index: number, type: Erc20SubType, typeInfo: dataRawBG, calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<dataTypeBG>;
    computeRound4(index: number, type: Erc20SubType, typeInfo: dataRawBG, calls: string[], campaign: CampaignParameters<Campaign.ERC20>): {
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
            gyroscopeToken: string;
            balanceUnderlyingPoolTokens: string;
            totalSupplyUnderlyingPoolTokens: string;
            poolId: string;
            vault: string;
            vaultBalance: string;
            poolHolder: string;
            poolTokensRaw: Array<string[] | BigNumber[]>;
            poolTokens: Array<{
                token: string;
                balance: string;
            }>;
            poolHolderBalance: string;
        };
    };
}
export {};
