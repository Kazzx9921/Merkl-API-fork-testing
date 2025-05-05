import { apiDbClient } from "@db";
import { NULL_ADDRESS } from "@sdk";
export class BlacklistRepository {
    static async findMany() {
        return await apiDbClient.blacklist.findMany();
    }
    static async check(address) {
        return ((await apiDbClient.blacklist.findMany({
            where: {
                userAddress: address,
            },
        })).findIndex(x => !!x.arrestTimestamp) !== -1);
    }
    static async remove(address) {
        const points = await apiDbClient.blacklist.findMany({ where: { userAddress: address } });
        if (points?.filter(x => !!x.arrestTimestamp).length === 0) {
            throw new Error(`Address ${address} is not blacklisted`);
        }
        for (const point of points) {
            await apiDbClient.blacklist.update({
                data: {
                    arrestTimestamp: 0,
                },
                where: {
                    chainId_userAddress_poolAddress: {
                        chainId: point.chainId,
                        userAddress: point.userAddress,
                        poolAddress: point.poolAddress,
                    },
                },
            });
        }
        return true;
    }
    static async add(x) {
        if (!!(await apiDbClient.blacklist.findUnique({ where: { id: x.id } }))) {
            await apiDbClient.blacklist.delete({ where: { id: x.id } });
        }
        return await apiDbClient.blacklist.create({
            data: {
                id: x.id,
                User: { connectOrCreate: { where: { address: x.userAddress }, create: { address: x.userAddress } } },
                Chain: { connect: { id: x.chainId } },
                poolAddress: x.poolAddress ?? NULL_ADDRESS,
                arrestTimestamp: Date.now(),
                arrestDetails: !x.reason ? {} : { reason: x.reason },
            },
        });
    }
}
