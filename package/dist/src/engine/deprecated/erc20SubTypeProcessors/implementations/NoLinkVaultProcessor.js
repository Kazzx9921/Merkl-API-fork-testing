import { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import { generateCardName } from "@/utils/generateCardName";
import { BN2Number } from "@sdk";
import { GenericProcessor } from "../GenericProcessor";
export class NoLinkVaultProcessor extends GenericProcessor {
    rounds = {
        round1: [],
        round2: [
            { key: "rate", call: "getRate", target: "rateAccountant" },
            { key: "base", call: "base", target: "rateAccountant" },
        ],
        round3: [{ key: "baseSymbol", call: "symbol", target: "base" }],
        round4: [{ key: "totalSupply", call: "totalSupply", target: "tokenAddress" }],
    };
    processingRound1(typeInfo) {
        if (typeInfo.tokenAddress === "0x196ead472583Bc1e9aF7A05F860D9857e1Bd3dCc") {
            typeInfo.protocol = "Unifi";
            typeInfo.rateAccountant = "0xA9fB7e2922216deBE3Fd5E1bBE7591eE446Dc21c";
        }
        if (typeInfo.tokenAddress === "0x170D847A8320F3B6A77eE15B0CAE430e3eC933a0") {
            typeInfo.protocol = "Unifi";
            typeInfo.rateAccountant = "0x2afb28b0561d99b5e00829EC2eF54946a00a35f7";
        }
        if (typeInfo.tokenAddress === "0x82c40e07277eBb92935f79cE92268F80dDc7caB4") {
            typeInfo.protocol = "Unifi";
            typeInfo.rateAccountant = "0xe0bDb7b9225A2CeB42998dc2E51D4D3CDeb7e3Be";
        }
        if (typeInfo.type === Erc20SubType.veda) {
            // To retrieve the rateAccountant, look at a transaction, find the teller, then find the accountant.
            if (typeInfo.tokenAddress === "0x08c6F91e2B681FaF5e17227F2a44C307b3C1364C")
                typeInfo.rateAccountant = "0xc315D6e14DDCDC7407784e2Caf815d131Bc1D3E7";
            if (typeInfo.tokenAddress === "0x5401b8620E5FB570064CA9114fd1e135fd77D57c")
                typeInfo.rateAccountant = "0x28634D0c5edC67CF2450E74deA49B90a4FF93dCE";
            if (typeInfo.tokenAddress === "0xFE0C961A49E1aEe2AE2d842fE40157365C6d978f")
                typeInfo.rateAccountant = "0xf1ecf4802C2b5Cf9c830A4AF297842Daa6D0f986";
            if (typeInfo.tokenAddress === "0x42A03534DBe07077d705311854E3B6933dD6Af85")
                typeInfo.rateAccountant = "0x1c217f17d57d3CCD1CB3d8CB16B21e8f0b544156";
            if (typeInfo.tokenAddress === "0x352180974C71f84a934953Cf49C4E538a6F9c997")
                typeInfo.rateAccountant = "0xBae19b38Bf727Be64AF0B578c34985c3D612e2Ba";
            if (typeInfo.tokenAddress === "0xeDa663610638E6557c27e2f4e973D3393e844E70")
                typeInfo.rateAccountant = "0x1D4F0F05e50312d3E7B65659Ef7d06aa74651e0C";
            if (typeInfo.tokenAddress === "0xf0bb20865277aBd641a307eCe5Ee04E79073416C")
                typeInfo.rateAccountant = "0x0d05D94a5F1E76C18fbeB7A13d17C8a314088198";
            if (typeInfo.tokenAddress === "0x9998e05030Aee3Af9AD3df35A34F5C51e1628779")
                typeInfo.rateAccountant = "0x22b025037ff1F6206F41b7b28968726bDBB5E7D5";
        }
    }
    async processingRound5(index, type, typeInfo, calls, campaign, pricer) {
        const rate = BN2Number(typeInfo.rate, Number(campaign.campaignParameters.decimalsTargetToken));
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const priceTargetToken = rate * ((await pricer.get({ symbol: typeInfo.baseSymbol })) ?? 0);
        const tvl = whitelistedSupplyTargetToken * priceTargetToken;
        return {
            ...typeInfo,
            baseSymbol: typeInfo.baseSymbol,
            tokenAddress: typeInfo.tokenAddress,
            whitelistedSupplyTargetToken,
            rate,
            totalSupply,
            priceTargetToken,
            tvl,
            blacklistedSupply,
            cardName: generateCardName(type, typeInfo, campaign),
            tokensDisplay: [{ symbol: typeInfo.tokenAddress, address: typeInfo.tokenAddress }],
        };
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
