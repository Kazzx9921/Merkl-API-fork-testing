import { getEulerV2Vaults, updateEulerVaultsCollatInDatabase, } from "@/engine/deprecated/dynamicData/utils/getEulerV2Vaults";
import { AuthorizationHeadersDto, BackOfficeGuard } from "@/guards/BackOffice.guard";
import { TTLPresets } from "@/modules/v4/cache/cache.model";
import { CacheService } from "@/modules/v4/cache/cache.service";
import { ChainUniqueDto } from "@/modules/v4/chain/chain.model";
import { UnsupportedNetwork } from "@/utils/error";
import { eulerChainIds } from "@sdk";
import { t } from "elysia";
export default (app) => app.group("/euler", router => router
    .get("/", async () => {
    return await CacheService.get(getEulerV2Vaults, []);
}, {
    tags: ["euler"],
})
    .get("/:chainId", async ({ params, query }) => {
    return (await CacheService.get(getEulerV2Vaults, []))
        ?.filter(v => v.chainId === params.chainId)
        .filter(v => (!!query.vaultAddress ? v.address === query.vaultAddress : true));
}, {
    params: ChainUniqueDto,
    query: t.Object({
        vaultAddress: t.Optional(t.String()),
    }),
    beforeHandle: ({ params }) => {
        if (!eulerChainIds.includes(params.chainId))
            throw new UnsupportedNetwork(params.chainId);
    },
    tags: ["euler"],
})
    .post("/update", async () => {
    await updateEulerVaultsCollatInDatabase();
    await CacheService.set(TTLPresets.DAY_1, getEulerV2Vaults);
}, {
    headers: AuthorizationHeadersDto,
    beforeHandle: BackOfficeGuard,
    tags: ["euler"],
})
    .post("/update/:chainId", async ({ params }) => {
    await updateEulerVaultsCollatInDatabase(params.chainId);
    await CacheService.set(TTLPresets.DAY_1, getEulerV2Vaults);
    // // DEBUG ONLY
    // return await getEulerV2Vaults(params.chainId);
}, {
    params: ChainUniqueDto,
    headers: AuthorizationHeadersDto,
    beforeHandle: async ({ params, headers }) => {
        if (!eulerChainIds.includes(params.chainId))
            throw new UnsupportedNetwork(params.chainId);
        await BackOfficeGuard({ headers });
    },
    tags: ["euler"],
}));
