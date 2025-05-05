import type { PositionT, PositionsInputModel } from "./liquidity.model";
export declare class LiquidityService {
    #private;
    static fetchPositions(query: PositionsInputModel): Promise<PositionT[]>;
}
