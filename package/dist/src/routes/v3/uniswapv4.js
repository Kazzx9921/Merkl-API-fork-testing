import { CacheService } from "@/modules/v4/cache/cache.service";
import { ChainUniqueDto } from "@/modules/v4/chain/chain.model";
import { Bytes32Dto, UniV4ChainIdArray, } from "@/modules/v4/uniswap/uniswap.model";
import { UniswapService } from "@/modules/v4/uniswap/uniswap.service";
import { UnsupportedNetwork } from "@/utils/error";
export default (app) => app.group("/uniswapv4", router => router
    .get("/", async () => {
    return await CacheService.get(UniswapService.getUniswapV4Pools, []);
}, {
    tags: ["uniswapv4"],
})
    .get("/:chainId", async ({ params }) => {
    return (await CacheService.get(UniswapService.getUniswapV4Pools, []))?.[params.chainId];
}, {
    params: ChainUniqueDto,
    beforeHandle: ({ params }) => {
        if (!UniV4ChainIdArray.includes(params.chainId))
            throw new UnsupportedNetwork(params.chainId);
    },
    tags: ["uniswapv4"],
})
    .get("/pool/:poolId", async ({ params }) => {
    return Object.values((await CacheService.get(UniswapService.getUniswapV4Pools, [])))
        .flatMap(x => (x ? Object.values(x) : []))
        .filter(p => p.poolId === params.poolId);
}, {
    params: Bytes32Dto,
    tags: ["uniswapv4"],
}));
