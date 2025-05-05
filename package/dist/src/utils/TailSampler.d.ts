import type { Attributes, Context, Link, SpanKind } from "@opentelemetry/api";
import { type Sampler, type SamplingResult } from "@opentelemetry/sdk-trace-node";
export declare class TailSampler implements Sampler {
    private baseSampler;
    constructor(ratio: number);
    shouldSample(context: Context, traceId: string, spanName: string, spanKind: SpanKind, attributes: Attributes, links: Link[]): SamplingResult;
    toString(): string;
}
