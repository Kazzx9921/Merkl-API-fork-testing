import { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import { ChainId } from "@sdk";
const chainAddressToType = {
    [ChainId.CORN]: {
        "0xab3291b73a1087265e126e330cede0cfd4b8a693": Erc20SubType.curveNPool,
        "0xf024586aacaf91fc4f77468fa758df280b2c9cd4": Erc20SubType.curveNPool,
        "0x29c1b0baa9ac0182cf9f6ffceaf143f3ef3546a0": Erc20SubType.curveNPool,
        "0xebe423b5466f9675669b2a4521b6e9f852dd1f52": Erc20SubType.curveNPool,
        "0xb27d447cf1d211ca60676728ac28060ecfb90800": Erc20SubType.curveNPool,
    },
    [ChainId.MAINNET]: {
        "0x08c6F91e2B681FaF5e17227F2a44C307b3C1364C": Erc20SubType.veda,
        "0x5401b8620E5FB570064CA9114fd1e135fd77D57c": Erc20SubType.veda,
        "0xFE0C961A49E1aEe2AE2d842fE40157365C6d978f": Erc20SubType.veda,
        "0x42A03534DBe07077d705311854E3B6933dD6Af85": Erc20SubType.veda,
        "0x352180974C71f84a934953Cf49C4E538a6F9c997": Erc20SubType.veda,
        "0xeDa663610638E6557c27e2f4e973D3393e844E70": Erc20SubType.veda,
        "0xf0bb20865277aBd641a307eCe5Ee04E79073416C": Erc20SubType.veda,
        "0xFF94993fA7EA27Efc943645F95Adb36C1b81244b": Erc20SubType.gearbox,
    },
    [ChainId.BOB]: {
        "0x9998e05030Aee3Af9AD3df35A34F5C51e1628779": Erc20SubType.veda,
    },
    [ChainId.ETHERLINK]: {
        "0x79052Ab3C166D4899a1e0DD033aC3b379AF0B1fD": Erc20SubType.xU308,
    },
};
export function getTypeFromAddressChain(chain, token) {
    return chainAddressToType?.[chain]?.[token] ?? Erc20SubType.unknown;
}
