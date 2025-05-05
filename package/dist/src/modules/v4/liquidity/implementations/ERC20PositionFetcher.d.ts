import type { PositionFetcher, PositionT } from "@/modules/v4/liquidity/liquidity.model";
import type { Opportunity } from "@/modules/v4/opportunity/opportunity.model";
import { type MerklChainId } from "@sdk";
export declare class ERC20PositionFetcher implements PositionFetcher {
    fetchPositions: (chainId: MerklChainId, user: string, opportunities: Opportunity["model"][]) => Promise<PositionT[]>;
}
