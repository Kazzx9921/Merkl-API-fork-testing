import { ChainId, type MerklChainId } from "@sdk";
export declare const DEFAULT_LOCAL_TTL = 120;
export declare const MAX_NUM_SUBCALLS = 100;
export declare const MERKL_USER_POSITION_FETCHING_TIMEOUT = 8000;
export declare const MERKL_USER_POSITION_FETCHING_GLOBAL_TIMEOUT = 10000;
export declare const MERKL_ALM_POSITION_FETCHING_TIMEOUT = 100000;
export declare const EBTC_ADDRESS = "0x661c70333AA1850CcDBAe82776Bb436A0fCfeEfB";
export declare const CDPMANAGER_ADDRESS = "0xc4cbaE499bb4Ca41E78f52F07f5d98c375711774";
export declare const SORTEDCDPS_ADDRESS = "0x591AcB5AE192c147948c12651a0a5f24f0529BE3";
export declare const RFX_DATASTORE = "0x895124783008C6c68eFcccac24c482Fdf30439B2";
export declare const constantChain: {
    [ChainId.MAINNET]: {
        apw: string;
        convexEndpoint: string;
        crv: string;
        crv3: string;
        crvANGLESDANGLE: string;
        crvEURAEUROC: string;
        crvEURAEURe: string;
        crvEuropool: string;
        crvFRAX: string;
        crvFRAXEURA: string;
        crvLUSD3CRV: string;
        cvx: string;
        dai: string;
        frax: string;
        fxs: string;
        morpho: string;
        rKP3R: string;
        sdt: string;
        stakeEndpoint: string;
        sushi: string;
        usdc: string;
        weth: string;
        wstETH: string;
    };
    [ChainId.ARBITRUM]: {
        arb: string;
        chr: string;
        convexProxy: string;
        crv: string;
        crv2Pool: string;
        cvx: string;
        frax: string;
        jeur: string;
        ram: string;
        sdt: string;
        sliz: string;
        stakeEndpoint: string;
        usdc: string;
    };
    [ChainId.OPTIMISM]: {
        jeur: string;
        mai: string;
        op: string;
        usdc: string;
        usdce: string;
        velo: string;
        veloV2: string;
    };
    [ChainId.BASE]: {
        aero: string;
        usdc: string;
    };
    [ChainId.POLYGON]: {
        am3CRV: string;
        amDAI: string;
        amUSDC: string;
        amUSDT: string;
        jeur: string;
        jrt: string;
        oretro: string;
        usdc: string;
    };
    [ChainId.AVALANCHE]: {
        glcr: string;
        usdc: string;
    };
    [ChainId.BSC]: {
        cake: string;
    };
};
export declare const MAVERICK_ZKSYNC_BP_LENS_ADDRESS = "0xd32CE31CaC98CAC0631764B8286358c0606D87F9";
export declare const SPECTRA_NETWORK_SLUGS: {
    [chainId in MerklChainId]?: string;
};
