// ─── Schemas ─────────────────────────────────────────────────────────────────
import { ExplorerType } from "@db/api";
import { t } from "elysia";
export const CreateExplorerDto = t.Object({
    chainId: t.Numeric(),
    type: t.Enum(ExplorerType),
    url: t.String(),
});
