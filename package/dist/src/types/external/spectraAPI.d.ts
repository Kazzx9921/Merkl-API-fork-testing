export interface SpectraPoolData {
    address: string;
    chainId: number;
    lpt: {
        address: string;
        decimals: number;
        chainId: number;
        supply: string;
    };
    liquidity: {
        underlying: number;
        usd: number;
    };
    impliedApy: number;
    lpApy: {
        total: number;
        details: {
            fees: number;
            pt: number;
            ibt: number;
        };
    };
    ibtToPt: string;
    ptToIbt: string;
    ptPrice: {
        underlying: number;
        usd: number;
    };
    ytPrice: {
        underlying: number;
        usd: number;
    };
    ibtAmount: string;
    ptAmount: string;
    feeRate: string;
    outFee: string;
    midFee: string;
    lastPrices: string;
}
export interface SpectraObject {
    address: string;
    name: string;
    symbol: string;
    decimals: number;
    chainId: number;
    rate: string;
    yt: {
        address: string;
        decimals: number;
        chainId: number;
    };
    ibt: {
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        chainId: number;
        rate: string;
        apr: {
            total: number;
            details: {
                base: number;
            };
        };
        price: {
            underlying: number;
            usd: number;
        };
        protocol: string;
    };
    underlying: {
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        chainId: number;
        price: {
            usd: number;
        };
    };
    maturity: number;
    createdAt: number;
    pools: SpectraPoolData[];
    maturityValue: {
        underlying: number;
        usd: number;
    };
}
