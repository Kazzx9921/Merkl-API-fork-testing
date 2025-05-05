import { type MerklChainId } from "@sdk";
export declare type A51StrategiesType = {
    pool: string;
    vault: string;
    id: string;
    tickLower: number;
    tickUpper: number;
};
export type A51StrategiesReturnType = {
    [pool: string]: {
        [vault: string]: {
            id: string;
            tickLower: number;
            tickUpper: number;
        }[];
    };
};
export declare function fetchA51Strategies(chainId: MerklChainId, pools: string[]): Promise<A51StrategiesReturnType>;
