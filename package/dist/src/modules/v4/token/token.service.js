import { HttpError } from "@/errors";
import { getOnlyUserBalance } from "@/libs/tokens/balances";
import { BucketService } from "@/modules/v4/bucket/bucket.service";
import { TTLPresets } from "@/modules/v4/cache/cache.model";
import { CacheService } from "@/modules/v4/cache/cache.service";
import { CoingeckoService } from "@/modules/v4/coingecko/coingecko.service";
import { IconService } from "@/modules/v4/icon/icon.service";
import { PriceService } from "@/modules/v4/price/price.service";
import { log } from "@/utils/logger";
import { throwOnInvalidRequiredAddress, throwOnUnsupportedChainId } from "@/utils/throw";
import { Prisma } from "@db/api";
import { ChainInteractionService, DistributionCreatorService, NETWORK_LABELS, NULL_ADDRESS, bigIntToNumber, withTimeout, } from "@sdk";
import { getAddress, isAddress, parseUnits } from "viem";
import { ChainService } from "../chain/chain.service";
import { TokenRepository } from "./token.repository";
export class TokenService {
    static hashId(token) {
        return Bun.hash(`${token.chainId}${token.address}`).toString();
    }
    static format(token) {
        const { displaySymbol, symbol, ...rest } = token;
        return {
            ...rest,
            symbol: !displaySymbol || displaySymbol === "" ? symbol : displaySymbol,
        };
    }
    static async fetchNativeBalance(chainId, userAddress) {
        return await ChainInteractionService(chainId).provider().getBalance(userAddress);
    }
    /**
     * Fetches balances of provided tokens
     */
    static async fetchBalances(chainId, userAddress, tokens) {
        const nativeTokenBalance = await TokenService.fetchNativeBalance(chainId, userAddress);
        const balances = await getOnlyUserBalance(chainId, userAddress, tokens.filter(({ isNative }) => !isNative).map(t => t.address));
        const tokensWithBalances = tokens.map(t => {
            const balance = (() => {
                if (t.isNative)
                    return { balance: nativeTokenBalance.toString() };
                return (balances[t.address] ??
                    balances[Object.keys(balances).find(a => a?.toLowerCase() === t.address?.toLowerCase()) ?? ""]);
            })();
            return Object.assign(t, { balance: BigInt(balance?.balance ?? 0) });
        });
        return tokensWithBalances.sort((b, a) => {
            const aN = parseUnits(a.balance.toString(), a.decimals);
            const bN = parseUnits(b.balance.toString(), b.decimals);
            return aN < bN ? -1 : aN > bN ? 1 : 0;
        });
    }
    /**
     * Fetches tokens and include balances
     */
    static async fetchTokensAndBalances(chainId, userAddress, addresses) {
        const tokens = await TokenService.findManyOrCreate(addresses?.map(address => ({ chainId, address })));
        return TokenService.fetchBalances(chainId, userAddress, tokens);
    }
    /**
     * Fetches balances of verified tokens
     * @info tokens that are popular and must be detected in the app are marked as 'verified'
     * @param additionalTokens balances along with the verified ones
     */
    static async fetchVerifiedAndNativeBalances(chainId, userAddress, additionalTokenAddresses) {
        const verifiedTokens = await CacheService.wrap(TTLPresets.MIN_5, TokenService.findMany, {
            chainId,
            verified: true,
        });
        const nativeTokens = (await CacheService.wrap(TTLPresets.MIN_5, TokenService.findMany, {
            chainId,
            isNative: true,
        })).filter(t => !!t);
        const additionalTokens = !!additionalTokenAddresses?.length
            ? await TokenService.findManyOrCreate(additionalTokenAddresses?.map(address => ({ chainId, address })))
            : [];
        const allTokens = verifiedTokens.concat(additionalTokens).concat(nativeTokens);
        return TokenService.fetchBalances(chainId, userAddress, allTokens);
    }
    static async fetchOnChain(token) {
        const onchainData = token.address === NULL_ADDRESS
            ? {
                name: `${NETWORK_LABELS[token.chainId]} Native Token`,
                symbol: `${NETWORK_LABELS[token.chainId]} Native Token`,
                decimals: 18,
            }
            : await TokenRepository.getTokenInfo(token);
        try {
            // biome-ignore lint/suspicious/noControlCharactersInRegex: <explanation>
            onchainData.name = Buffer.from(onchainData.name.replace(/\u0000/g, ""), "utf-8").toString("utf-8");
            // biome-ignore lint/suspicious/noControlCharactersInRegex: <explanation>
            onchainData.symbol = Buffer.from(onchainData.symbol.replace(/\u0000/g, ""), "utf-8").toString("utf-8");
        }
        catch (e) {
            console.error(e);
        }
        return {
            chainId: token.chainId,
            address: token.address,
            icon: "",
            ...Object.assign({
                name: "unknown",
                decimals: 18,
                symbol: "UNKNOWN",
                verified: false,
                isTest: false,
                isPoint: false,
                isPreTGE: false,
                isNative: false,
            }, onchainData),
        };
    }
    static async fetchManyOnChain(chainId, addresses) {
        const tokens = {};
        // Batch onchain calls together when multiples
        for (const address of addresses) {
            tokens[address] = await TokenService.fetchOnChain({ chainId, address });
        }
        return tokens;
    }
    /**
     * Updates price of tokens that share the same symbol
     * @param symbol
     * @param price value
     * @param excludeAddresses to not update symbols that defined using addresses
     */
    static async updateSymbolPrices(symbol, price, excludeAddresses) {
        return await TokenRepository.updateSymbolPrices(symbol, price, excludeAddresses);
    }
    /**
     * Updates price of tokens that share the same address
     * @param address
     * @param price value
     * @param chainId
     */
    static async updateAddressPrices(address, price, chainId) {
        return await TokenRepository.updateAddressPrices(address, price, chainId);
    }
    /**
     * Updates price of tokens that share the same symbol
     * @param symbol
     * @param price value
     * @param excludeAddresses to not update symbols that defined using addresses
     */
    static async updatePrices(pricer) {
        const pricedAddresses = Object.keys(pricer.prices).filter(address => address.startsWith("0x"));
        const symbols = Object.keys(pricer.prices).filter(address => !address.startsWith("0x"));
        for (const symbol of symbols) {
            const price = await pricer.get({ symbol });
            if (!price)
                continue;
            await TokenService.updateSymbolPrices(symbol, price, pricedAddresses);
        }
        for (const address of pricedAddresses) {
            const price = await pricer.get({ address });
            if (!price)
                continue;
            await TokenService.updateAddressPrices(address, price);
        }
    }
    /**
     * Read token from database
     * @param chainId
     * @param address
     */
    static async findUniqueOrThrow(token) {
        const id = typeof token === "string" ? token : TokenService.hashId(token);
        return await TokenRepository.findUniqueOrThrow(id);
    }
    /**
     * Read token from database, tries to fill it if unexistant
     * @param chainId
     * @param address
     */
    static async findUniqueFillOrThrow(token) {
        const id = TokenService.hashId(token);
        let result = await TokenRepository.findUnique(id);
        if (!result) {
            await TokenService.fillAndCreate({
                chainId: token.chainId,
                address: token.address,
                verified: false,
                icon: "",
            });
            result = await TokenRepository.findUniqueOrThrow(id);
        }
        return result;
    }
    /**
     * Checks if two tokens are the same based on chainId/address combo
     * @param a token
     * @param b token
     * @returns true if both tokens are the same
     */
    static async isSame(a, b) {
        return a.chainId === b.chainId && a.address?.toLowerCase() === b.address?.toLowerCase();
    }
    /**
     * Get the list of tokens satisfying the query
     * @param query
     * @returns A list of tokens
     */
    static async findMany(query) {
        return (await TokenRepository.findMany(query)).map(TokenService.format);
    }
    /**
     * Get the list of tokens satisfying the query or fetch if chainId and address are provided
     * @param query
     * @returns A list of tokens
     */
    static async findManyOrFetch(query) {
        const isTokenAddress = query.chainId && query.search && isAddress(query.search);
        const foundTokens = (await TokenRepository.findMany(isTokenAddress ? { ...query, address: query.search } : query)).map(TokenService.format);
        if (isTokenAddress &&
            !foundTokens.some(t => TokenService.isSame(t, { chainId: query.chainId, address: query.search }))) {
            const token = await TokenService.fetchOnChain({ chainId: query.chainId, address: query.search });
            //Assigning a temporary id since token is not in the database
            token && foundTokens.push({ ...token, id: `tmp-${token.chainId}-${token.address}` });
        }
        return foundTokens;
    }
    static async getPrice(query) {
        const tokensFound = (await TokenRepository.findMany(query)).map(TokenService.format);
        if (tokensFound.length === 0) {
            log.warn(`TokenService.getPrice: No token found for ${query.address} on ${query.chainId ? NETWORK_LABELS[query.chainId] : "unknwon"}. Returning 0 as price.`);
            return 0;
        }
        // In the case of points, we want to be able to compute X points distributed per $ of TVL, hence returning 1.
        const priceToken = tokensFound[0].isPoint ? 1 : (tokensFound[0].price ?? 0);
        return priceToken;
    }
    static async findManyObjectPerAddress(query) {
        return (await CacheService.wrap(TTLPresets.MIN_10, TokenService.findMany, query)).reduce((acc, token) => {
            acc[token.address] = token;
            return acc;
        }, {});
    }
    static async getRewardTokenPrice(campaign) {
        const query = {
            chainId: campaign.chainId,
            address: campaign.rewardToken,
            symbol: campaign.campaignParameters.symbolRewardToken,
        };
        const priceRewardToken = await TokenService.getPrice(query);
        return priceRewardToken;
    }
    /**
     * Get value of tokens
     * @param tokenAmounts address/chain + amount of token
     * @returns the cumulated dollar value of all tokens
     */
    static async getValue(tokenAmounts) {
        const tokens = await TokenService.findManyOrCreate(tokenAmounts.map(({ address, chainId }) => ({ address, chainId })));
        return tokenAmounts.reduce((sum, { amount, address, chainId }) => {
            const token = tokens.find(({ address: addr, chainId: chain }) => addr === address && chainId === chain);
            if (!token)
                return sum;
            const value = (bigIntToNumber(amount ?? 0n, token.decimals) ?? 0) * (token.price ?? 0);
            return sum + value;
        }, 0);
    }
    static async getValueByTokenId(id, amount) {
        const token = await TokenService.findUniqueOrThrow(id);
        return (bigIntToNumber(amount, token.decimals) ?? 0) * (token.price ?? 0);
    }
    /**
     * Counts the number of tokens that complies to query
     * @description used for pagination purposes
     * @param query
     * @returns the number of tokens
     */
    static async countMany(query) {
        return await TokenRepository.countMany(query);
    }
    static async findChains() {
        return await TokenRepository.findChains();
    }
    /**
     * Read token from DB or fetch onchain
     * @param chainId
     * @param address
     */
    static async findManyOrCreate(tokens) {
        return await Promise.all(tokens.map(async (token) => {
            const id = TokenService.hashId(token);
            try {
                return await TokenRepository.findUniqueOrThrow(id);
            }
            catch (err) {
                try {
                    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2025") {
                        return TokenService.format(await TokenService.fillAndCreate({
                            ...token,
                            verified: false,
                            icon: "",
                        }));
                    }
                }
                catch (_err) { }
                throw new HttpError(`Failed to fetch or create token ${token.address} on chain ${token.chainId}.`);
            }
        }));
    }
    static async getAllValidRewardTokens(query) {
        const chainIds = !!query.chainId
            ? query.chainId?.split(",").map(n => Number.parseInt(n))
            : (await ChainService.findMany({
                test: true,
            })).map(chain => chain.id);
        return await CacheService.wrap(TTLPresets.MIN_5, async (chainIds) => {
            /** Fetch current Merkle Roots */
            const promises = await Promise.allSettled(chainIds.map(chainId => withTimeout(TokenService.getValidRewardTokens(chainId), 5_000)));
            /** Filter out unsuccessful chainIds */
            chainIds = chainIds.filter((_, index) => promises[index].status === "fulfilled");
            return promises
                .filter(({ status }) => status === "fulfilled")
                .reduce((acc, promise, index) => {
                acc[chainIds[index]] = promise.value;
                return acc;
            }, {});
        }, chainIds);
    }
    static async getValidRewardTokens(chainId) {
        const validRewardTokens = await DistributionCreatorService(chainId).validRewardTokens();
        return (await TokenRepository.findList(chainId, validRewardTokens.map(t => getAddress(t.token)))).map(x => {
            return {
                ...x,
                minimumAmountPerHour: validRewardTokens
                    .find(t => getAddress(t.token) === x.address)
                    ?.minimumAmountPerEpoch.toString(),
            };
        });
    }
    static async update(id, data) {
        return await TokenRepository.update(id, data);
    }
    static async notionWebhook(body) {
        const env = process.env.ENV === "prod" ? "production" : process.env.ENV;
        const properties = body.data.properties;
        const file = properties["Icon (Required)"].files[0];
        const iconURL = "external" in file ? file.external.url : file.file.url;
        const icon = await fetch(iconURL);
        const mimeType = icon.headers.get("content-type");
        const extension = mimeType.split("/")[1].split("+")[0];
        const address = throwOnInvalidRequiredAddress(properties["Address (in checksum format) (Required)"].rich_text[0].plain_text);
        const chainId = properties["Chain ID (Required)"].number;
        throwOnUnsupportedChainId(chainId);
        const displaySymbol = properties["Symbol (Optional)"].rich_text[0]?.plain_text;
        const coingeckoApiId = properties["CoinGecko API ID (Recommended)"].rich_text[0]?.plain_text;
        const [token] = await TokenService.findManyOrCreate([
            {
                chainId,
                address,
            },
        ]);
        if (!token || !token.name)
            throw new HttpError(`Failed to fetch on-chain data for token ${token?.symbol} (${address} on chainId ${chainId}).`);
        try {
            await IconService.pullPush(iconURL, new BucketService("merkl-static-assets", `angle-${env}-1`), {
                name: `tokens/${token.symbol}`,
            });
            token.icon = `${process.env.GCS_ENDPOINT}/merkl-static-assets/tokens/${token.symbol}.${extension}`;
        }
        catch (err) {
            log.error(`[${token.id} (${chainId} | ${address})] Failed to pull / push from Notion to GCP. Using Notion URI for now.`, err);
            token.icon = iconURL;
        }
        if (coingeckoApiId) {
            try {
                await PriceService.createPriceSource({
                    method: "COINGECKO",
                    symbol: token.symbol,
                    args: { ticker: coingeckoApiId },
                });
            }
            catch (err) {
                log.error("Failed to create price source.", err);
            }
        }
        return await TokenService.update(token.id, {
            icon: token.icon,
            displaySymbol: displaySymbol && displaySymbol !== "" ? displaySymbol : token.symbol,
            name: token.name,
            verified: true,
        });
    }
    /**
     * Fetches symbol, address, decimals and creates token on database
     * @param chainId
     * @param address
     */
    static async fillAndCreate(token) {
        const id = TokenService.hashId(token);
        const filledData = await TokenService.fetchOnChain({ address: token.address, chainId: token.chainId });
        try {
            const coingeckoToken = await CoingeckoService.findList();
            const coingeckoTokenData = coingeckoToken.find(t => t.symbol === filledData.symbol && t.name === filledData.name);
            if (!!coingeckoTokenData) {
                await CoingeckoService.createPriceSourceForSymbolIfMissing(filledData.symbol, coingeckoTokenData.id);
                if (!token.icon || token.icon === "") {
                    const coingeckoIcon = (await CoingeckoService.findMarkets([coingeckoTokenData.id]))[0].image;
                    token.icon = coingeckoIcon;
                    log.info(`completed with coingecko icon: ${coingeckoIcon}`);
                }
            }
        }
        catch {
            log.warn("coingecko token autocompletion failed");
        }
        return await TokenRepository.upsert({ ...filledData, ...token, id });
    }
}
