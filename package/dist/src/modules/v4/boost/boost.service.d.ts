import type { getEulerBoostBodyModel, getZksyncBoostModel } from "./boost.model";
export declare class BoostService {
    static getEulerBoost(): Promise<{
        address: string;
        boost: string;
    }[]>;
    static getOpenBlockBoost(query: getZksyncBoostModel, body: getEulerBoostBodyModel): Promise<{
        address: string;
        boost: string;
    }[]>;
}
