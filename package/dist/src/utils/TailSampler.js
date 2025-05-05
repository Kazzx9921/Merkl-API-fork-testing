import { ParentBasedSampler, SamplingDecision, TraceIdRatioBasedSampler, } from "@opentelemetry/sdk-trace-node";
export class TailSampler {
    baseSampler;
    constructor(ratio) {
        this.baseSampler = new ParentBasedSampler({
            root: new TraceIdRatioBasedSampler(ratio),
        });
    }
    shouldSample(context, traceId, spanName, spanKind, attributes, links) {
        const result = this.baseSampler.shouldSample(context, traceId, spanName, spanKind, attributes, links);
        // Override sampling decision if error detected
        if (attributes["error"] || Number(attributes["http.status_code"]) >= 500) {
            return {
                decision: SamplingDecision.RECORD_AND_SAMPLED,
                attributes: { error_sampled: "true" },
            };
        }
        return result;
    }
    toString() {
        return "CustomTailSampler";
    }
}
