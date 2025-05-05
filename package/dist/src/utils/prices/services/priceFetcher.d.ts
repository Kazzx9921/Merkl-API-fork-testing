import type { PriceSource } from "@db/api";
export default interface PriceFetcher {
    getPrice(tickers: PriceSource[]): Promise<ResponsePriceType[]>;
}
export type ResponsePriceType = {
    token: string;
    rate: number;
};
