import { Redis } from "@/cache";
import { hashArray } from "@/utils/hashArray";
import { getMorphoMarkets, getRadiantMarkets, getSiloMarkets } from "@sdk";
export const getMorphoMarketsWithCache = async (chainId, subtype) => {
    return await Redis.getOrSet(`MorphoMarkets_${hashArray([chainId, subtype])}`, getMorphoMarkets, chainId, subtype);
};
export const getRadiantMarketsWithCache = async (chainId, poolAddressProvider) => await Redis.getOrSet(`RadiantMarkets_${hashArray(chainId, poolAddressProvider)}$`, getRadiantMarkets, chainId, poolAddressProvider);
export const getSiloMarketsWithCache = async (chainId, repository) => await Redis.getOrSet(`SiloMarkets_${hashArray([chainId, repository])}`, getSiloMarkets, chainId, repository);
