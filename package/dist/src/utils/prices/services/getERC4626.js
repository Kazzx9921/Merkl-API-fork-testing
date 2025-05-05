import { BN2Number } from "@sdk";
import { Contract, utils } from "ethers";
import { log } from "../../logger";
import { providers } from "../../providers";
export async function getERC4626Price(chainId, contractAddress, assetDecimals = 18, vaultDecimals = 18) {
    const contract = new Contract(contractAddress, ["function convertToAssets(uint256) external view returns(uint256)"], providers[chainId]);
    const assetAmount = await contract.convertToAssets(utils.parseUnits("1", vaultDecimals));
    if (!assetAmount || Number.isNaN(assetAmount))
        log.error("❌ ERC4626Service convertToAssets failed for address:", contractAddress);
    return BN2Number(assetAmount, assetDecimals);
}
