import { TokenService } from "@/modules/v4/token/token.service";
import { log } from "@/utils/logger";
import { apiDbClient } from "@db";
const tokens = await apiDbClient.token.findMany({
    select: {
        address: true,
        chainId: true,
        name: true,
        symbol: true,
    },
    where: {
        symbol: "UNKNOWN",
    },
    orderBy: {
        id: "asc",
    },
});
log.info(`found ${tokens.length} tokens with UNKNOWN symbol`);
for (const token of tokens) {
    try {
        const onchainData = await TokenService.fetchOnChain({
            chainId: token.chainId,
            address: token.address,
        });
        if (onchainData.name !== token.name) {
            await apiDbClient.token.update({
                where: {
                    chainId_address: {
                        address: token.address,
                        chainId: token.chainId,
                    },
                },
                data: {
                    name: onchainData.name,
                },
            });
            log.info(`updated name for ${token.address} on ${token.chainId} from ${token.name} to ${onchainData.name}`);
        }
        if (onchainData.symbol !== token.symbol) {
            await apiDbClient.token.update({
                where: {
                    chainId_address: {
                        address: token.address,
                        chainId: token.chainId,
                    },
                },
                data: {
                    symbol: onchainData.symbol,
                },
            });
            log.info(`updated name for ${token.address} on ${token.chainId} from ${token.name} to ${onchainData.name}`);
        }
    }
    catch (e) {
        console.error(e);
    }
}
process.exit(0);
