export declare class CoingeckoService {
    static findList(): Promise<{
        id: string;
        symbol: string;
        name: string;
    }[]>;
    static findMarkets(ids?: string[]): Promise<{
        id: string;
        symbol: string;
        name: string;
        image: string;
        current_price: number;
    }[]>;
    static createPriceSourceForSymbolIfMissing(symbol: string, ticker: string): Promise<void>;
    static fillTokensWithCoingeckoData(): Promise<void>;
}
