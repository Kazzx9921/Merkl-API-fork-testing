type SpliceInformation = {
    symbolUnderlyingToken: string;
    priceTargetToken: number;
    tvl: number;
    address: string;
};
export declare function fetchSpliceInformation(marketAddress: string): Promise<SpliceInformation>;
export {};
