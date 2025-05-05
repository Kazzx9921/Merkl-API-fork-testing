export declare abstract class CoingeckoRepository {
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
}
