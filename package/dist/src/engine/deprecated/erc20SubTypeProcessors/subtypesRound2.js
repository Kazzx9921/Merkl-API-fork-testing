import { processorMapping } from "./implementations/processorMapping";
export function getTokenTypeRound2(index, type, typeInfo, calls, campaign) {
    try {
        const returnValueOfCalls = calls.map(call => call.returnData);
        const ProcessorClass = processorMapping[type];
        if (!ProcessorClass) {
            throw new Error(`Processor not found for key: ${type}`);
        }
        const processorObject = new ProcessorClass();
        return processorObject.computeRound2(index, type, typeInfo, returnValueOfCalls, campaign);
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
