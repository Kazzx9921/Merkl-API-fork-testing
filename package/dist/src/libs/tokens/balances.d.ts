import type { UncachedResult } from "@/utils/execute";
type ReturnType = {
    [address: string]: {
        symbol: string;
        balance: string;
        decimals: number;
    };
};
export declare function getOnlyUserBalance(chainId: number, userAddress: string, tokenAddresses: string[]): Promise<ReturnType>;
export declare function getUserBalances(user: string, chainId: number, tokenAddresses?: string[]): Promise<UncachedResult<ReturnType>>;
export {};
