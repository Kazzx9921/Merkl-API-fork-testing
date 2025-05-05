import { processorMapping } from "./implementations/processorMapping";
export function getTokenTypeRound3(index, type, typeInfo, calls) {
    try {
        const ProcessorClass = processorMapping[type];
        const returnValueOfCalls = calls.map(call => call.returnData);
        if (!ProcessorClass) {
            throw new Error(`Processor not found for key: ${type}`);
        }
        const processorObject = new ProcessorClass();
        return processorObject.computeRound3(index, type, typeInfo, returnValueOfCalls);
    }
    catch (error) {
        console.error(error);
        return {
            type: type,
            calls: [],
            typeInfo: {
                ...typeInfo,
            },
        };
    }
}
