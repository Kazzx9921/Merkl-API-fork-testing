import { getTypeFromFactoryAddress } from "@/engine/deprecated/erc20SubTypeProcessors/helpers/factoryFinder";
import { getTypeFromAddressChain } from "@/engine/deprecated/erc20SubTypeProcessors/helpers/hardcoded";
import { getTypeFromOwnerAddress } from "@/engine/deprecated/erc20SubTypeProcessors/helpers/ownerFinder";
import { getTypeFromTreasuryAddress } from "@/engine/deprecated/erc20SubTypeProcessors/helpers/treasuryFinder";
import { processNamingConditionsInOrder } from "@/engine/deprecated/erc20SubTypeProcessors/subtypesRound1";
import { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import { decodeReturnValue } from "@/utils/decodeCalls";
import { BalancerPoolInterface, BalancerV3StablePoolInterface, ChainInteractionService, ERC20Interface, EnzymeInterface, FactoryInterface, IonPoolInterface, LayerBankERC20Interface, MetamorphoInterface, } from "@sdk";
/**
 * @notice Compute the subtypes of the campaigns
 * @warning
 * @dev This function should return an array of length campaigns.length
 */
export const detectSubType = async (chainId, campaigns) => {
    // 1. Do a generic multicall per campaign to see which functions are supported
    const callsPerCampaign = 8;
    const calls = [];
    for (const [index, campaign] of campaigns.entries()) {
        const { targetToken } = campaign.campaignParameters;
        calls.push({
            allowFailure: true,
            callData: FactoryInterface.encodeFunctionData("factory"),
            target: targetToken,
        }, {
            allowFailure: true,
            callData: MetamorphoInterface.encodeFunctionData("MORPHO"),
            target: targetToken,
        }, {
            allowFailure: true,
            callData: ERC20Interface.encodeFunctionData("name"),
            target: targetToken,
        }, {
            allowFailure: true,
            callData: BalancerPoolInterface.encodeFunctionData("getPoolId"),
            target: targetToken,
        }, {
            allowFailure: true,
            callData: EnzymeInterface.encodeFunctionData("getCreator"),
            target: targetToken,
        }, {
            allowFailure: true,
            callData: LayerBankERC20Interface.encodeFunctionData("owner"),
            target: targetToken,
        }, {
            allowFailure: true,
            callData: BalancerV3StablePoolInterface.encodeFunctionData("getVault"),
            target: targetToken,
        }, {
            allowFailure: true,
            callData: IonPoolInterface.encodeFunctionData("treasury"),
            target: targetToken,
        });
        if (calls.length !== callsPerCampaign * (index + 1))
            throw new Error("computeSubTypes: calls.length !== callsPerCampaign * index");
    }
    const callResult = await ChainInteractionService(chainId).fetchState(calls);
    // 2. Decode result from the multicalls and using try catch, try to interprete the result
    const res = [];
    let index = -callsPerCampaign;
    for (const campaign of campaigns) {
        const { targetToken } = campaign.campaignParameters;
        index += callsPerCampaign;
        const values = {
            factory: callResult[index].returnData,
            metamorpho: callResult[index + 1].returnData,
            name: callResult[index + 2].returnData,
            poolId: callResult[index + 3].returnData,
            creator: callResult[index + 4].returnData,
            owner: callResult[index + 5].returnData,
            vault: callResult[index + 6].returnData,
            treasury: callResult[index + 7].returnData,
        };
        // Get erc20SubType from factory address
        try {
            const factory = decodeReturnValue(values.factory, "factory");
            const type = getTypeFromFactoryAddress(factory);
            if (type !== Erc20SubType.unknown) {
                res.push(type);
                continue;
            }
        }
        catch { }
        // Get erc20SubType from treasury address
        try {
            const treasury = decodeReturnValue(values.treasury, "treasury");
            const type = getTypeFromTreasuryAddress(treasury);
            if (type !== Erc20SubType.unknown) {
                res.push(type);
                continue;
            }
        }
        catch { }
        // Get erc20SubType from owner address
        try {
            const owner = decodeReturnValue(values.owner, "owner");
            const type = getTypeFromOwnerAddress(owner);
            if (type !== Erc20SubType.unknown) {
                res.push(type);
                continue;
            }
        }
        catch { }
        // Get erc20SubType from address
        try {
            const type = getTypeFromAddressChain(chainId, targetToken);
            if (type !== Erc20SubType.unknown) {
                res.push(type);
                continue;
            }
        }
        catch { }
        // Get erc20SubType for enzyme (factory is replaced by dispatcher)
        try {
            const factory = decodeReturnValue(values.creator, "getCreator");
            const type = getTypeFromFactoryAddress(factory);
            if (type !== Erc20SubType.unknown) {
                res.push(type);
                continue;
            }
        }
        catch { }
        // Get erc20SubType for morpho
        try {
            decodeReturnValue(values.metamorpho, "MORPHO");
            res.push(Erc20SubType.metamorpho);
            continue;
        }
        catch { }
        // Starting from this point, assume the name is working
        try {
            const name = decodeReturnValue(values.name, "name");
            // Get erc20SubType for balancer
            try {
                decodeReturnValue(values.poolId, "getPoolId");
                res.push(Erc20SubType.balancerPool);
                continue;
            }
            catch { }
            try {
                decodeReturnValue(values.vault, "getVault");
                res.push(Erc20SubType.balancerPool);
                continue;
            }
            catch { }
            // Get erc20SubType by parsing information from the erc20 name
            const typeInfoFromName = processNamingConditionsInOrder(name, targetToken, campaign);
            if (!!typeInfoFromName) {
                res.push(typeInfoFromName.type);
                continue;
            }
        }
        catch { }
        // Default
        res.push(Erc20SubType.unknown);
    }
    if (res.length !== campaigns.length)
        throw new Error("computeSubTypes: res.length !== campaigns.length");
    return res;
};
