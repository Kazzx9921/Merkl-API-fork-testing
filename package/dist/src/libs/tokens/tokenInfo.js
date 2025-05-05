import { Erc20__factory } from "@sdk";
export async function getTokenInfo(address) {
    const ERC20_Interface = Erc20__factory.createInterface();
    const read = ["symbol", "name", "decimals"];
    const calls = read.map(fn => ({
        allowFailure: false,
        callData: ERC20_Interface.encodeFunctionData(fn),
        target: address,
    }));
    return {
        cached: false,
        call: {
            callData: calls,
            handler: () => { },
            reducer: async (result) => {
                return read.reduce((res, fn, index) => Object.assign(res, {
                    [fn]: ERC20_Interface.decodeFunctionResult(fn, result[index])[0],
                }), {});
            },
        },
    };
}
