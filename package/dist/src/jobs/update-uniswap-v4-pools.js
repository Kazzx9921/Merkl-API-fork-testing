import { TTLPresets } from "@/modules/v4/cache/cache.model";
import { CacheService } from "@/modules/v4/cache/cache.service";
import { UniswapService } from "@/modules/v4/uniswap/uniswap.service";
async function main() {
    try {
        await CacheService.set(TTLPresets.DAY_1, UniswapService.getUniswapV4Pools);
        process.exit(0);
    }
    catch (err) {
        console.error("Failed to update Uniswap V4 pools cache.");
        console.error(err);
        process.exit(1);
    }
}
await main();
