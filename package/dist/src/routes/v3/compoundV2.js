import { getCompoundV2ForksVaultsWithCache } from "@/engine/deprecated/dynamicData/utils/getCompV2ForksVaults";
import { t } from "elysia";
export const response = t.Array(t.Object({ address: t.String(), asset: t.String(), chaind: t.Number(), debtTokenAddress: t.String() }));
export default (app) => app.get("/compoundV2", async () => {
    return await getCompoundV2ForksVaultsWithCache();
}, {
    query: t.Object({}),
    tags: ["Protocols"],
});
