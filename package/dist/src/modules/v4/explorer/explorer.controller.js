import { AuthorizationHeadersDto, BackOfficeGuard } from "@/guards/BackOffice.guard";
import Elysia from "elysia";
import { CreateExplorerDto } from "./explorer.model";
import { ExplorerService } from "./explorer.service";
// ─── Explorer Controller ───────────────────────────────────────────────────────
export const ExplorerController = new Elysia({ prefix: "/explorers", detail: { tags: ["Explorers"] } })
    // ─── Create An Explorer ──────────────────────────────────────────────────────
    .post("", async ({ body }) => await ExplorerService.create(body), {
    beforeHandle: BackOfficeGuard,
    headers: AuthorizationHeadersDto,
    body: CreateExplorerDto,
    detail: { hide: true },
});
