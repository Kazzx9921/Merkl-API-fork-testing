import type { Erc20LikeCampaignEnum, Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { Pricer } from "@/utils/pricer";
import { type CallDto, type Campaign, type CampaignParameters } from "@sdk";
import type { tokenTypeStruct } from "./tokenTypeStruct";
export declare enum Round {
    one = "round1",
    two = "round2",
    three = "round3",
    four = "round4"
}
export type callType = {
    key: any;
    call: any;
    target: any;
    metaData?: any;
    optional?: boolean;
};
export type mandatoryCallKeys = {
    type: Erc20SubType;
    protocol: string;
    tokenAddress: string;
    blacklistedSupply: string;
    totalSupply: string;
    whitelistedSupply: string;
} & stakingKeys;
export type stakingKeys = {
    lockNFT: string;
    eip712DomainName: string;
    stakingName: string;
    stakingSymbol: string;
    isStaking: string;
};
export type callKeys = mandatoryCallKeys & {
    [key: string]: string;
};
export type dataRaw = {
    protocol: string;
    tokenAddress: string;
    blacklistedSupply: string;
    totalSupply: string;
    whitelistedSupply: string;
} & stakingKeys;
export type dataType = {
    protocol: string;
    type: Erc20SubType;
    tokenAddress: string;
    totalSupply: number;
    blacklistedSupply: number;
    tvl: number;
    cardName: string;
    priceTargetToken: number;
    whitelistedSupplyTargetToken: number;
    tokensDisplay: Array<{
        address: string;
        symbol?: string;
    }>;
};
/**
 * Generic Processor to compute dynamic data of ERC20 tokens
 *
 * @params Input - Sets of value that will be passed from rounds to rounds in order to query the blockchain
 * @params DataRaw - Raw data output from the view function calls
 * @params Output - Final output of the processor
 */
export declare class GenericProcessor<Input extends callKeys, DataRaw extends dataRaw, Output extends dataType> {
    rounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    stakingRounds: {
        round1: callType[];
        round2: callType[];
        round3: callType[];
        round4: callType[];
    };
    debug: boolean;
    processingRound1(_typeInfo: DataRaw): void;
    processingRound2(_typeInfo: DataRaw, _campaign?: CampaignParameters<Erc20LikeCampaignEnum>): void;
    processingRound3(_typeInfo: DataRaw): void;
    processingRound4(_typeInfo: DataRaw): void;
    handleWhiteListBlacklistRound5(typeInfo: DataRaw, campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.ERC20LOGPROCESSOR> | CampaignParameters<Campaign.ERC20REBASELOGPROCESSOR> | CampaignParameters<Campaign.EULER>): {
        whitelistedSupplyTargetToken: any;
        totalSupply: any;
        blacklistedSupply: any;
    };
    processingRound5(_index: number, type: Erc20SubType, typeInfo: DataRaw, _calls: string[], campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.ERC20LOGPROCESSOR> | CampaignParameters<Campaign.ERC20REBASELOGPROCESSOR> | CampaignParameters<Campaign.EULER>, pricer: Pricer): Promise<Output>;
    computeRound1(type: Erc20SubType, typeInfo: DataRaw): tokenTypeStruct;
    computeRound2(index: number, type: Erc20SubType, typeInfo: DataRaw, calls: string[], campaign?: CampaignParameters<Erc20LikeCampaignEnum>): tokenTypeStruct;
    computeRound3(index: number, type: Erc20SubType, typeInfo: DataRaw, calls: string[]): tokenTypeStruct;
    computeRound4(index: number, type: Erc20SubType, typeInfo: DataRaw, calls: string[], campaign: CampaignParameters<Erc20LikeCampaignEnum>): tokenTypeStruct;
    computeRound5(index: number, type: Erc20SubType, typeInfo: DataRaw, calls: string[], campaign: CampaignParameters<Erc20LikeCampaignEnum>, pricer: Pricer): Promise<tokenTypeStruct>;
    generateWhitelistCall(type: Erc20SubType, typeInfo: DataRaw, campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.ERC20LOGPROCESSOR> | CampaignParameters<Campaign.ERC20REBASELOGPROCESSOR> | CampaignParameters<Campaign.EULER>): CallDto[];
    generateBlackListCall(type: Erc20SubType, typeInfo: DataRaw, campaign: CampaignParameters<Campaign.ERC20> | CampaignParameters<Campaign.ERC20LOGPROCESSOR> | CampaignParameters<Campaign.ERC20REBASELOGPROCESSOR> | CampaignParameters<Campaign.EULER>): CallDto[];
    decodeListedSupply(index: number, list: string[], calls: string[]): string;
    decodeRound(round: callType[], index: number, calls: string[], type: Erc20SubType, data: DataRaw): void;
    decodePreviousRound(round: Round, calls: string[], data: DataRaw, type: Erc20SubType, index: number): void;
    decodePreviousStakingRound(round: Round, calls: string[], data: DataRaw, type: Erc20SubType, index: number): void;
    encodeRound(round: callType[], callInfo: Input, type: Erc20SubType): CallDto[];
    encodeNextRound(round: Round, type: Erc20SubType, data: DataRaw): CallDto[];
    encodeStakingNextRound(round: Round, type: Erc20SubType, data: DataRaw): CallDto[];
}
