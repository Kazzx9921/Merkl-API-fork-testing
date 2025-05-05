import { Redis } from "@/cache";
import { batchMulticallCallWithRetry } from "@/utils/generic";
import { log } from "@/utils/logger";
import { Interface } from "@ethersproject/abi";
import { BN2Number, ChainId, ERC20Interface } from "@sdk";
import { t } from "elysia";
const stTwtABI = [
    {
        constant: true,
        inputs: [],
        name: "participantNumber",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
];
const stTwtAddresses = {
    [ChainId.BSC]: "0x5029f49585D57ed770D2194841B5A0bE06BFc2ED",
};
const stTwtInterface = new Interface(stTwtABI);
async function getTwtParticipants(chainId) {
    const tokenAddress = stTwtAddresses[chainId];
    const calls = [
        {
            allowFailure: true,
            callData: stTwtInterface.encodeFunctionData("participantNumber", []),
            target: tokenAddress,
        },
        {
            allowFailure: true,
            callData: ERC20Interface.encodeFunctionData("totalSupply"),
            target: tokenAddress,
        },
    ];
    const result = await batchMulticallCallWithRetry(chainId, { calls });
    const res = {
        participants: 0,
        totalSupply: 0,
    };
    try {
        res.participants = stTwtInterface.decodeFunctionResult("participantNumber", result[0].returnData)[0].toNumber();
        res.totalSupply = BN2Number(ERC20Interface.decodeFunctionResult("totalSupply", result[1].returnData)[0], 18);
    }
    catch (_error) {
        log.local(`❌ Failed to call participantNumber for ${tokenAddress} on ${chainId}`);
    }
    return res;
}
export const query = t.Object({
    chainId: t.Numeric(),
});
export default (app) => app.get("", async ({ query }) => {
    const chainId = query.chainId;
    return await Redis.getOrSet(`TwtParticipants_${chainId}`, getTwtParticipants, chainId);
}, {
    query,
});
