import type { UncachedResult } from "@/utils/execute";
import type { MerklChainId } from "@sdk";
import type { DolomitePositionFetchingDataType } from "../prepareFetch";
export type DolomitePositionType = {
    [mainParameter: string]: {
        decimals: number;
        token: string;
        symbol: string;
        userPositions: {
            borrowBalance: number;
            supplyBalance: number;
            token: string;
            origin: string;
        }[];
    };
};
export declare function getDolomiteUserPositions(user: string, _chainId: MerklChainId, dolomitePositionFetchingData: DolomitePositionFetchingDataType): Promise<UncachedResult<DolomitePositionType>>;
