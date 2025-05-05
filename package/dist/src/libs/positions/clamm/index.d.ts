import { type MerklChainId } from "@sdk";
import type { CLAMMPosition } from "../types";
export declare function getClammUserPositions(user: string, chainId: MerklChainId, poolsByAmm: {
    [amm: string]: {
        [pool: string]: any;
    };
}, withIndividualAPRs?: boolean): Promise<Record<string, CLAMMPosition>>;
