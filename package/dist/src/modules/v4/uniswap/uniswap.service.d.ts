import type { Opportunity } from "@/modules/v4/opportunity/opportunity.model";
import type { Token } from "@/modules/v4/token/token.model";
import { type MerklChainId } from "@sdk";
import { type RewardsPerPositionModel, type UniV4ChainId, type UniswapV4PoolsReturnType } from "./uniswap.model";
export declare abstract class UniswapService {
    static findRewardsPerPosition(version: "v3" | "v4", query: RewardsPerPositionModel): Promise<Record<number, Record<string, Record<string, {
        campaignId: string;
        amount: string;
        claimed: string;
        pending: string;
        reason: string;
        rewardToken: Token["model"];
        opportunity: Opportunity["model"];
    }[]>>>>;
    static getUniswapV4Pools(chainId?: UniV4ChainId): Promise<UniswapV4PoolsReturnType>;
    /** @deprecated */
    static getUniswapV4PoolsForChain(chainId: MerklChainId): Promise<UniswapV4PoolsReturnType>;
}
