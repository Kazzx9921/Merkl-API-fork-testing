import { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { ProtocolId } from "@/modules/v4/protocol/protocol.model";
import { OpportunityAction } from "@db/api";
export declare const tokenTypeToProtocolAndAction: Record<Erc20SubType, {
    protocol: ProtocolId | undefined;
    action: OpportunityAction;
}>;
