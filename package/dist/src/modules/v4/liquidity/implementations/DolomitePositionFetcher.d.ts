import type { Opportunity } from "@/modules/v4/opportunity/opportunity.model";
import { type MerklChainId } from "@sdk";
import type { PositionFetcher } from "../liquidity.model";
export declare class DolomitePositionFetcher implements PositionFetcher {
    fetchPositions: (chainId: MerklChainId, user: string, opportunities: Opportunity["model"][]) => Promise<import("../liquidity.model").PositionT[]>;
}
