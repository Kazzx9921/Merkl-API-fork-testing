import { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import { capitalize } from "lodash";
export const stakingContractToStakingSymbol = {
    "0x18eeD20f71BEf84B605253C89A7576E3634134C0": "CyberStaking",
    "0x68754d29f2e97B837Cb622ccfF325adAC27E9977": "Karak",
    "0xcd28cF8f7755f03967D27E128B38022B63919836": "Llamalend",
};
export function generateCardName(type, typeInfo, campaign, symbols = [""], displayName) {
    if (typeInfo.isStaking === "true") {
        if (typeInfo.stakingName !== undefined) {
            typeInfo.stakingSymbol = typeInfo.stakingName.includes("Deposit")
                ? typeInfo.stakingName.replace("Deposit", "").trim()
                : typeInfo.stakingName;
        }
        if (typeInfo.stakingSymbol === undefined) {
            typeInfo.stakingSymbol = typeInfo.eip712DomainName;
        }
        if (typeInfo.stakingSymbol === undefined) {
            typeInfo.stakingSymbol = typeInfo.protocol !== "Unknown" ? typeInfo.protocol : undefined;
        }
        if (typeInfo.stakingSymbol === undefined) {
            typeInfo.stakingSymbol = stakingContractToStakingSymbol[typeInfo.stakingContract];
        }
        return `${typeInfo.lockNFT !== undefined ? "Lock" : "Stake"} ${campaign.campaignParameters.symbolTargetToken} on ${typeInfo.stakingSymbol}`;
    }
    switch (type) {
        case Erc20SubType.uniswapv2:
        case Erc20SubType.poolside:
        case Erc20SubType.velodrome:
        case Erc20SubType.aerodrome:
        case Erc20SubType.dragonswap:
        case Erc20SubType.akron:
        case Erc20SubType.koi:
        case Erc20SubType.baseswap:
        case Erc20SubType.fenix:
        case Erc20SubType.zkswap:
        case Erc20SubType.ra:
        case Erc20SubType.syncswap:
        case Erc20SubType.pancakeswap:
        case Erc20SubType.traderJoe:
        case Erc20SubType.katana:
            return `Provide liquidity to ${capitalize(typeInfo.protocol)} ${typeInfo.symbolToken0}-${typeInfo.symbolToken1}`;
        case Erc20SubType.pendleYT:
            return `Hold ${capitalize(typeInfo.protocol)} ${typeInfo.name}`;
        case Erc20SubType.pendle:
            return `Provide ${typeInfo.symbolUnderlyingToken} on ${capitalize(typeInfo.protocol)}`;
        case Erc20SubType.balancerGauge:
            return `${capitalize(typeInfo.protocol)} ${symbols.join("-")}`;
        case Erc20SubType.beraborrow_gauge:
        case Erc20SubType.beratrax_vault:
            return `Deposit ${symbols.join("-")} on ${capitalize(typeInfo.protocol)}`;
        case Erc20SubType.balancerPool: {
            return `Provide liquidity to ${capitalize(typeInfo.protocol)} ${symbols.join("-")}`;
        }
        case Erc20SubType.balancerV3: {
            return `Provide liquidity to ${capitalize(typeInfo.protocol)} Boosted ${symbols.join("-")}`;
        }
        case Erc20SubType.aura:
            return `Provide liquidity to ${capitalize(typeInfo.protocol)} ${symbols.join("-")}`;
        case Erc20SubType.gearbox:
            return `${capitalize(typeInfo.protocol)} ${typeInfo.symbolUnderlyingToken} Deposit`;
        case Erc20SubType.compound:
            return `Lend ${typeInfo.symbolBaseToken} on ${capitalize(typeInfo.protocol)}`;
        case Erc20SubType.radiant_lend: {
            let cardToken = typeInfo.symbolUnderlyingToken;
            if (campaign.campaignParameters.symbolTargetToken.startsWith("r")) {
                cardToken = campaign.campaignParameters.symbolTargetToken.substring(1);
            }
            return `Lend ${cardToken} on ${capitalize(typeInfo.protocol)}`;
        }
        case Erc20SubType.rfx:
            return `Supply ${typeInfo.symbolShortToken}-${typeInfo.symbolLongToken} on ${capitalize(typeInfo.protocol)}`;
        case Erc20SubType.radiant_borrow:
        case Erc20SubType.aave_borrowing:
        case Erc20SubType.sake_borrowing:
        case Erc20SubType.vicuna_borrowing:
        case Erc20SubType.yei_borrowing:
        case Erc20SubType.ironclad_borrowing:
        case Erc20SubType.zerolend_borrowing:
        case Erc20SubType.lnd_borrowing:
        case Erc20SubType.avalon_borrowing:
        case Erc20SubType.superlend_borrowing:
        case Erc20SubType.takotako_borrowing:
        case Erc20SubType.lendle_borrowing:
        case Erc20SubType.euler_borrow:
            return `Borrow ${typeInfo.symbolUnderlyingToken} on ${capitalize(typeInfo.protocol)}`;
        case Erc20SubType.ionic:
        case Erc20SubType.layerbank:
        case Erc20SubType.moonwell:
        case Erc20SubType.splice:
        case Erc20SubType.aave_lending:
        case Erc20SubType.stability_lending:
        case Erc20SubType.vicuna_lending:
        case Erc20SubType.sake_lending:
        case Erc20SubType.yei_lending:
        case Erc20SubType.ironclad_lending:
        case Erc20SubType.zerolend_lending:
        case Erc20SubType.lnd_lending:
        case Erc20SubType.avalon_lending:
        case Erc20SubType.takotako_lending:
        case Erc20SubType.superlend_lending:
        case Erc20SubType.lendle_lending:
        case Erc20SubType.fraxlend:
        case Erc20SubType.venus:
        case Erc20SubType.reactor_fusion:
        case Erc20SubType.euler_lend:
        case Erc20SubType.fluid:
            return `Lend ${typeInfo.symbolUnderlyingToken} on ${capitalize(typeInfo.protocol)}`;
        case Erc20SubType.xlend_lending:
            return `Lend ${typeInfo.symbolUnderlyingToken} on Extrafi XLend`;
        case Erc20SubType.xlend_borrowing:
            return `Borrow ${typeInfo.symbolUnderlyingToken} on Extrafi XLend`;
        case Erc20SubType.metamorpho:
            return `Supply to ${typeInfo.name} on ${capitalize(typeInfo.protocol)}`;
        case Erc20SubType.sturdy_aggregator:
            return `Supply ${typeInfo.symbolUnderlyingToken} on ${capitalize(typeInfo.protocol)} ${typeInfo.name}`;
        case Erc20SubType.sturdy_silo:
            return `Supply ${typeInfo.symbolUnderlyingToken} on ${capitalize(typeInfo.protocol)} ${typeInfo.symbolCollateral} Silo`;
        case Erc20SubType.curve:
        case Erc20SubType.curve_2:
            return `Provide liquidity to ${capitalize(typeInfo.protocol)} ${Object.values(typeInfo.poolTokens).join("-")}`;
        case Erc20SubType.enzyme:
            return `Supply to the ${typeInfo.name} on ${capitalize(typeInfo.protocol)}`;
        case Erc20SubType.filament:
            return `Earn Yield on ${typeInfo.symbolUnderlyingToken} on ${capitalize(typeInfo.protocol)}`;
        case Erc20SubType.silostaking:
            return `Stake ${typeInfo.symbolUnderlyingToken} on ${capitalize(typeInfo.protocol)}`;
        case Erc20SubType.beefy:
            return `Provide liquidity to ${capitalize(typeInfo.protocol)} ${typeInfo.symbolToken0}-${typeInfo.symbolToken1}`;
        case Erc20SubType.toros:
            return `${typeInfo.name} (${campaign.campaignParameters.symbolTargetToken}) on ${capitalize(typeInfo.protocol)}`;
        case Erc20SubType.ironcladStaking:
            return `Stake ${campaign.campaignParameters.symbolTargetToken} on ${capitalize(typeInfo.protocol)}`;
        case Erc20SubType.woofi:
            return `Supercharge ${typeInfo.symbolUnderlyingToken} on ${capitalize(typeInfo.protocol)}`;
        case Erc20SubType.maverickBoostedPosition:
            return `Maverick Boosted Position ${campaign.campaignParameters.symbolTargetToken}`;
        case Erc20SubType.zkSwapThreePool:
            return `Provide liquidity to ${capitalize(typeInfo.protocol)} ${typeInfo.symbolToken0}-${typeInfo.symbolToken1}-${typeInfo.symbolToken2}`;
        case Erc20SubType.maha:
            return `Stake ${typeInfo.symbolToken0}-${typeInfo.symbolToken1} LP on ${capitalize(typeInfo.protocol)}`;
        case Erc20SubType.curve_gauge:
            if (!!typeInfo.symbolToken2) {
                return `Stake ${typeInfo.symbolToken0}-${typeInfo.symbolToken1}-${typeInfo.symbolToken2} LP on ${capitalize(typeInfo.protocol)}`;
            }
            return `Stake ${typeInfo.symbolToken0}-${typeInfo.symbolToken1} LP on ${capitalize(typeInfo.protocol)}`;
        case Erc20SubType.tempest:
        case Erc20SubType.tempestStaking:
            return `Deposit into ${typeInfo.symbolToken0}-${typeInfo.symbolToken1} vault on ${capitalize(typeInfo.protocol)}`;
        case Erc20SubType.holdstation:
            return `Hold vault token ${campaign.campaignParameters.symbolTargetToken} on ${capitalize(typeInfo.protocol)}`;
        case Erc20SubType.cpmmGamma:
            return `Provide ${typeInfo.symbolToken0}-${typeInfo.symbolToken1} on ${capitalize(typeInfo.protocol)}`;
        case Erc20SubType.crosscurve:
            if (typeInfo.name.toLowerCase() === "eywa/usdt") {
                return `Curve ${typeInfo.name}`;
            }
            return `${typeInfo.name}`;
        case Erc20SubType.curveNPool:
            return `Curve ${typeInfo.name}`;
        case Erc20SubType.vicuna: {
            const parsedName = typeInfo.name.split(" ");
            parsedName.shift();
            const parsedNameForCard = parsedName.join(" ");
            return `Deposit liquidity on ${parsedNameForCard.replace("BALANCER", "Beets")} vault on Vicuna`;
        }
        case Erc20SubType.satlayer:
            return `Restake ${typeInfo.symbolUnderlyingToken} on ${capitalize(typeInfo.protocol)}`;
        case Erc20SubType.veda:
            return `Deposit into ${typeInfo.name.replace("Ether.Fi", "Veda")}`;
        case Erc20SubType.concrete:
        case Erc20SubType.cian:
            return `Deposit ${typeInfo.symbolAsset} into ${typeInfo.name.replace("Ether.Fi", "Veda")}`;
        case Erc20SubType.rfx_slv:
            return `Deposit ${typeInfo.symbolAsset} into ${typeInfo.name}`;
        case Erc20SubType.equalizer_gauge:
            return `${displayName}`;
        case Erc20SubType.anglesLiquid:
            return `Deposit into ${typeInfo.name} (${campaign.campaignParameters.symbolTargetToken}) Vault`;
        case Erc20SubType.spectra_lpt:
            return `Provide liquidity on Spectra to ${typeInfo.name}`;
        case Erc20SubType.spectra_yt:
            return `Hold Spectra ${typeInfo.name}`;
        case Erc20SubType.hourglass:
            return `Deposit ${typeInfo.symbolUnderlyingToken} into Hourglass`;
        case Erc20SubType.hanji_liquidity_vault_token:
            return "Provide Liquidity on Hanji Vault";
        case Erc20SubType.bunniV2:
            return `Provide Liquidity on Bunni V2 ${typeInfo.symbolToken0}-${typeInfo.symbolToken1}`;
        case Erc20SubType.gamma:
            return `Provide liquidity to Gamma ${capitalize(typeInfo.protocol)} ${campaign.campaignParameters.symbolTargetToken} vault`;
        case Erc20SubType.stability:
            return `Hold ${typeInfo.name}`;
        default:
            // OVERRIDE
            switch (typeInfo.tokenAddress) {
                case "0x3a8099D8FE5C072bB035381003993393072D3ec7":
                    return "Hold pufETH on DeSyn (dpufETH)";
                case "0x1f2aa9680910aC5a4527FA72001dC249943f60b4":
                    return "Hold pufETH on Karak";
                default:
                    return `Hold ${typeInfo.name} (${campaign.campaignParameters.symbolTargetToken})`;
            }
    }
}
