import { t } from "elysia";
import { protocolIdList } from "../protocol/protocol.model";
export const participateInputTypes = ["tokenAmount", "token"];
export const participateTypes = ["link", "deposit", "withdraw"];
export const GetInteractionTargetsQueryDto = t.Object({
    chainId: t.Numeric(),
    protocolId: t.Optional(t.String({
        examples: protocolIdList.join(", "),
    })),
    identifier: t.String(),
});
export const GetInteractionQuoteQueryDto = t.Object({
    chainId: t.Numeric(),
    protocolId: t.String({
        examples: protocolIdList.join(", "),
    }),
    identifier: t.String(),
    userAddress: t.String(),
    fromTokenAddress: t.String(),
    fromAmount: t.String(),
    slippage: t.Optional(t.Number({ description: "Slippage in basis points (O.1%)" })),
});
export const GetInteractionProtocolsQueryDto = t.Object({
    chainId: t.Optional(t.Numeric()),
});
