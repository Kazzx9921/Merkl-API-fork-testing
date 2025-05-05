import { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
const factoryAddresses = {
    "0x420DD381b31aEf6683db6B902084cB0FFECe40Da": Erc20SubType.aerodrome, // Aerodrome Base Factory
    "0x31832f2a97Fd20664D76Cc421207669b55CE4BC0": Erc20SubType.velodrome, // Velodrome Mode Factory
    "0xc9Fe0C63Af9A39402e8a5514f9c43Af0322b665F": Erc20SubType.curve, // Curve Factory Fraxtal
    "0xc6C09471Ee39C7E30a067952FcC89c8922f9Ab53": Erc20SubType.curve, // Curve Optimism Factory
    "0x98EE851a00abeE0d95D08cF4CA2BdCE32aeaAF7F": Erc20SubType.curve, // Curve Mainnet Factory
    "0x9e6d12097339ddd5402FDD39fc0Ef86Eec54AB39": Erc20SubType.splice, // Splice Mode Factory
    "0x49Afe3abCf66CF09Fab86cb1139D8811C8afe56F": Erc20SubType.toros, // Toros Base Factory
    "0xAf39606bec181887951Ab6912Ac7EA216Bd6E4B4": Erc20SubType.akron, // Akron Arbitrum Factory
    "0xC3DC853dD716bd5754f421ef94fdCbac3902ab32": Erc20SubType.enzyme, // Enzyme ETH Factory
    "0x2e25271297537B8124b8f883a92fFd95C4032733": Erc20SubType.enzyme, // Enzyme Polygon Factory
    "0x71f6b49ae1558357bBb5A6074f1143c46cBcA03d": Erc20SubType.dragonswap, // DragonSwap SEI Factory
    "0x40be1cBa6C5B47cDF9da7f963B6F761F4C60627D": Erc20SubType.koi, // Silo Staking Factory
    "0xFDa619b6d20975be80A10332cD39b9a4b0FAa8BB": Erc20SubType.baseswap, // Poolside Factory
    "0xa19C51D91891D3DF7C13Ed22a2f89d328A82950f": Erc20SubType.fenix, // Fenix Factory
    "0x3a76e377ED58c8731F9DF3A36155942438744Ce3": Erc20SubType.zkswap, // ZKSwap Factory
    "0x6fcf753f2C67b83f7B09746Bbc4FA0047b35D050": Erc20SubType.pendle, // Pendle Factory
    "0x35A338522a435D46f77Be32C70E215B813D0e3aC": Erc20SubType.pendleYT, // Pendle YT Factory
    "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73": Erc20SubType.pancakeswap, // PancakeSwap Factory BNB
    "0x70ee0A6DB4F5a2Dc4d9c0b57bE97B9987e75BAFD": Erc20SubType.pendleYT, // Pendle YT Factory
    "0x0582D93FD9c9d42f26bE5D86a5f75291F92102C2": Erc20SubType.pendleYT, // Pendle Factory
    "0xFeE31A6eC6eBefa0b5A594Bf5b1139e3c6fAA0fB": Erc20SubType.pendle, // Pendle Factory
    "0xFD513630F697A9C1731F196185fb9ebA6eAAc20B": Erc20SubType.cpmmGamma, // CPMMGAMMA Factory
    "0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10": Erc20SubType.traderJoe, // Trader Joe Factory
    "0x5Ea9DD3b6f042A34Df818C6c1324BC5A7c61427a": Erc20SubType.curve, // Curve Corn 2crypto Factory
    "0xd7E72f3615aa65b92A4DBdC211E296a35512988B": Erc20SubType.curveNPool, // Curve Corn Stableswap Factory
    "0x7Ca46A636b02D4aBC66883D7FF164bDE506DC66a": Erc20SubType.curveNPool, // Curve Corn 3crypto Factory
    "0xbC0797015fcFc47d9C1856639CaE50D0e69FbEE8": Erc20SubType.curveNPool, // Curve Arbitrum 3crypto Factory
    "0xA5961898870943c68037F6848d2D866Ed2016bcB": Erc20SubType.curveNPool, // Curve Base
    "0xB255D6A720BB7c39fee173cE22113397119cB930": Erc20SubType.katana, // Katana Ronin
};
export function getTypeFromFactoryAddress(address) {
    if (factoryAddresses[address]) {
        return factoryAddresses[address];
    }
    return Erc20SubType.unknown;
}
// Mapping of dispatcher to fund value calculator for enzyme
export const enzymeFundValueCalculatorRouterMapping = {
    "0xC3DC853dD716bd5754f421ef94fdCbac3902ab32": "0x7c728cd0CfA92401E01A4849a01b57EE53F5b2b9", // ETH
    "0x2e25271297537B8124b8f883a92fFd95C4032733": "0xD70389a7d6171e1DBA6C3df4DB7331811fd93f08", // Polygon
};
