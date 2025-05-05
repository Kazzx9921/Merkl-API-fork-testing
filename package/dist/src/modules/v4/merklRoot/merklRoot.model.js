import { t } from "elysia";
export const RootByTimestampsDto = t.Object({
    chainId: t.Numeric(),
    fromTimestamp: t.String(),
    toTimestamp: t.String(),
});
export const CreateRootDto = t.Object({
    chainId: t.Numeric(),
    root: t.String(),
    timestamp: t.Numeric(),
    epoch: t.Numeric(),
});
