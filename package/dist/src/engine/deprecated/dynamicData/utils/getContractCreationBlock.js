import { log } from "@/utils/logger";
// Connect to network
// Binary search to find the block where the contract code was first deployed
async function binarySearchContractCreation(provider, contractAddress, startBlock, endBlock) {
    while (startBlock <= endBlock) {
        const midBlock = Math.floor((startBlock + endBlock) / 2);
        let code;
        try {
            code = await provider.getCode(contractAddress, midBlock);
        }
        catch {
            log.warn("There was an issue with this chain");
            break;
        }
        if (code === "0x") {
            // Contract doesn't exist yet, search the later half
            startBlock = midBlock + 1;
        }
        else {
            // Contract exists, search the earlier half
            endBlock = midBlock - 1;
        }
    }
    // `startBlock` will be the first block where the contract code exists
    return startBlock - 1;
}
// Function to find the contract creation transaction
export async function getContractCreationBlock(contractAddress, provider) {
    // Get the contract code at the given address
    const code = await provider.getCode(contractAddress);
    // If the contract code is empty, it's not a contract
    if (code === "0x") {
        log.warn("This address is not a contract.");
        throw new Error(`the address providers (${contractAddress}) is not a contract`);
    }
    // Binary search for the first block where the contract code exists
    const currentBlock = await provider.getBlockNumber(); // Latest block
    const contractCreationBlock = await binarySearchContractCreation(provider, contractAddress, 0, currentBlock);
    if (contractCreationBlock) {
        // log.info(`Contract was created in block: ${contractCreationBlock}`);
        return contractCreationBlock;
    }
    log.warn("Contract creation block not found.");
}
