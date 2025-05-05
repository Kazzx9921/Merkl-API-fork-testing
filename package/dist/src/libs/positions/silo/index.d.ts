import type { UncachedResult } from "@/utils/execute";
import { type MerklChainId } from "@sdk";
export declare function getSiloUserPositions(user: string, _chainId: MerklChainId, mainParameters: {
    [key: string]: any;
}): Promise<UncachedResult<any>>;
