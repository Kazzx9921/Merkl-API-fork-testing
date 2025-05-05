import { type MerklChainId } from "@sdk";
export type CompoundVaultType = {
    address: string;
    asset: string;
    chainId: MerklChainId;
    debtTokenAddress: string;
    name: string;
};
export type CompoundVaultsType = {
    [chainId_compFork: string]: {
        address: string;
        symbolCToken: string;
        decimalsCToken: number;
        underlying: string;
        symbolUnderlying: string;
        decimalsUnderlying: number;
    }[];
};
export declare const getCompoundV2ForksVaultsWithCache: () => Promise<CompoundVaultsType>;
