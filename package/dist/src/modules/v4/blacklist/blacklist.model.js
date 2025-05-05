import { t } from "elysia";
export const AddBlacklistDto = t.Object({
    chainId: t.Numeric(),
    userAddress: t.String(),
    poolAddress: t.String(),
    reason: t.Optional(t.String()),
});
export const CheckBlacklistDto = t.Object({
    address: t.String(),
});
export const RemoveBlacklistDto = t.Object({
    address: t.String(),
});
