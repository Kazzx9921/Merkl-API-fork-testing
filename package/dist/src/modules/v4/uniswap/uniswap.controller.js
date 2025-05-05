import { AuthorizationHeadersDto, BackOfficeGuard } from "@/guards/BackOffice.guard";
import { CacheService } from "@/modules/v4/cache/cache.service";
import { UnsupportedNetwork } from "@/utils/error";
import { throwOnInvalidAddress, throwOnInvalidRequiredAddress, throwOnUnsupportedChainId } from "@/utils/throw";
import Elysia, { t } from "elysia";
import { TTLPresets } from "../cache/cache.model";
import { ChainUniqueDto } from "../chain/chain.model";
import { Bytes32Dto, RewardsPerPositionDto, UniV4ChainIdArray, UniswapV4PoolDto, } from "./uniswap.model";
import { UniswapService } from "./uniswap.service";
export const UniswapController = new Elysia({
    prefix: "uniswap",
    detail: { tags: ["Uniswap"] },
})
    .group("/reward", app => {
    return app
        .get("/3", async ({ query }) => {
        return await UniswapService.findRewardsPerPosition("v3", query);
    }, {
        query: RewardsPerPositionDto,
        beforeHandle: ({ query }) => {
            query.address = throwOnInvalidRequiredAddress(query.address);
            if (!!query.chainId)
                throwOnUnsupportedChainId(query.chainId);
            query.pool = throwOnInvalidAddress(query.pool);
        },
        detail: {
            description: "Get rewards earned grouped by pool and Uniswap V3 position. Warning: this endpoint is still in beta.",
        },
    })
        .get("/4", async ({ query }) => {
        return await UniswapService.findRewardsPerPosition("v4", query);
    }, {
        query: RewardsPerPositionDto,
        beforeHandle: ({ query }) => {
            query.address = throwOnInvalidRequiredAddress(query.address);
            if (!!query.chainId)
                throwOnUnsupportedChainId(query.chainId);
        },
        detail: {
            description: "Get rewards earned grouped by pool and Uniswap V4 position. Warning: this endpoint is still in beta.",
        },
    });
})
    .group("/v4", app => {
    return app
        .get(
    // TODO: add pagination
    "/pools", async () => {
        return await CacheService.wrap(TTLPresets.DAY_1, UniswapService.getUniswapV4Pools);
    }, {
        detail: {
            description: "Get Uniswap V4 pools by chain",
            hide: true,
        },
    })
        .get("pools/:chainId", async ({ params }) => {
        return ((await CacheService.wrap(TTLPresets.DAY_1, UniswapService.getUniswapV4Pools))[params.chainId] ?? {});
    }, {
        params: ChainUniqueDto,
        beforeHandle: ({ params }) => {
            if (!UniV4ChainIdArray.includes(params.chainId))
                throw new UnsupportedNetwork(params.chainId);
        },
        response: t.Record(t.String(), // poolId
        UniswapV4PoolDto),
        detail: {
            hide: true,
        },
    })
        .get("/:poolId", async ({ params }) => {
        return Object.values(await CacheService.wrap(TTLPresets.DAY_1, UniswapService.getUniswapV4Pools))
            .flatMap(x => (x ? Object.values(x) : []))
            .filter(p => p.poolId === params.poolId);
    }, {
        params: Bytes32Dto,
        response: t.Array(UniswapV4PoolDto),
        detail: {
            hide: true,
        },
    })
        .post("/update", async () => {
        await CacheService.set(TTLPresets.DAY_1, UniswapService.getUniswapV4Pools);
    }, {
        headers: AuthorizationHeadersDto,
        beforeHandle: BackOfficeGuard,
        detail: { hide: true },
    })
        .post("/update/:chainId", async ({ params }) => {
        await CacheService.set(TTLPresets.DAY_1, UniswapService.getUniswapV4Pools, params.chainId);
    }, {
        params: ChainUniqueDto,
        headers: AuthorizationHeadersDto,
        beforeHandle: async ({ params, headers }) => {
            await BackOfficeGuard({ headers });
            if (!UniV4ChainIdArray.includes(params.chainId))
                throw new UnsupportedNetwork(params.chainId);
        },
        detail: { hide: true },
    });
});
