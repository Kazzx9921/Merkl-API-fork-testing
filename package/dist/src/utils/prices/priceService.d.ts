export type PriceType = {
    [token: string]: number;
};
export default class PriceService {
    static readonly instance: PriceService;
    private _prices;
    private constructor();
    get prices(): PriceType;
    private setPrices;
    fetchPrices(): Promise<PriceType>;
    private setConstantPrices;
    private setEqualsToPrices;
}
