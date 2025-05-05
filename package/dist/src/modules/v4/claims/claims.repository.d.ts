import { type MerklChainId } from "@sdk";
import type { ClaimModel } from "./claims.model";
export declare class ClaimRepository {
    static fetch(chainId: MerklChainId, address: string): Promise<ClaimModel[]>;
}
