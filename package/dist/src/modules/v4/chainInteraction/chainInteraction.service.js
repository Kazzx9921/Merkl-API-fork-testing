import { TracerService } from "@/modules/v4/tracer/tracer.service";
import { ChainInteractionService } from "@sdk";
const ChainInteractionServiceWrapper = TracerService.createTracedProxy(ChainInteractionService, "ChainInteractionService");
export { ChainInteractionServiceWrapper as ChainInteractionService };
