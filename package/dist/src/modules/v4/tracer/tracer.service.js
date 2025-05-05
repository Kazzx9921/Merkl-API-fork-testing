import { record } from "@elysiajs/opentelemetry";
export class TracerService {
    static createTracedProxy(target, serviceName) {
        return new Proxy(target, {
            get(target, property, receiver) {
                const originalMethod = Reflect.get(target, property, receiver);
                if (typeof originalMethod === "function") {
                    return function (...args) {
                        return record(`${serviceName}.${property}`, async (span) => {
                            // Add relevant attributes to the span
                            span.setAttribute("service.name", serviceName);
                            span.setAttribute("service.method", property);
                            try {
                                const result = await originalMethod.apply(this, args);
                                return result;
                            }
                            catch (error) {
                                span.setStatus({ code: 2 }); // OpenTelemetry StatusCode.ERROR
                                span.setAttribute("error.message", error.message);
                                span.recordException(error);
                                throw error;
                            }
                        });
                    };
                }
                return originalMethod;
            },
        });
    }
}
