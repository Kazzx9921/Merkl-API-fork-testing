import type { UncachedResult } from "@/utils/execute";
type ReturnType = {
    name: string;
    symbol: string;
    decimals: number;
};
export declare function getTokenInfo(address: string): Promise<UncachedResult<ReturnType>>;
export {};
