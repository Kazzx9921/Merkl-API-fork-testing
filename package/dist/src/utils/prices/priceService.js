import { getTokensListWithCache } from "@/libs/getTokensList";
import { PriceService as PriceSourceService } from "@/modules/v4/price/price.service";
import { PriceSourceMethod } from "@db/api";
import { BN2Number, ChainId, Stable, registry } from "@sdk";
import axios from "axios";
import { Contract } from "ethers";
import { constantChain } from "../../constants";
import { log } from "../logger";
import { providers } from "../providers";
import { getChainlinkLatestPrice } from "./chainlinkRead";
import { getVirtualPrice } from "./curveVirtualPrice";
import { getDQUICKPrice } from "./getDQUICK";
import PriceFetcherFactory from "./priceFetcherFactory";
import { getERC4626Price } from "./services/getERC4626";
import { getCurveV2Price, getUniV2Price } from "./uniV2Price";
export default class PriceService {
    static instance = new PriceService();
    _prices = {};
    constructor() { }
    get prices() {
        return this._prices;
    }
    setPrices = (res) => {
        res.forEach(tokenPrice => {
            this._prices[tokenPrice.token] = tokenPrice.rate;
        });
    };
    async fetchPrices() {
        const tokenPriceSources = await PriceSourceService.findManyPriceSources({});
        /**
         * @description Factory pricer's call to get prices from different sources
         */
        try {
            for (const method of Object.values(PriceSourceMethod)) {
                if (method !== PriceSourceMethod.CONSTANT && method !== PriceSourceMethod.EQUAL_TO) {
                    await PriceFetcherFactory.instance
                        .get(PriceSourceMethod[method])
                        .getPrice(tokenPriceSources)
                        .then(this.setPrices);
                }
            }
        }
        catch (e) {
            log.error("Error fetching prices", e);
        }
        /** San Token Prices */
        this._prices["sanUSDC_EUR"] = 1.2120307 * this._prices["USDC"];
        this._prices["sanDAI_EUR"] = 1.0926287 * this._prices["DAI"];
        this._prices["sanFRAX_EUR"] = 1.077969 * this._prices["FRAX"];
        this._prices["sanFEI_EUR"] = 1.02814 * this._prices["FEI"];
        this._prices["sanWETH_EUR"] = 6.732341 * this._prices["ETH"];
        const promises = [];
        /** Sushiswap & UniV2 Prices */
        promises.push(getUniV2Price(ChainId.MAINNET, this._prices[Stable.EUR], this._prices["ANGLE"], "0x1f4c763bde1d4832b3ea0640e66da00b98831355").then(sushiEURA_ANGLE => {
            if (!!sushiEURA_ANGLE) {
                this._prices["Sushi EURA-ANGLE LP"] = sushiEURA_ANGLE;
            }
        }));
        promises.push(getUniV2Price(ChainId.MAINNET, this._prices["ANGLE"], this._prices["ETH"], "0xfb55af0ef0dcdec92bd3752e7a9237dfefb8acc0").then(sushiANGLE_ETH => {
            if (!!sushiANGLE_ETH) {
                this._prices["Sushi ANGLE-ETH LP"] = sushiANGLE_ETH;
            }
        }));
        promises.push(getUniV2Price(ChainId.MAINNET, this._prices[Stable.EUR], this._prices["FEI"], "0xf89ce5ed65737da8440411544b0499c9fad323b2").then(uni_EURA_FEI => {
            if (!!uni_EURA_FEI) {
                this._prices["Uni-V2 EURA-FEI LP"] = uni_EURA_FEI;
            }
        }));
        promises.push(getUniV2Price(ChainId.MAINNET, this._prices["stTAO"], this._prices["WETH"], "0xAe57eB8DD23C90769962d413A8802Ba68181aD0F").then(uni_stTAO_WETH => {
            if (!!uni_stTAO_WETH) {
                this._prices["0xAe57eB8DD23C90769962d413A8802Ba68181aD0F"] = uni_stTAO_WETH;
            }
        }));
        promises.push(getUniV2Price(ChainId.BLAST, this._prices["WETH"], this._prices["YIELD"], "0x3Df8AAC90Eb2FeeA4378368D46a72AF47eBDc268").then(uni_WETH_YIELD => {
            if (!!uni_WETH_YIELD) {
                this._prices["0x3Df8AAC90Eb2FeeA4378368D46a72AF47eBDc268"] = uni_WETH_YIELD;
            }
        }));
        this.setConstantPrices(tokenPriceSources);
        this.setEqualsToPrices(tokenPriceSources);
        /** Hardcoded prices  */
        this._prices["oICL"] = 0.5 * this._prices["ICL"];
        this._prices["$ERA"] = 0.001;
        this._prices["Bridged mstETH"] = this._prices["mstETH"];
        // Mock collats
        this._prices["MockCollat0"] = this._prices["EUR"];
        this._prices["MockCollat1"] = this._prices["EUR"];
        this._prices["MockCollat2"] = this._prices["EUR"];
        // USDA price
        this._prices[Stable.USD] = 1;
        this._prices["agUSD"] = 1;
        // veANGLE price
        this._prices["veANGLE"] = this._prices["ANGLE"];
        // Hardcoded prices
        this._prices["KAI"] = 0.015;
        this._prices["USSD"] = 1;
        this._prices["crvUSD"] = 1;
        for (const id in ChainId) {
            const chainId = Number(id);
            const savingsAddressUSD = registry(chainId)?.USD?.Savings;
            const savingsAddressEUR = registry(chainId)?.EUR?.Savings;
            if (!!savingsAddressUSD) {
                promises.push(getERC4626Price(chainId, savingsAddressUSD).then(sharePrice => {
                    this._prices[`stUSD-${chainId}`] = sharePrice * this._prices[Stable.USD];
                    this._prices[`STUSD-${chainId}`] = this._prices[`stUSD-${chainId}`];
                }));
            }
            if (!!savingsAddressEUR) {
                promises.push(getERC4626Price(chainId, savingsAddressEUR).then(sharePrice => {
                    this._prices[`stEUR-${chainId}`] = sharePrice * this._prices[Stable.EUR];
                    this._prices[`STEUR-${chainId}`] = this._prices[`stEUR-${chainId}`];
                }));
            }
        }
        promises.push(getERC4626Price(ChainId.MAINNET, "0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB", 6, 18).then(sharePrice => {
            this._prices["steakUSDC"] = sharePrice * this._prices["USDC"];
            this._prices["STEAKUSDC"] = this._prices["steakUSDC"];
            this._prices["Steakhouse USDC"] = this._prices["steakUSDC"];
        }));
        promises.push(getERC4626Price(ChainId.BASE, "0xbEEfa1aBfEbE621DF50ceaEF9f54FdB73648c92C", 18, 18).then(sharePrice => {
            this._prices["steakUSDA"] = sharePrice * this._prices["USDA"];
            this._prices["STEAKUSDA"] = this._prices["steakUSDA"];
            this._prices["Steakhouse USDA"] = this._prices["steakUSDA"];
        }));
        promises.push(getERC4626Price(ChainId.BASE, "0xBEeFA28D5e56d41D35df760AB53B94D9FfD7051F", 18, 18).then(sharePrice => {
            this._prices["steakEURA"] = sharePrice * this._prices["EURA"];
            this._prices["STEAKEURA"] = this._prices["steakEURA"];
            this._prices["Steakhouse EURA"] = this._prices["steakEURA"];
        }));
        promises.push(getERC4626Price(ChainId.MAINNET, "0x125D41A6e5dbf455cD9Df8F80BCC6fd172D52Cc6", 18, 18).then(sharePrice => {
            this._prices["gtUSDAcore"] = sharePrice;
            this._prices["Gauntlet USDA Core"] = sharePrice;
        }));
        promises.push(getERC4626Price(ChainId.MAINNET, "0x89D80f5e9BC88d8021b352064ae73F0eAf79EBd8", 18, 18).then(sharePrice => {
            this._prices["Re7USDA"] = sharePrice;
            this._prices["Re7 USDA"] = sharePrice;
        }));
        promises.push(getDQUICKPrice(ChainId.POLYGON, "0x958d208Cdf087843e9AD98d23823d32E17d723A1").then(sharePrice => {
            this._prices["dQUICK"] = sharePrice * this._prices["QUICK"];
            this._prices["DQUICK"] = this._prices["dQUICK"];
        }));
        promises.push(getVirtualPrice(ChainId.MAINNET, "0xb9446c4Ef5EBE66268dA6700D26f96273DE3d571").then(virtualPrice => {
            this._prices["Curve 3EUR LP"] = virtualPrice * this._prices[Stable.EUR];
        }));
        promises.push(getVirtualPrice(ChainId.MAINNET, "0xB37D6c07482Bc11cd28a1f11f1a6ad7b66Dec933").then(virtualPrice => {
            this._prices["Curve EURA-ibEUR LP"] = virtualPrice * this._prices[Stable.EUR];
        }));
        promises.push(getVirtualPrice(ChainId.MAINNET, constantChain[ChainId.MAINNET].crvANGLESDANGLE).then(virtualPrice => {
            this._prices["Curve sdANGLE-ANGLE LP"] = virtualPrice * this._prices["ANGLE"];
        }));
        promises.push(getVirtualPrice(ChainId.MAINNET, constantChain[ChainId.MAINNET].crvEuropool).then(virtualPrice => {
            this._prices["Curve Europool LP"] = virtualPrice * this._prices[Stable.EUR];
        }));
        promises.push(getVirtualPrice(ChainId.MAINNET, constantChain[ChainId.MAINNET].crvEURAEUROC).then(virtualPrice => {
            this._prices["Curve EURA-EUROC LP"] = virtualPrice * this._prices[Stable.EUR];
        }));
        promises.push(getVirtualPrice(ChainId.MAINNET, constantChain[ChainId.MAINNET].crvEURAEURe).then(virtualPrice => {
            this._prices["Curve EURA-EURe LP"] = virtualPrice * this._prices[Stable.EUR];
        }));
        promises.push(getChainlinkLatestPrice(ChainId.MAINNET, "0x32d1463EB53b73C095625719Afa544D5426354cB").then(chainlinkPrice => {
            this._prices["bIB01"] = chainlinkPrice;
            this._prices["IB01"] = chainlinkPrice;
        }));
        promises.push(getChainlinkLatestPrice(ChainId.ARBITRUM, "0x1940fEd49cDBC397941f2D336eb4994D599e568B").then(chainlinkPrice => {
            this._prices["zZRO"] = chainlinkPrice;
        }));
        promises.push(getChainlinkLatestPrice(ChainId.MAINNET, "0x9E8E794ad6Ecdb6d5c7eaBE059D30E907F58859b").then(chainlinkPrice => {
            this._prices["bHIGH"] = chainlinkPrice * this._prices["EUR"];
            this._prices["HIGH"] = chainlinkPrice * this._prices["EUR"];
        }));
        promises.push(getChainlinkLatestPrice(ChainId.MAINNET, "0x6E27A25999B3C665E44D903B2139F5a4Be2B6C26").then(chainlinkPrice => {
            this._prices["bC3M"] = chainlinkPrice * this._prices["EUR"];
            this._prices["C3M"] = chainlinkPrice * this._prices["EUR"];
        }));
        promises.push(getChainlinkLatestPrice(ChainId.MAINNET, "0x475855DAe09af1e3f2d380d766b9E630926ad3CE").then(chainlinkPrice => {
            this._prices["bERNX"] = chainlinkPrice * this._prices["EUR"];
            this._prices["ERNX"] = chainlinkPrice * this._prices["EUR"];
        }));
        promises.push(getChainlinkLatestPrice(ChainId.MAINNET, "0x2674Cc47786740432b895a70D92CFDfB1d5BF798").then(chainlinkPrice => {
            this._prices["bERNA"] = chainlinkPrice;
            this._prices["ERNA"] = chainlinkPrice;
        }));
        promises.push(getChainlinkLatestPrice(ChainId.ARBITRUM, "0x395D5c5D552Df670dc4B2B1cef0c4EABfFba492f").then(chainlinkPrice => {
            this._prices["gmBTC"] = chainlinkPrice;
        }));
        promises.push(getChainlinkLatestPrice(ChainId.ARBITRUM, "0xfB3264D1129824933a52374c2C1696F4470D041e").then(chainlinkPrice => {
            this._prices["gmETH"] = chainlinkPrice;
        }));
        promises.push(getCurveV2Price(ChainId.MAINNET, this._prices, "0x58257e4291F95165184b4beA7793a1d6F8e7b627", constantChain[ChainId.MAINNET].crvFRAXEURA).then(virtualPrice => {
            this._prices["Curve EURA-FRAXBP LP"] = virtualPrice * this._prices[Stable.EUR];
        }));
        await Promise.allSettled(promises);
        /** Camelot API price completion */
        try {
            await axios
                .get("https://api.camelot.exchange/tokens")
                .then(res => {
                if (!!res.data.data.tokens) {
                    for (const x of Object.values(res.data.data.tokens)) {
                        if (this._prices[x.symbol] === undefined || this._prices[x.symbol] === null) {
                            this._prices[x.symbol] = x.price;
                        }
                    }
                }
            });
        }
        catch (error) {
            log.error("❌ call to fetch camelot api price failed", error);
        }
        /** Flux price completion */
        promises.push((async () => {
            try {
                const d = await new Contract("0x465a5a630482f3abD6d3b84B39B29b07214d19e5", ["function exchangeRateStored() external view returns(uint256)"], providers[ChainId.MAINNET]).exchangeRateStored();
                this._prices["fUSDC"] = this._prices["USDC"] * BN2Number(d) * 100;
                this._prices["FUSDC"] = this._prices["fUSDC"];
            }
            catch (e) { }
        })());
        // Radiant prices
        this._prices["rUSDCn"] = this._prices["USDC"];
        for (const x of ["USDC", "USDT", "wstETH", "ARB", "wBTC", "DAI", "ETH"]) {
            this._prices[`r${x}n`] = this._prices[x];
            this._prices[`variableDebt${x}n`] = this._prices[x];
            this._prices[`r${x}`] = this._prices[x];
            this._prices[`variableDebt${x}`] = this._prices[x];
            const xUpper = x.toUpperCase();
            this._prices[`r${xUpper}n`] = this._prices[x];
            this._prices[`variableDebt${xUpper}n`] = this._prices[x];
            this._prices[`r${xUpper}`] = this._prices[x];
            this._prices[`variableDebt${xUpper}`] = this._prices[x];
        }
        /**
         * @deprecated - Fill all BorrowStaker prices
         */
        const tokens = await getTokensListWithCache();
        for (const chainIdString of Object.keys(tokens)) {
            const chainId = Number.parseInt(chainIdString);
            for (const token of Object.values(tokens?.[chainId] ?? {})) {
                if (token.wrappingMethod === "BorrowStaker" && !!token.underlyingTokens) {
                    this._prices[token.address] = this._prices[token.underlyingTokens[0]];
                }
            }
        }
        return this._prices;
    }
    setConstantPrices(tokens) {
        const filteredTokens = tokens.filter(token => token.method === PriceSourceMethod.CONSTANT);
        if (filteredTokens.length === 0)
            return [];
        return filteredTokens.forEach(token => {
            const args = token.args;
            if (args.value !== null && args.value !== undefined) {
                this._prices[token.symbol] = args.value;
            }
            else
                log.warn(`❌ constant price ${token.symbol} has incorrect value in database`);
        });
    }
    setEqualsToPrices(tokens) {
        const filteredTokens = tokens.filter(tokenPriceSource => tokenPriceSource.method === PriceSourceMethod.EQUAL_TO);
        if (filteredTokens.length === 0)
            return [];
        return filteredTokens
            .filter(token => token.method === PriceSourceMethod.EQUAL_TO)
            .forEach(token => {
            const args = token.args;
            if (args.token !== null && args.token !== undefined) {
                this._prices[token.symbol] = this._prices[args.token];
            }
            else
                log.warn(`❌ equalsTo price ${token.symbol} has incorrect value in database`);
        });
    }
}
