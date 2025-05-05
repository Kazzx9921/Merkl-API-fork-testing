import { batchMulticallCallWithRetry } from "@/utils/generic";
import { BASE_9, DistributionCreatorInterface, registry, } from "@sdk";
import { BigNumber } from "ethers";
export const computeFee = async (chainId, config) => {
    if (!config.creator) {
        throw new Error("Creator is required");
    }
    const distributionCreator = registry(chainId)?.Merkl?.DistributionCreator;
    const calls = [
        {
            allowFailure: true,
            target: distributionCreator,
            callData: DistributionCreatorInterface.encodeFunctionData("campaignSpecificFees", [config.campaignType]),
        },
        {
            allowFailure: true,
            target: distributionCreator,
            callData: DistributionCreatorInterface.encodeFunctionData("feeRebate", [config.creator]),
        },
    ];
    const result = await batchMulticallCallWithRetry(chainId, {
        calls,
    });
    const campaignSpecificFees = BigNumber.from(DistributionCreatorInterface.decodeFunctionResult("campaignSpecificFees", result[0].returnData)[0]);
    const feeRebate = BigNumber.from(DistributionCreatorInterface.decodeFunctionResult("feeRebate", result[1].returnData)[0]);
    const baseFeesValue = campaignSpecificFees.eq("1")
        ? BigNumber.from(0)
        : campaignSpecificFees.eq("0")
            ? BigNumber.from(30000000)
            : campaignSpecificFees;
    return {
        fee: baseFeesValue.mul(BASE_9.sub(feeRebate)).div(BASE_9).toString(),
    };
};
