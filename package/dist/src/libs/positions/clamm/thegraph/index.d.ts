/**
 * @deprecated
 */
export type TGUniswapV3Positions = {
    id: string;
    liquidity: string;
    tickLower: {
        id: string;
    };
    tickUpper: {
        id: string;
    };
    token0?: {
        symbol: string;
    };
    token1?: {
        symbol: string;
    };
};
export declare type PositionType = {
    id: string;
    startTimestamp: number;
    endTimestamp: number;
    pool: {
        id: string;
    };
    tickLower: string;
    tickUpper: string;
    liquidity: string;
    owner: string;
    handler?: string;
};
export declare const positionsQuery: string;
export declare const nftWrapperPositionsQuery: string;
export declare const nftPositionByIdsQuery: string;
/** Queries */
export declare const positionMultipleOwnersQuery: string;
export declare const positionsWithPastQuery: string;
export declare const almBalancesQuery: string;
export declare const almNFTBalancesQuery: string;
