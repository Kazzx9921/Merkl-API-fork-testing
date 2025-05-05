import Elysia from "elysia";
import { isAddress } from "viem";
import { EnsoService } from "../enso/enso.service";
import { GetInteractionProtocolsQueryDto, GetInteractionQuoteQueryDto, GetInteractionTargetsQueryDto, } from "./interaction.model";
import { InteractionService } from "./interaction.service";
// ─── Interaction Controller ──────────────────────────────────────────────────
export const InteractionController = new Elysia({
    prefix: "/interaction",
    detail: { tags: ["Interaction"], hide: true },
})
    .get("/targets", async ({ query: { protocolId, chainId, identifier } }) => {
    if (!isAddress(identifier))
        return [];
    return await InteractionService.getTargets(chainId, protocolId, identifier);
}, {
    query: GetInteractionTargetsQueryDto,
    detail: {
        summary: "Available interaction targets for a protocol",
        description: "Retrieves all the pool/token/contract",
    },
})
    // ─── Get All Compatible Protocols ───────────────────────────────────────
    .get("/protocols", async ({ query }) => await EnsoService.getCompatibleProtocols(query), {
    query: GetInteractionProtocolsQueryDto,
    detail: {
        summary: "Interactable protocols",
        description: "Retrieves protocols integrated by merkl which supports being interacted with",
    },
})
    // ─── Get Transaction ─────────────────────────────────────────────────
    .get("/transaction", async ({ query: { protocolId, chainId, identifier, userAddress, fromAmount, fromTokenAddress, slippage } }) => {
    if (!isAddress(identifier))
        return;
    const [target] = await InteractionService.getTargets(chainId, protocolId, identifier);
    //TODO: throw error
    if (!target)
        return;
    return await InteractionService.getTransaction(target.provider, chainId, protocolId, identifier, userAddress, fromTokenAddress, BigInt(fromAmount), slippage);
}, {
    query: GetInteractionQuoteQueryDto,
    detail: {
        summary: "Get participate transaction",
        description: "",
    },
});
