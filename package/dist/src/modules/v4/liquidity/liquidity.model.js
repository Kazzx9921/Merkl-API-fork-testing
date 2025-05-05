import { t } from "elysia";
export const PositionsInputDto = t.Object({
    chainId: t.Numeric(),
    address: t.String(),
});
