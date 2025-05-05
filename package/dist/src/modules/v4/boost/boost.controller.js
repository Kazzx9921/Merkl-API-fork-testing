import Elysia from "elysia";
import { getEulerBoostBody, getZksyncBoost } from "./boost.model";
import { BoostService } from "./boost.service";
export const BoostController = new Elysia({ prefix: "/boosts", detail: { tags: ["Boosts"], hide: true } })
    // ─── Get Euler Boost ─────────────────────────────────────────────────
    .post("/euler", async () => BoostService.getEulerBoost(), {
    body: getEulerBoostBody,
    detail: { hide: true },
})
    .get("/euler", async () => BoostService.getEulerBoost())
    .post("/openblock/zksync", async ({ query, body }) => BoostService.getOpenBlockBoost(query, body), {
    query: getZksyncBoost,
    body: getEulerBoostBody,
    detail: { hide: true },
});
