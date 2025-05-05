import { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import { GenericProcessor } from "../GenericProcessor";
import type { callKeys, dataRaw, dataType } from "../GenericProcessor";
export declare const processorMapping: Record<Erc20SubType, typeof GenericProcessor<callKeys, dataRaw, dataType>>;
