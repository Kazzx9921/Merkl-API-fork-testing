import { GenericProcessor } from "../GenericProcessor";
export class TemplateProcessor extends GenericProcessor {
    rounds = {
        round1: [],
        round2: [],
        round3: [],
        round4: [],
    };
    // override computeRound1(): void {}
    processingRound1(typeInfo) {
        super.processingRound1(typeInfo);
    }
    processingRound2(typeInfo) {
        super.processingRound2(typeInfo);
    }
    processingRound3(typeInfo) {
        super.processingRound3(typeInfo);
    }
    processingRound4(typeInfo) {
        super.processingRound4(typeInfo);
    }
    async processingRound5(index, type, typeInfo, calls, campaign, pricer) {
        return super.processingRound5(index, type, typeInfo, calls, campaign, pricer);
    }
    computeRound1(type, typeInfo) {
        return super.computeRound1(type, typeInfo);
    }
    computeRound2(index, type, typeInfo, calls) {
        return super.computeRound2(index, type, typeInfo, calls);
    }
    computeRound3(index, type, typeInfo, calls) {
        return super.computeRound3(index, type, typeInfo, calls);
    }
    computeRound4(index, type, typeInfo, calls, campaign) {
        return super.computeRound4(index, type, typeInfo, calls, campaign);
    }
    async computeRound5(index, type, typeInfo, calls, campaign, pricer) {
        return super.computeRound5(index, type, typeInfo, calls, campaign, pricer);
    }
}
