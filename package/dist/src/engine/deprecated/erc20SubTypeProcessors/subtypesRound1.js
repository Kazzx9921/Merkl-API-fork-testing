import { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import { decodeCall, decodeReturnValue } from "@/utils/decodeCalls";
import { enzymeFundValueCalculatorRouterMapping, getTypeFromFactoryAddress } from "./helpers/factoryFinder";
import { getTypeFromAddressChain } from "./helpers/hardcoded";
import { getTypeFromOwnerAddress } from "./helpers/ownerFinder";
import { processorMapping } from "./implementations/processorMapping";
function satisfiesNameConditions(name, type) {
    const lowerCaseName = name.toLowerCase();
    switch (type) {
        case Erc20SubType.hourglass:
            return lowerCaseName.startsWith("ct-hourglass");
        case Erc20SubType.fraxlend:
            return lowerCaseName.includes("fraxlend interest bearing");
        case Erc20SubType.sturdy_aggregator:
            return lowerCaseName.includes("aggregator");
        case Erc20SubType.sturdy_silo:
            return lowerCaseName.includes("sturdy interest bearing");
        case Erc20SubType.aura:
            return lowerCaseName.includes("aura deposit vault");
        case Erc20SubType.poolside:
            return lowerCaseName.includes("poolside");
        case Erc20SubType.anglesLiquid:
            return lowerCaseName.includes("angles liquid");
        case Erc20SubType.balancerGauge:
            return (lowerCaseName.includes("balancer") &&
                !lowerCaseName.includes("aura deposit vault") &&
                !lowerCaseName.startsWith("vifi"));
        case Erc20SubType.beraborrow_gauge:
            return lowerCaseName.includes("beraborrow") && lowerCaseName.includes("bpt");
        case Erc20SubType.beratrax_vault:
            return lowerCaseName.startsWith("beratrax vault");
        case Erc20SubType.gearbox:
            return lowerCaseName.includes("farming of") || lowerCaseName.startsWith("trade");
        case Erc20SubType.euler_borrow:
            return lowerCaseName.startsWith("debt token of evk vault");
        case Erc20SubType.euler_lend:
            return lowerCaseName.includes("evk vault");
        case Erc20SubType.fluid:
            return lowerCaseName.startsWith("fluid");
        case Erc20SubType.filament:
            return lowerCaseName.startsWith("filament");
        case Erc20SubType.radiant_lend:
            return lowerCaseName.includes("radiant interest");
        case Erc20SubType.radiant_borrow:
            return lowerCaseName.includes("radiant variable debt");
        case Erc20SubType.ionic:
            return lowerCaseName.includes("ionic");
        case Erc20SubType.venus:
            return lowerCaseName.startsWith("venus");
        case Erc20SubType.reactor_fusion:
            return lowerCaseName.startsWith("reactorfusion");
        case Erc20SubType.rfx:
            return lowerCaseName.includes("rfx");
        case Erc20SubType.rfx_slv:
            return lowerCaseName.includes("rfx") && lowerCaseName.includes("shared liquidity vault");
        case Erc20SubType.layerbank:
            return lowerCaseName.includes("layerbank");
        case Erc20SubType.moonwell:
            return lowerCaseName.includes("moonwell");
        case Erc20SubType.curve_2:
            return (lowerCaseName === "crvusd/frax" ||
                lowerCaseName === "ezeth/wfrxeth" ||
                lowerCaseName === "pufeth/wsteth" ||
                lowerCaseName === "hai/lusd" ||
                lowerCaseName === "weth/pufeth");
        case Erc20SubType.crosscurve:
            return lowerCaseName.startsWith("crosscurve") || lowerCaseName === "eywa/usdt";
        case Erc20SubType.curveNPool:
            return lowerCaseName === "zai/usdc" || lowerCaseName === "zai/szai";
        case Erc20SubType.silostaking:
            return lowerCaseName === "isei";
        case Erc20SubType.beefy:
            return lowerCaseName.startsWith("moo velo");
        case Erc20SubType.uniswapv2:
            return lowerCaseName.includes("uniswap") && lowerCaseName !== "uniswap";
        case Erc20SubType.fenix:
            return lowerCaseName.includes("stablev1 amm");
        case Erc20SubType.ra:
            return lowerCaseName.includes("volatile pair -") || lowerCaseName.includes("correlated pair -");
        case Erc20SubType.syncswap:
            return lowerCaseName.includes("syncswap");
        case Erc20SubType.aave_lending:
            return lowerCaseName.includes("aave");
        case Erc20SubType.aave_borrowing:
            return lowerCaseName.includes("aave") && lowerCaseName.includes("debt");
        case Erc20SubType.xlend_lending:
            return ((lowerCaseName.startsWith("extrafi x") || lowerCaseName.startsWith("extrax")) && !lowerCaseName.includes("debt"));
        case Erc20SubType.xlend_borrowing:
            return ((lowerCaseName.startsWith("extrafi x") || lowerCaseName.startsWith("extrax")) && lowerCaseName.includes("debt"));
        case Erc20SubType.curve_gauge:
            return lowerCaseName.startsWith("curve.fi") && lowerCaseName.includes("gauge");
        case Erc20SubType.vicuna_lending:
            return lowerCaseName.startsWith("vicuna sonic") && !lowerCaseName.includes("debt");
        case Erc20SubType.vicuna_borrowing:
            return lowerCaseName.startsWith("vicuna sonic variable debt");
        case Erc20SubType.yei_borrowing:
            return ((lowerCaseName.startsWith("yei") || (lowerCaseName.includes("aave") && lowerCaseName.includes("yei"))) &&
                lowerCaseName.includes("debt"));
        case Erc20SubType.ironclad_borrowing:
            return ((lowerCaseName.startsWith("ironclad") ||
                (lowerCaseName.includes("aave") && lowerCaseName.includes("ironclad"))) &&
                lowerCaseName.includes("debt") &&
                name.toLowerCase() !== "ironclad token");
        case Erc20SubType.zerolend_borrowing:
            return lowerCaseName.includes("zerolend") && lowerCaseName.includes("debt");
        case Erc20SubType.lnd_borrowing:
            return lowerCaseName.includes("lnd") && lowerCaseName.includes("debt");
        case Erc20SubType.yei_lending:
            return lowerCaseName.startsWith("yei") || (lowerCaseName.includes("aave") && lowerCaseName.includes("yei"));
        case Erc20SubType.ironclad_lending:
            return ((lowerCaseName.startsWith("ironclad") ||
                (lowerCaseName.includes("aave") && lowerCaseName.includes("ironclad"))) &&
                name.toLowerCase() !== "ironclad token");
        case Erc20SubType.zerolend_lending:
            return lowerCaseName.includes("zerolend");
        case Erc20SubType.lnd_lending:
            return lowerCaseName.includes("lnd");
        case Erc20SubType.compound:
            return lowerCaseName.includes("compound");
        case Erc20SubType.ironcladStaking:
            return lowerCaseName === "ironclad token";
        case Erc20SubType.woofi:
            return lowerCaseName.includes("woofi");
        case Erc20SubType.maverickBoostedPosition:
            return lowerCaseName.includes("maverick");
        case Erc20SubType.zkSwapThreePool:
            return lowerCaseName.includes("zf");
        case Erc20SubType.maha:
            return lowerCaseName.includes("staked") && lowerCaseName.includes("maha");
        case Erc20SubType.tempest:
            return lowerCaseName.startsWith("ts");
        case Erc20SubType.tempestStaking:
            return lowerCaseName.startsWith("tempest");
        case Erc20SubType.holdstation:
            return lowerCaseName.startsWith("hs");
        case Erc20SubType.noLinkVault:
            return lowerCaseName.startsWith("unifi");
        case Erc20SubType.vicuna:
            return lowerCaseName.startsWith("vifi");
        case Erc20SubType.avalon_borrowing:
            return lowerCaseName.includes("avalon") && lowerCaseName.includes("debt");
        case Erc20SubType.avalon_lending:
            return lowerCaseName.includes("avalon");
        case Erc20SubType.superlend_borrowing:
            return lowerCaseName.includes("superlend") && lowerCaseName.includes("debt");
        case Erc20SubType.superlend_lending:
            return lowerCaseName.includes("superlend");
        case Erc20SubType.lendle_borrowing:
            return lowerCaseName.includes("lendle") && lowerCaseName.includes("debt");
        case Erc20SubType.lendle_lending:
            return lowerCaseName.includes("lendle");
        case Erc20SubType.takotako_borrowing:
            return lowerCaseName.includes("takotako") && lowerCaseName.includes("debt");
        case Erc20SubType.takotako_lending:
            return lowerCaseName.includes("takotako");
        case Erc20SubType.cian:
            return lowerCaseName.includes("cian");
        case Erc20SubType.concrete:
            return lowerCaseName.includes("concrete");
        case Erc20SubType.equalizer_gauge:
            return lowerCaseName.includes("equalizer");
        case Erc20SubType.spectra_lpt:
            return lowerCaseName.includes("spectra") && lowerCaseName.includes("curve");
        case Erc20SubType.spectra_yt:
            return lowerCaseName.includes("yield") && lowerCaseName.includes("token");
        case Erc20SubType.bunniV2:
            return lowerCaseName.includes("bunni");
        case Erc20SubType.sake_lending:
            return lowerCaseName.includes("sake soneium");
        case Erc20SubType.sake_borrowing:
            return lowerCaseName.includes("sake soneium") && lowerCaseName.includes("debt");
        case Erc20SubType.stability_lending:
            return lowerCaseName.startsWith("stability market");
        case Erc20SubType.stability:
            return lowerCaseName.startsWith("stability") && !lowerCaseName.startsWith("stability market");
        default:
            return false;
    }
}
function generateResult(type, name, targetToken, typeInfo, campaign) {
    const ProcessorClass = processorMapping[type];
    if (!ProcessorClass) {
        throw new Error(`Processor not found for key: ${type}`);
    }
    const processorObject = new ProcessorClass();
    if (campaign)
        typeInfo = { ...typeInfo, ...parseForStaking(campaign) };
    typeInfo = {
        ...typeInfo,
        name: name,
        tokenAddress: targetToken,
        totalSupply: 0,
        blacklistedSupply: 0,
    };
    return processorObject.computeRound1(type, typeInfo);
}
export function processNamingConditionsInOrder(name, targetToken, campaign) {
    // Order matters
    const types = Object.values(Erc20SubType).filter(value => typeof value === "string");
    for (const type of types) {
        if (satisfiesNameConditions(name, type)) {
            return generateResult(type, name, targetToken, {}, campaign);
        }
    }
}
function parseForFactory(calls, targetToken, campaign) {
    try {
        const factory = decodeReturnValue(calls.factory, "factory");
        const name = decodeReturnValue(calls.name, "name");
        const type = getTypeFromFactoryAddress(factory);
        if (type !== Erc20SubType.unknown)
            return generateResult(type, name, targetToken, { factory }, campaign);
    }
    catch (e) {
        // No factory on this token
        // console.log(e);
    }
}
function parseForOwner(calls, targetToken) {
    try {
        const owner = decodeReturnValue(calls.owner, "owner");
        const name = decodeReturnValue(calls.name, "name");
        const type = getTypeFromOwnerAddress(owner);
        if (type !== Erc20SubType.unknown)
            return generateResult(type, name, targetToken, { owner: owner });
    }
    catch (e) {
        // No factory on this token
        // console.log(e);
    }
}
function parseForEnzyme(calls, targetToken) {
    // Enzyme check
    try {
        const dispatcher = decodeReturnValue(calls.creator, "getCreator");
        const name = decodeReturnValue(calls.name, "name");
        const type = getTypeFromFactoryAddress(dispatcher);
        const fundValueCalculator = enzymeFundValueCalculatorRouterMapping[dispatcher];
        const typeInfo = {
            fundValueCalculator,
            dispatcher,
        };
        if (type === Erc20SubType.enzyme) {
            return generateResult(type, name, targetToken, typeInfo);
        }
    }
    catch (e) {
        // No factory on this token
    }
}
function parseForMetamorpho(calls, targetToken) {
    // MetaMorpho check
    try {
        decodeReturnValue(calls.metamorpho, "MORPHO");
        const name = decodeReturnValue(calls.name, "name");
        return generateResult(Erc20SubType.metamorpho, name, targetToken, {});
    }
    catch (e) {
        // Not a metamorpho token
    }
}
function parseForBalancer(calls, targetToken, name) {
    // Check for balancer pools
    try {
        decodeReturnValue(calls.poolId, "getPoolId");
        return generateResult(Erc20SubType.balancerPool, name, targetToken, {});
    }
    catch (e) {
        // Not a balancer pool
    }
    try {
        decodeReturnValue(calls.vault, "getVault");
        return generateResult(Erc20SubType.balancerV3, name, targetToken, {});
    }
    catch (e) {
        // Not a balancer v3 pool
    }
}
function checkAgainstHardcoded(calls, chainId, targetToken) {
    // Check for balancer pools
    try {
        const name = decodeReturnValue(calls.name, "name");
        const type = getTypeFromAddressChain(chainId, targetToken);
        if (type !== Erc20SubType.unknown)
            return generateResult(type, name, targetToken, {});
    }
    catch (e) {
        // Not a hardcoded address
    }
}
function parseForStaking(campaign) {
    try {
        const whitelist = campaign.campaignParameters.whitelist;
        if (whitelist.length === 1) {
            const forwarders = campaign.campaignParameters.forwarders;
            if (forwarders.length === 1) {
                if (forwarders[0].sender === whitelist[0]) {
                    return { isStaking: "true", stakingContract: whitelist[0] };
                }
            }
        }
    }
    catch (e) {
        // No factory on this token
        // console.log(e);
    }
    return { isStaking: "false" };
}
export function getTokenTypeRound1(calls, targetToken, index, campaign) {
    const returnValueOfCalls = calls.map(call => call.returnData);
    const returnValue = {
        factory: returnValueOfCalls[index],
        metamorpho: returnValueOfCalls[index + 1],
        name: returnValueOfCalls[index + 2],
        poolId: returnValueOfCalls[index + 3],
        creator: returnValueOfCalls[index + 4],
        owner: returnValueOfCalls[index + 5],
        vault: returnValueOfCalls[index + 6],
    };
    let result = parseForFactory(returnValue, targetToken, campaign);
    if (result)
        return result;
    result = parseForOwner(returnValue, targetToken);
    if (result)
        return result;
    result = checkAgainstHardcoded(returnValue, campaign.computeChainId, targetToken);
    if (result)
        return result;
    result = parseForEnzyme(returnValue, targetToken);
    if (result)
        return result;
    result = parseForMetamorpho(returnValue, targetToken);
    if (result)
        return result;
    let name;
    try {
        name = decodeCall(returnValueOfCalls, index + 2, "name");
    }
    catch {
        return generateResult(Erc20SubType.unknown, "Unknown", targetToken, {}, campaign);
    }
    result = parseForBalancer(returnValue, targetToken, name);
    if (result)
        return result;
    result = processNamingConditionsInOrder(name, targetToken, campaign);
    if (result)
        return result;
    return generateResult(Erc20SubType.unknown, name, targetToken, {}, campaign);
}
