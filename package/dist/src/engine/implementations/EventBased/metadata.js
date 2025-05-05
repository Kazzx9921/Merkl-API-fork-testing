import { capitalize } from "@/utils/caseChanges";
export class EventBasedMetadata {
    async build(campaign) {
        const { params, computeChainId } = campaign;
        try {
            const action = "SWAP";
            let mainProtocolId = "reserve";
            let name = `${params.eventID.split("(")[0]} on ${capitalize(mainProtocolId)}`;
            let tokens = [];
            let hardcodeUrl;
            if (params.contract === "0xAED9261caa6A795178a4ab4D3Be62f2D01b2c214") {
                mainProtocolId = "reserve";
                name = "Trade BTC ETH DCA Index";
                hardcodeUrl = "https://app.reserve.org/ethereum/index-dtf/0x4e3b170dcbe704b248df5f56d488114ace01b1c5/overview";
                tokens = [
                    { chainId: computeChainId, address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
                    { chainId: computeChainId, address: "0x4E3B170DcBe704b248df5f56D488114acE01B1C5" },
                ];
            }
            if (params.contract === "0xB76726B4befE761a1859C1c02E7d157142E077c0") {
                mainProtocolId = "reserve";
                name = "Trade Imagine The SMEL";
                hardcodeUrl = "https://app.reserve.org/ethereum/index-dtf/0xf91384484f4717314798e8975bcd904a35fc2bf1/overview";
                tokens = [
                    { chainId: computeChainId, address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
                    { chainId: computeChainId, address: "0xF91384484F4717314798E8975BCd904A35fc2BF1" },
                ];
            }
            if (params.contract === "0xB986a32F468EdaD2F2F890094Ea39aE484FBCaF4") {
                mainProtocolId = "reserve";
                name = "Trade RWA Index";
                hardcodeUrl = "https://app.reserve.org/ethereum/index-dtf/0xA5cdea03B11042fc10B52aF9eCa48bb17A2107d2/overview";
                tokens = [
                    { chainId: computeChainId, address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
                    { chainId: computeChainId, address: "0xA5cdea03B11042fc10B52aF9eCa48bb17A2107d2" },
                ];
            }
            if (params.contract === "0x1914256C2F70aAc87e097Cd8B07958e9F17F2BCd") {
                mainProtocolId = "reserve";
                name = "Trade CoinDesk DeFi Select Index";
                hardcodeUrl = "https://app.reserve.org/ethereum/index-dtf/0x188D12Eb13a5Eadd0867074ce8354B1AD6f4790b/overview";
                tokens = [
                    { chainId: computeChainId, address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
                    { chainId: computeChainId, address: "0x188D12Eb13a5Eadd0867074ce8354B1AD6f4790b" },
                ];
            }
            if (params.contract === "0x4BaF786bd59022c942DceE4282b17D1bc681C99f") {
                mainProtocolId = "reserve";
                name = "Trade DeFi Growth Index";
                hardcodeUrl = "https://app.reserve.org/ethereum/index-dtf/0x9a1741E151233a82Cf69209A2F1bC7442B1fB29C/overview";
                tokens = [
                    { chainId: computeChainId, address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
                    { chainId: computeChainId, address: "0x9a1741E151233a82Cf69209A2F1bC7442B1fB29C" },
                ];
            }
            if (params.contract === "0x479e82b60f5885A3569d618d027Ef1Ac2020Ee82") {
                mainProtocolId = "reserve";
                name = "Trade Large Cap DeFi Index";
                hardcodeUrl = "https://app.reserve.org/ethereum/index-dtf/0x20d81101D254729a6E689418526bE31e2c544290/overview";
                tokens = [
                    { chainId: computeChainId, address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
                    { chainId: computeChainId, address: "0x20d81101D254729a6E689418526bE31e2c544290" },
                ];
            }
            if (params.contract === "0x477172B5176CC93e8766860fd58b0C640898080d") {
                mainProtocolId = "reserve";
                name = "Trade Base MemeIndexer DTF";
                hardcodeUrl = "https://app.reserve.org/base/index-dtf/0xb8753941196692E322846cfEE9C14C97AC81928A/overview";
                tokens = [
                    { chainId: computeChainId, address: "0x4200000000000000000000000000000000000006" },
                    { chainId: computeChainId, address: "0xb8753941196692E322846cfEE9C14C97AC81928A" },
                ];
            }
            if (params.contract === "0xd19c0dbbC5Ba2eC4faa0e3FFf892F0E95F23D9e0") {
                mainProtocolId = "reserve";
                name = "Trade MarketVector Token Terminal Fundamental Index ";
                hardcodeUrl = "https://app.reserve.org/base/index-dtf/0xe8b46b116D3BdFA787CE9CF3f5aCC78dc7cA380E/overview";
                tokens = [
                    { chainId: computeChainId, address: "0x4200000000000000000000000000000000000006" },
                    { chainId: computeChainId, address: "0xe8b46b116D3BdFA787CE9CF3f5aCC78dc7cA380E" },
                ];
            }
            if (params.contract === "0xD38d1AB8A150e6eE0AE70C86A8E9Fb0c83255b76") {
                mainProtocolId = "reserve";
                name = "Trade Bloomberg Galaxy Crypto Index";
                hardcodeUrl = "https://app.reserve.org/base/index-dtf/0x23418De10d422AD71C9D5713a2B8991a9c586443/overview";
                tokens = [
                    { chainId: computeChainId, address: "0x4200000000000000000000000000000000000006" },
                    { chainId: computeChainId, address: "0x23418De10d422AD71C9D5713a2B8991a9c586443" },
                ];
            }
            if (params.contract === "0xF37631E6481e61011FbDccbCE714ab06A031FBa8") {
                mainProtocolId = "reserve";
                name = "Trade MarketVector Digital Assets 25 Index";
                hardcodeUrl = "https://app.reserve.org/base/index-dtf/0xD600e748C17Ca237Fcb5967Fa13d688AFf17Be78/overview";
                tokens = [
                    { chainId: computeChainId, address: "0x4200000000000000000000000000000000000006" },
                    { chainId: computeChainId, address: "0xD600e748C17Ca237Fcb5967Fa13d688AFf17Be78" },
                ];
            }
            if (params.contract === "0x130C5bc30567987861620971C6B60C08D3784eF8") {
                mainProtocolId = "reserve";
                name = "Trade Virtuals Index";
                hardcodeUrl = "https://app.reserve.org/base/index-dtf/0x47686106181b3CEfe4eAf94C4c10b48Ac750370b/overview";
                tokens = [
                    { chainId: computeChainId, address: "0x4200000000000000000000000000000000000006" },
                    { chainId: computeChainId, address: "0x47686106181b3CEfe4eAf94C4c10b48Ac750370b" },
                ];
            }
            if (params.contract === "0xeD5210Bd97d855E8BEc2389439B8487eEcC3FC60") {
                mainProtocolId = "reserve";
                name = "Trade AIndex";
                hardcodeUrl = "https://app.reserve.org/base/index-dtf/0xfe45EDa533e97198d9f3dEEDA9aE6c147141f6F9/overview";
                tokens = [
                    { chainId: computeChainId, address: "0x4200000000000000000000000000000000000006" },
                    { chainId: computeChainId, address: "0xfe45EDa533e97198d9f3dEEDA9aE6c147141f6F9" },
                ];
            }
            if (params.contract === "0xFdCCD04DDCa9eCf052E8e9eF6BD09a9b323fBF49") {
                mainProtocolId = "reserve";
                name = "Trade Clanker Index ";
                hardcodeUrl = "https://app.reserve.org/base/index-dtf/0x44551CA46Fa5592bb572E20043f7C3D54c85cAD7/overview";
                tokens = [
                    { chainId: computeChainId, address: "0x4200000000000000000000000000000000000006" },
                    { chainId: computeChainId, address: "0x44551CA46Fa5592bb572E20043f7C3D54c85cAD7" },
                ];
            }
            if (params.contract === "0xE207FAb5839CA5bCc0d930761755cC7d82C1f19c") {
                mainProtocolId = "reserve";
                name = "Trade Alpha Base Index";
                hardcodeUrl = "https://app.reserve.org/base/index-dtf/0xeBcda5b80f62DD4DD2A96357b42BB6Facbf30267/overview";
                tokens = [
                    { chainId: computeChainId, address: "0x4200000000000000000000000000000000000006" },
                    { chainId: computeChainId, address: "0xeBcda5b80f62DD4DD2A96357b42BB6Facbf30267" },
                ];
            }
            if (params.contract.toLowerCase() === "0xd0bc067cf877f7b76ceb331891331d9e6acda1a7") {
                mainProtocolId = "hanji";
                name = `Trade USDC/XTZ on ${capitalize(mainProtocolId)}`;
                tokens = [
                    { chainId: computeChainId, address: "0x796Ea11Fa2dD751eD01b53C372fFDB4AAa8f00F9" },
                    { chainId: computeChainId, address: "0xc9B53AB2679f573e480d01e0f49e2B5CFB7a3EAb" },
                ];
            }
            if (params.contract.toLowerCase() === "0x65ea4dd7f789c71c0f57ed84b3bdc3062898d3cb") {
                mainProtocolId = "hanji";
                name = `Trade USDC/ETH on ${capitalize(mainProtocolId)}`;
                tokens = [
                    { chainId: computeChainId, address: "0x796Ea11Fa2dD751eD01b53C372fFDB4AAa8f00F9" },
                    { chainId: computeChainId, address: "0xfc24f770F94edBca6D6f885E12d4317320BcB401" },
                ];
            }
            if (params.contract.toLowerCase() === "0xbb6b01d94e3f6ebae8647cb56d544f57928ab758") {
                mainProtocolId = "hanji";
                name = `Trade USDC/BTC on ${capitalize(mainProtocolId)}`;
                tokens = [
                    { chainId: computeChainId, address: "0x796Ea11Fa2dD751eD01b53C372fFDB4AAa8f00F9" },
                    { chainId: computeChainId, address: "0xbFc94CD2B1E55999Cfc7347a9313e88702B83d0F" },
                ];
            }
            return {
                action,
                name,
                tokens,
                mainProtocol: mainProtocolId,
                depositUrl: hardcodeUrl ?? EventBasedMetadata.generateUrl(computeChainId, params),
            };
        }
        catch {
            return {
                action: "INVALID",
                name: "Event Based Campaign",
                tokens: [],
                mainProtocol: undefined,
            };
        }
    }
    static generateUrl(_computeChainId, params) {
        return params.url;
    }
}
