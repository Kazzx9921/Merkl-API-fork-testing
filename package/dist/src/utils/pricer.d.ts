import { ChainId } from "@sdk";
export type PricerDataType = {
    prices: {
        [token: string]: number;
    };
    extraPricesData: {
        method: number;
        symbol: string;
        address: string;
        chainId: ChainId;
    }[];
};
export declare enum PRICING_METHODS {
    defillama = 0,
    quickswap = 1,
    abandonned = -1
}
export declare class Pricer {
    prices: PricerDataType["prices"];
    extraPricesData: PricerDataType["extraPricesData"];
    constructor(prices: PricerDataType["prices"], extraPricesData: PricerDataType["extraPricesData"]);
    static load(): Promise<Pricer>;
    getArray(): {
        rate: number;
        token: string;
    }[];
    /** Tries to fetch a given price sequentially using a given method */
    fetchPerMethod(x: {
        symbol?: string;
        address?: string;
        chainId?: ChainId;
    }, method: PRICING_METHODS): Promise<number>;
    /** Tries to fetch a given price sequentially using all available methods */
    fetch(x: {
        symbol?: string;
        address?: string;
        chainId?: ChainId;
    }): Promise<{
        price: number;
        method: number;
    }>;
    /** Returns the price if possible, otherwise tries to fetch it */
    get(x: {
        symbol?: string;
        address?: string;
        chainId?: ChainId;
    }): Promise<number | undefined>;
    /** Saves the current price data in the cache */
    save(): Promise<void>;
    /** Recomputes all prices and saves them in the cache */
    update(): Promise<{
        [token: string]: number;
    }>;
}
