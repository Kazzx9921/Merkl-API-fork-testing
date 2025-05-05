import { ChainId } from "@sdk";
import { t } from "elysia";
export const dexIdToProtocolId = {
    DEX_UNISWAPV3: "uniswap",
    DEX_UNISWAPV2: "uniswap",
    DEX_PANCAKESWAPV3: "pancake-swap",
    DEX_SUSHISWAPV3: "sushi-swap",
    DEX_CURVE: "curve",
    DEX_SYNCSWAP_V3: "syncswap",
    // DEX_SYNCSWAP_V1_V2: "syncswap",
    DEX_ZKSWAP_V3: "zk-swap",
    DEX_QUICKSWAPV3UNI: "quickswap",
    DEX_QUICKSWAPV3ALGEBRA: "quickswap",
    DEX_THRUSTERV3: "thruster",
    DEX_CAMELOTV3: "camelot",
    DEX_BEEFY: "beefy",
    DEX_KOICL: "koi",
    DEX_AERODROMECL: "aerodrome",
    DEX_BALANCER: "balancer",
};
export const chainToKyberLabel = {
    [ChainId.ARBITRUM]: "arbitrum",
    [ChainId.AVALANCHE]: "avalance",
    [ChainId.BASE]: "base",
    [ChainId.BLAST]: "blast",
    [ChainId.BSC]: "bsc",
    [ChainId.MAINNET]: "ethereum",
    [ChainId.LINEA]: "linea",
    [ChainId.OPTIMISM]: "optimism",
    [ChainId.POLYGON]: "polygon",
    [ChainId.POLYGONZKEVM]: "polygon-zkevm",
    [ChainId.SCROLL]: "scroll",
    [ChainId.ZKSYNC]: "zksync",
};
export const apiTypes = {
    "/api/v1/in/route": {
        query: t.Object({
            dex: t.String({ example: "DEX_UNISWAPV3" }),
            "pool.id": t.String({ example: "0x2f5e87c9312fa29aed5c179e456625d79015299c" }),
            "position.tickLower": t.String(),
            "position.tickUpper": t.String(),
            tokenIn: t.String(),
            amountIn: t.String(),
            feeAddress: t.Optional(t.String()),
            feePcm: t.Optional(t.Number()),
            slippage: t.Optional(t.Number()),
        }),
        response: t.Object({
            message: t.String({ example: "OK" }),
            data: t.Object({
                poolDetails: t.Object({}),
                positionDetails: t.Object({}),
                zapDetails: t.Object({
                    actions: t.Array(t.Object({}, { description: "ZapActions" })),
                    finalAmountUsd: t.String(),
                    priceImpact: t.Number(),
                }),
                route: t.String(),
                routerAddress: t.String(),
            }),
            requestId: t.String(),
        }),
    },
    "/api/v1/in/route/build": {
        query: t.Object({}),
        body: t.Object({
            sender: t.String(),
            recipient: t.String(),
            route: t.String(),
            deadline: t.Number(),
            source: t.String(),
        }),
        response: t.Object({
            message: t.String({ example: "OK" }),
            data: t.Object({
                routerAddress: t.String(),
                callData: t.String(),
                value: t.String(),
            }),
            requestId: t.String(),
        }),
    },
};
