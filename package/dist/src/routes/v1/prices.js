import { PriceService } from "@/modules/v4/price/price.service";
import { t } from "elysia";
export const response = t.Array(t.Object({ rate: t.Number(), token: t.String() }));
export default (app) => app.get("/prices", async () => {
    return await PriceService.findManyArray();
}, {
    query: t.Object({}),
    tags: ["Onchain"],
});
