import { capitalize } from "@/utils/caseChanges";
export class LockerMetadata {
    async build(campaign) {
        const { params, computeChainId } = campaign;
        try {
            const action = "HOLD";
            const mainProtocolId = "puffer";
            let name = `Lock on ${capitalize(mainProtocolId)}`;
            let tokens = [];
            let hardcodeUrl;
            if (params.lockerContract === "0x48e8dE138C246c14248C94d2D616a2F9eb4590D2") {
                hardcodeUrl = "https://app.puffer.fi/stake";
                name = `Lock CARROT on ${capitalize(mainProtocolId)}`;
                tokens = [{ chainId: computeChainId, address: "0x8A5A5DE9db5770123Ff2145F59e9F20047f0A8EC" }];
            }
            return {
                action,
                name,
                tokens,
                mainProtocol: mainProtocolId,
                depositUrl: hardcodeUrl ?? LockerMetadata.generateUrl(computeChainId, params),
            };
        }
        catch {
            return {
                action: "INVALID",
                name: "Locker Campaign",
                tokens: [],
                mainProtocol: undefined,
            };
        }
    }
    static generateUrl(_computeChainId, params) {
        return params.url;
    }
}
