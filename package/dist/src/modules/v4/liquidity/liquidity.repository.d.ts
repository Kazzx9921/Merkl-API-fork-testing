import type { MerklChainId } from "@sdk";
export declare class LiquidityRepository {
    static findManyDolomitePositions(chainId: MerklChainId, user: string): Promise<{
        balance: string;
        token: {
            id: string;
            marketId: string;
            symbol: string;
            decimals: string;
            borrowLiquidity: string;
            supplyLiquidity: string;
        };
    }[]>;
}
