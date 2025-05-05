import { getEulerV2Vaults, updateEulerVaultsCollatInDatabase, } from "@/engine/deprecated/dynamicData/utils/getEulerV2Vaults";
import { TTLPresets } from "@/modules/v4/cache/cache.model";
import { CacheService } from "@/modules/v4/cache/cache.service";
import { logger } from "@/utils/logger";
(async () => {
    try {
        // First update collat values directly in database
        await updateEulerVaultsCollatInDatabase();
        // Second update Redis cache
        await CacheService.set(TTLPresets.DAY_1, getEulerV2Vaults);
    }
    catch (e) {
        console.error(e);
        process.exit(1);
    }
    logger.info("✅ Euler update exited successfully");
    process.exit(0);
})();
