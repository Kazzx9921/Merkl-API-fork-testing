import type { Opportunity } from "@/modules/v4/opportunity/opportunity.model";
import { type MerklChainId } from "@sdk";
import type { PositionFetcher, PositionT } from "../liquidity.model";
export declare class BadgerPositionFetcher implements PositionFetcher {
    fetchPositions: (chainId: MerklChainId, user: string, opportunities: Opportunity["model"][]) => Promise<PositionT[]>;
}
