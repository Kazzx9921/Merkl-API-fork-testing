import { protocolIdList } from "@/modules/v4/protocol/protocol.model";
import { ProtocolService } from "@/modules/v4/protocol/protocol.service";
import { camelToKebabCase } from "@/utils/caseChanges";
import { log } from "@/utils/logger";
import { sanitizeChainName } from "@/utils/sanitizeChain";
import { OpportunityAction } from "@db/api";
import { AMM, ChainId, almName, ammName, } from "@sdk";
import { getAddress } from "viem";
export const uniswapV3OkuChains = {
    [ChainId.BLAST]: "blast",
    [ChainId.SCROLL]: "scroll",
    [ChainId.LINEA]: "linea",
    [ChainId.MANTLE]: "mantle",
    [ChainId.ZKSYNC]: "zksync",
    [ChainId.GNOSIS]: "gnosis",
    [ChainId.BASE]: "base",
    [ChainId.BSC]: "bsc",
    [ChainId.MANTA]: "manta",
    [ChainId.ROOTSTOCK]: "rootstock",
    [ChainId.TAIKO]: "taiko",
    [ChainId.MOONBEAM]: "moonbeam",
    [ChainId.POLYGONZKEVM]: "polygon-zkevm",
    [ChainId.BOB]: "bob",
    // [ChainId.WORLDCHAIN]: "world-chain",
    [ChainId.SONIC]: "sonic",
    [ChainId.LISK]: "lisk",
    [ChainId.CORN]: "corn",
};
export const pancakeswapChains = {
    [ChainId.MAINNET]: "eth",
    [ChainId.ARBITRUM]: "arb",
    [ChainId.POLYGONZKEVM]: "polygon-zkevm",
};
export const sushiswapv3Chains = {
    [ChainId.SKALE]: "skale-europa",
};
export class ClammMetadata {
    async build(campaign) {
        const { params, computeChainId } = campaign;
        let platform = ammName(params.amm);
        if (platform === "BaseSwap") {
            switch (computeChainId) {
                case ChainId.MODE:
                    platform = "SwapMode";
                    break;
                case ChainId.ARBITRUM:
                    platform = "Arbitex";
                    break;
                case ChainId.OPTIMISM:
                    platform = "SuperSwap";
            }
        }
        if (platform === "Izumi") {
            if (computeChainId === ChainId.ROOTSTOCK)
                platform = "WoodSwap";
            else
                platform = "iZUMi";
        }
        let whitelistNameString = "";
        if (params.whitelist.length > 0) {
            for (const whitelist of params.whitelist) {
                if (whitelistNameString.length > 0) {
                    whitelistNameString += "or";
                }
                const forwarder = params.forwarders.find(x => getAddress(x.sender) === getAddress(whitelist));
                const forwarderType = forwarder?.type;
                const forwarderName = !!forwarderType ? almName(forwarderType) : null;
                if (!!forwarderName) {
                    whitelistNameString += ` ${forwarderName} `;
                }
            }
        }
        // Protocol id normalization
        let mainProtocolId = AMM[params.amm]
            ? camelToKebabCase(AMM[params.amm].replace(/\/?(V(\d+_)?\d+)/g, ""))
            : undefined;
        if (mainProtocolId?.includes("stryke"))
            mainProtocolId = "stryke";
        else if (mainProtocolId?.includes("quickswap"))
            mainProtocolId = "quickswap";
        else if (mainProtocolId?.includes("quick-swap"))
            mainProtocolId = "quickswap";
        else if (mainProtocolId?.includes("sushiswap"))
            mainProtocolId = "sushi-swap";
        else if (mainProtocolId?.includes("sushi-swap"))
            mainProtocolId = "sushi-swap";
        else if (mainProtocolId?.includes("third-trade"))
            mainProtocolId = "thirdtrade";
        const parsedProtocolId = mainProtocolId;
        if (!!mainProtocolId) {
            // Make sure the protocol exist in the correct type
            const protocol = (await ProtocolService.findMany({ id: mainProtocolId }))?.[0];
            if (!!protocol) {
                mainProtocolId = protocol?.id;
            }
            if (mainProtocolId === "unknown") {
                mainProtocolId = undefined;
            }
        }
        if (!mainProtocolId || !protocolIdList.includes(mainProtocolId))
            log.warn(`protocol not found for ${AMM[params.amm]} - parsed as ${parsedProtocolId}`);
        return {
            name: `Provide liquidity to ${whitelistNameString} ${platform} ${params.symbolToken0}-${params.symbolToken1}${params.poolFee ? ` ${params.poolFee}%` : ""}`,
            action: OpportunityAction.POOL,
            tokens: [
                { chainId: computeChainId, address: params.token0 },
                { chainId: computeChainId, address: params.token1 },
            ],
            mainProtocol: mainProtocolId,
            depositUrl: ClammMetadata.generateUrl(computeChainId, params),
            explorerAddress: getAddress(params.poolAddress),
        };
    }
    static generateUrl(computeChainId, params) {
        const sanitizeFee = (poolFee) => Number(poolFee) * 10000;
        const ammLinkMap = {
            UniswapV3: ({ poolAddress }) => {
                const availableOnOku = Object.keys(uniswapV3OkuChains).includes(computeChainId?.toString());
                if (availableOnOku)
                    return `https://oku.trade/app/${uniswapV3OkuChains[computeChainId]}/liquidity/${params.poolAddress} `;
                return `https://app.uniswap.org/explore/pools/${sanitizeChainName(computeChainId)}/${poolAddress?.toLowerCase()}`;
            },
            // Pool address mappings
            Sonex: ({ poolAddress }) => `https://app.sonex.so/explore/pools/${poolAddress}`,
            KYO: ({ poolAddress }) => `https://app.kyo.finance/liquidity/${poolAddress}`,
            SushiSwapV3: ({ poolAddress }) => `https://www.sushi.com/${sushiswapv3Chains[computeChainId] ?? sanitizeChainName(computeChainId)}/pool/v3/${poolAddress}`,
            Swapr: ({ poolAddress }) => `https://v3.swapr.eth.limo/#/info/pools/${poolAddress}`,
            Crust: ({ poolAddress }) => `https://v1.crust.finance/liquidity/${poolAddress}`,
            ThirdTrade: ({ poolAddress }) => `https://third.trade/pool/${poolAddress}`,
            Katana: ({ poolAddress }) => `https://app.roninchain.com/liquidity/${poolAddress}`,
            SyncswapV3: ({ poolAddress }) => `https://syncswap.xyz/pool/${poolAddress}`,
            // Token address mappings
            Camelot: ({ token0, token1 }) => `https://app.camelot.exchange/liquidity?type=v3&token1=${token0}&token2=${token1}`,
            QuickswapAlgebra: ({ token0, token1 }) => `https://quickswap.exchange/#/pools?currency0=${token0}&currency1=${token1}`,
            QuickswapUni: ({ token0, token1 }) => `https://quickswap.exchange/#/pools?currency0=${token0}&currency1=${token1}`,
            QuickswapAlgebraV1_2: ({ token0, token1 }) => `https://quickswap.exchange/#/pools?currency0=${token0}&currency1=${token1}`,
            AERODROME: ({ token0, token1 }) => `https://aerodrome.finance/pools?token0=${token0}&token1=${token1}&type=1&chain=${computeChainId}`,
            KOI: ({ token0, token1 }) => `https://dapp.koi.finance/pool/v3/new/${token0}/${token1}`,
            zkSwap: ({ token0, token1 }) => `https://www.zkswap.finance/add/${token0}/${token1}/2000?chain=${computeChainId}`,
            Velodrome: ({ token0, token1 }) => `https://velodrome.finance/pools?token0=${token0}&token1=${token1}&type=1&chain=${computeChainId}`,
            // Token address and pool fess
            PancakeSwapV3: ({ token0, token1, poolFee }) => `https://pancakeswap.finance/add/${token0}/${token1}/${sanitizeFee(poolFee)}?chain=${pancakeswapChains[computeChainId] ?? sanitizeChainName(computeChainId)}`,
            BaseSwap: ({ token0, token1, poolFee }) => `https://${computeChainId === ChainId.MODE ? "swapmode" : "baseswap"}.fi/addV3?currencyIdA=${token0}&currencyIdB=${token1}&feeAmount=${sanitizeFee(poolFee)}`,
            Voltage: ({ token0, token1, poolFee }) => `https://app.voltage.finance/add/${token0}/${token1}?version=v3&feeAmount=${sanitizeFee(poolFee)}`,
            Izumi: ({ token0, token1, poolFee }) => `https://${computeChainId === ChainId.ROOTSTOCK ? "woodswap.org" : "izumi.finance"}/trade/add-liquidity/?token0=${token0}&token1=${token1}&chainId=${computeChainId}&fee=${Number(poolFee) * 10000}`,
            SupswapV3: ({ token0, token1, poolFee }) => `https://supswap.xyz/add/${token0}/${token1}/${sanitizeFee(poolFee)}`,
            Iguana: ({ token0, token1, poolFee }) => `https://www.iguanadex.com/add/${token0}/${token1}/${sanitizeFee(poolFee)}?chain=${sanitizeChainName(computeChainId)}`,
            // Token symbols
            Stryke: ({ symbolToken0, symbolToken1 }) => `https://www.stryke.xyz/en/trade/arbitrum/${symbolToken0}-${symbolToken1}`,
            StrykePCS: ({ symbolToken0, symbolToken1 }) => `https://pancakeswap.stryke.xyz/${symbolToken0}-${symbolToken1}?mode=LP`,
            StrykeSushi: ({ symbolToken0, symbolToken1 }) => `https://sushiswap.stryke.xyz/${symbolToken0}-${symbolToken1}?mode=LP`,
            // Token symbols and pool fees
            Neptune: ({ symbolToken0, symbolToken1, poolFee }) => `https://app.nep.finance/add/${symbolToken0}/${symbolToken1}/${sanitizeFee(poolFee)}`,
            // Protocols without unique links for pools
            Retro: () => "https://retro.finance/liquidity/managev3",
            Horiza: () => "https:/app.horiza.io/liquidity",
            Thruster: () => "https://app.thruster.finance/add",
            Kim: () => "https://app.kim.exchange/positions",
            ARTHSWAP: () => "https://app.arthswap.org/#/pools",
            Fenix: () => "https://www.fenixfinance.io/",
            Ramses: () => "https://app.ramses.exchange/swap",
            SwapX: () => "https://swapx.fi/earn",
            ZERO: () => "https://www.zkzero.fi/",
            Hyperswap: () => "https://hyperswap.exchange/",
        };
        let ammString = params.amm.toString();
        try {
            if (params.amm === Number(Number.parseInt(params.amm.toString()))) {
                ammString = AMM[params.amm];
            }
        }
        catch { }
        return ammLinkMap[ammString]?.(params)?.toLowerCase();
    }
}
