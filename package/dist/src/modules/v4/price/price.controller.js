import { ConflictError } from "@/errors/Conflict.error";
import { AuthorizationHeadersDto, BackOfficeGuard } from "@/guards/BackOffice.guard";
import Elysia from "elysia";
import { CreatePriceSourceDto, PriceSourceIdentifier, UpdatePriceSourceDto } from "./price.model";
import { PriceService } from "./price.service";
// ─── Prices Controller ───────────────────────────────────────────────────────
export const PriceController = new Elysia({ prefix: "/prices", detail: { tags: ["Prices"], hide: true } })
    // ─── Get All Prices ──────────────────────────────────────────────────
    .get("/", async () => await PriceService.findMany())
    .get("/array", async () => await PriceService.findManyArray())
    // ─── Get Price By Token Symbol ───────────────────────────────────────
    .get("/symbol/:symbol", async ({ params }) => await PriceService.fetchPriceBySymbol(params.symbol), {
    params: PriceSourceIdentifier,
})
    // ─── Price Sources Group ─────────────────────────────────────────────
    .group("/sources", app => {
    return (app
        // ─── Get All Price Sources ───────────────────
        .get("/", async () => await PriceService.findManyPriceSources({}))
        // ─── Get Price Source By Token Symbol ────────
        .get("/symbol/:symbol", async ({ params }) => await PriceService.getPriceSourceBySymbol(params.symbol), {
        params: PriceSourceIdentifier,
    })
        // ─── Create A Price Source ───────────────────
        .post("/", async ({ body }) => {
        try {
            return await PriceService.createPriceSource(body);
        }
        catch (err) {
            if (err && err.code === "P2002") {
                throw new ConflictError();
            }
            throw err;
        }
    }, {
        headers: AuthorizationHeadersDto,
        body: CreatePriceSourceDto,
        beforeHandle: BackOfficeGuard,
        detail: { hide: true },
    })
        // ─── Update A Price Source ───────────────────
        .patch("/symbol/:symbol", async ({ params, body }) => await PriceService.updatePriceSource(params.symbol, body), {
        headers: AuthorizationHeadersDto,
        params: PriceSourceIdentifier,
        body: UpdatePriceSourceDto,
        beforeHandle: BackOfficeGuard,
        detail: { hide: true },
    })
        // ─── Delete A Price Source ───────────────────
        .delete("/symbol/:symbol", async ({ params }) => await PriceService.deletePriceSource(params.symbol), {
        headers: AuthorizationHeadersDto,
        params: PriceSourceIdentifier,
        beforeHandle: BackOfficeGuard,
        detail: { hide: true },
    }));
});
