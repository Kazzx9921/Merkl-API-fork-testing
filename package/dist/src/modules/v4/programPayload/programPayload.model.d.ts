import type { Campaign, CompFork, CompoundSubCampaignType, CompoundV3SubCampaignType, ComputeScoreMethod, ComputeScoreParameters, Forwarder, ForwarderParameters, GenericCampaignConfigComposed, HOOK, HookParameters, MerklChainId, MorphoSubCampaignType } from "@sdk";
import type { LockerEventSchema } from "libs/sdk/src/types/merkl/campaignTypes/locker";
import type { ComputeCurveMethod, ComputeCurveParameters } from "libs/sdk/src/types/merkl/computeCurve";
export declare const CampaignPayloadInputDto: import("@sinclair/typebox").TObject<{
    campaign: import("@sinclair/typebox").TString;
    program: import("@sinclair/typebox").TString;
    creator: import("@sinclair/typebox").TString;
    rewardToken: import("@sinclair/typebox").TString;
    distributionChainId: import("@sinclair/typebox").TNumber;
    startTimestamp: import("@sinclair/typebox").TNumber;
    endTimestamp: import("@sinclair/typebox").TNumber;
    amount: import("@sinclair/typebox").TString;
    apr: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const CampaignDataDto: import("@sinclair/typebox").TObject<{
    campaignType: import("@sinclair/typebox").TNumber;
    campaignData: import("@sinclair/typebox").TString;
    amount: import("@sinclair/typebox").TString;
    chainId: import("@sinclair/typebox").TNumber;
    computeChainId: import("@sinclair/typebox").TNumber;
    duration: import("@sinclair/typebox").TNumber;
    rewardToken: import("@sinclair/typebox").TString;
    startTimestamp: import("@sinclair/typebox").TNumber;
}>;
export declare const SinglePayloadInputDto: import("@sinclair/typebox").TObject<{
    distributionChainId: import("@sinclair/typebox").TNumber;
    rewardToken: import("@sinclair/typebox").TString;
    amount: import("@sinclair/typebox").TString;
    startTimestamp: import("@sinclair/typebox").TNumber;
    computeChainId: import("@sinclair/typebox").TNumber;
    creator: import("@sinclair/typebox").TString;
    hooks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{}>>>;
    tokenId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    whitelist: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
    blacklist: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
    campaignType: import("@sinclair/typebox").TNumber;
    endTimestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    targetToken: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    forwarders: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{}>, import("@sinclair/typebox").TString]>>>;
    poolAddress: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    isOutOfRangeIncentivized: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    weightFees: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    weightToken0: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    weightToken1: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    usesBlockNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    snapshotTimestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    snapshotBlockNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    jsonUrl: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    subCampaignType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    repository: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    capInUSD: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    marketId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    compFork: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    poolId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    evkAddress: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    collateralAddress: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    strategy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    contract: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const ProgramPayloadInputDto: import("@sinclair/typebox").TObject<{
    program: import("@sinclair/typebox").TString;
    creator: import("@sinclair/typebox").TString;
    rewardToken: import("@sinclair/typebox").TString;
    distributionChainId: import("@sinclair/typebox").TNumber;
    startTimestamp: import("@sinclair/typebox").TNumber;
    endTimestamp: import("@sinclair/typebox").TNumber;
    amount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    apr: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const CampaignAmountsInputDto: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
export type CampaignPayloadInputModel = typeof CampaignPayloadInputDto.static;
export type ProgramPayloadInputModel = typeof ProgramPayloadInputDto.static;
export type CampaignAmountsInputModel = typeof CampaignAmountsInputDto.static;
export type SinglePayloadInputDtoModel = typeof SinglePayloadInputDto.static;
export type CampaignDataDtoModel = typeof CampaignDataDto.static;
export type approvalTransaction = {
    to: string;
    value: string;
    data: null;
    contractMethod: {
        inputs: {
            name: string;
            type: string;
            internalType: string;
        }[];
        name: string;
        payable: boolean;
    };
    contractInputsValues: {
        spender: string;
        amount: string;
    };
};
export type acceptConditionsTransaction = {
    to: string;
    value: string;
    data: null;
    contractMethod: {
        inputs: any[];
        name: string;
        payable: boolean;
    };
    contractInputsValues: null;
};
export type createCampaignTransaction = {
    to: string;
    value: string;
    data: null;
    contractMethod: {
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        payable: boolean;
    };
    contractInputsValues: {
        newCampaign: string;
    };
};
export type transaction = approvalTransaction | acceptConditionsTransaction | createCampaignTransaction;
export type safeCompletePayload = {
    version: string;
    chainId: string;
    createdAt: number;
    meta: {
        name: string;
        txBuilderVersion: string;
    };
    transactions: [approvalTransaction, acceptConditionsTransaction, createCampaignTransaction];
};
export type safePayload = {
    version: string;
    chainId: string;
    createdAt: number;
    meta: {
        name: string;
        txBuilderVersion: string;
    };
    transactions: transaction[];
};
export type partialConfigERC20 = {
    computeChainId?: MerklChainId;
    hooks?: (HookParameters<HOOK> | string)[];
    campaignType: Campaign;
    targetToken: string;
    whitelist: string[];
    blacklist: string[];
    url?: string;
    forwarders: ForwarderParameters<Forwarder>[];
    apr?: string;
};
export type partialConfigERC20FixedAPR = {
    computeChainId?: MerklChainId;
    hooks?: (HookParameters<HOOK> | string)[];
    campaignType: Campaign;
    targetToken: string;
    whitelist: string[];
    blacklist: string[];
    url?: string;
    forwarders: ForwarderParameters<Forwarder>[];
    apr: string;
    targetTokenPricing: boolean;
    rewardTokenPricing: boolean;
};
export type partialConfigMultiLog = {
    composedCampaigns: GenericCampaignConfigComposed[];
    composedCampaignsCompute: string;
    computeScoreParameters: ComputeScoreParameters<ComputeScoreMethod> | string;
    computeChainId?: MerklChainId;
    hooks?: (HookParameters<HOOK> | string)[];
    campaignType: Campaign;
    whitelist: string[];
    blacklist: string[];
    url?: string;
    apr?: string;
};
export type partialConfigCompoundV3 = {
    computeChainId?: MerklChainId;
    hooks?: (HookParameters<HOOK> | string)[];
    campaignType: Campaign;
    targetToken: string;
    whitelist: string[];
    blacklist: string[];
    url?: string;
    subCampaignType: CompoundV3SubCampaignType;
};
export type partialConfigMorpho = {
    computeChainId?: MerklChainId;
    hooks?: (HookParameters<HOOK> | string)[];
    campaignType: Campaign;
    whitelist: string[];
    blacklist: string[];
    forwarders: ForwarderParameters<Forwarder>[];
} & ({
    subCampaignType: MorphoSubCampaignType.META;
    targetToken: string;
} | {
    subCampaignType: MorphoSubCampaignType.SUPPLY_BLUE | MorphoSubCampaignType.COLLATERAL_BLUE | MorphoSubCampaignType.BORROWING_BLUE;
    marketId: string;
});
export type partialConfigCLAMM = {
    computeChainId?: MerklChainId;
    hooks?: (HookParameters<HOOK> | string)[];
    campaignType: Campaign;
    poolAddress: string;
    isOutOfRangeIncentivized: boolean;
    weightFees: number;
    weightToken0: number;
    weightToken1: number;
    whitelist: string[];
    blacklist: string[];
    url?: string;
};
export type partialConfigIonic = {
    computeChainId?: MerklChainId;
    hooks?: (HookParameters<HOOK> | string)[];
    campaignType: Campaign;
    endTimestamp: number;
    subCampaignType: CompoundSubCampaignType;
    compFork: CompFork;
    targetToken: string;
    whitelist: string[];
    blacklist: string[];
    forwarders: string[];
};
export type partialConfigAirdrop = {
    jsonUrl: string;
    url?: string;
    computeChainId?: MerklChainId;
    hooks?: (HookParameters<HOOK> | string)[];
    campaignType: Campaign;
};
export type partialConfigLocker = {
    url?: string;
    computeChainId?: MerklChainId;
    hooks?: (HookParameters<HOOK> | string)[];
    campaignType: Campaign;
    lockerContract: string;
    whitelist: string[];
    blacklist: string[];
    forwarders: string[];
    computeScoreParameters: ComputeScoreParameters<ComputeScoreMethod> | string;
    curveParameters: ComputeCurveParameters<ComputeCurveMethod>;
    hasSlots: boolean;
    lockEvent: LockerEventSchema;
    unlockEvent: LockerEventSchema;
};
export type partialConfig = partialConfigERC20 | partialConfigMorpho | partialConfigCLAMM | partialConfigIonic | partialConfigCompoundV3 | partialConfigMultiLog | partialConfigLocker | partialConfigAirdrop | partialConfigERC20FixedAPR;
export declare const safeTemplate: {
    version: string;
    chainId: string;
    createdAt: number;
    meta: {
        name: string;
        txBuilderVersion: string;
    };
    transactions: ({
        to: string;
        value: string;
        data: null;
        contractMethod: {
            inputs: {
                name: string;
                type: string;
                internalType: string;
            }[];
            name: string;
            payable: boolean;
        };
        contractInputsValues: {
            spender: string;
            amount: string;
            newCampaign?: undefined;
        };
    } | {
        to: string;
        value: string;
        data: null;
        contractMethod: {
            inputs: never[];
            name: string;
            payable: boolean;
        };
        contractInputsValues: null;
    } | {
        to: string;
        value: string;
        data: null;
        contractMethod: {
            inputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            payable: boolean;
        };
        contractInputsValues: {
            newCampaign: string;
            spender?: undefined;
            amount?: undefined;
        };
    })[];
};
export type safeTemplate = typeof safeTemplate;
