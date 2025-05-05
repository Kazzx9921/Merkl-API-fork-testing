import { type MerklChainId } from "@sdk";
import { BigNumber } from "ethers";
export declare function fetchAlmPositions(chainId: MerklChainId, user: string): Promise<{
    [token: string]: BigNumber;
}>;
