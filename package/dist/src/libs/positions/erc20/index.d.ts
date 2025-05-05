import type { UncachedResult } from "@/utils/execute";
import { type MerklChainId } from "@sdk";
export declare function getERC20UserPositions(user: string, _chainId: MerklChainId, tokens: {
    [marketAddress: string]: string[];
}): Promise<UncachedResult<any>>;
