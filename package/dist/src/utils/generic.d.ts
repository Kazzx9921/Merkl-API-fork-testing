import { type MerklChainId } from "@sdk";
import { type BigNumberish } from "ethers";
import type { Multicall3 } from "libs/sdk/src/generated/Multicall";
export declare function batchMulticallCallWithRetry(chainId: MerklChainId, args: {
    calls: Multicall3.Call3Struct[];
    blockNumber?: BigNumberish;
}): Promise<Multicall3.ResultStructOutput[]>;
