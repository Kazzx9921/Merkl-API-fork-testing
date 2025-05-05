import { OpportunityService } from "@/modules/v4/opportunity/opportunity.service";
import { apiDbClient } from "@db";
let page = 0;
while (true) {
    const opportunities = await apiDbClient.opportunity.findMany({
        select: {
            id: true,
            name: true,
            explorerAddress: true,
            depositUrl: true,
            identifier: true,
            MainProtocol: {
                select: {
                    url: true,
                    name: true,
                },
            },
            Chain: {
                select: {
                    name: true,
                },
            },
            type: true,
            action: true,
            Tokens: {
                select: {
                    symbol: true,
                    address: true,
                    name: true,
                },
            },
            Campaigns: {
                take: 1,
                include: {
                    RewardToken: {
                        select: {
                            address: true,
                        },
                    },
                },
            },
            description: true,
        },
        take: 1000,
        skip: page * 1000,
    });
    page += 1;
    if (opportunities.length === 0) {
        break;
    }
    for (const opportunity of opportunities) {
        const { action, Tokens: tokens, MainProtocol: protocol, Chain: chain } = opportunity;
        const symbols = tokens?.map(t => t.symbol).join("-");
        let description = "";
        switch (action) {
            case "POOL":
                description = `Earn rewards by providing liquidity to the ${protocol?.name} ${symbols} pool on ${chain.name}, or through a liquidity manager supported by Merkl`;
                break;
            case "HOLD":
                description = `Earn rewards by holding ${symbols} or by staking it in a supported contract`;
                break;
            case "LEND":
                description = `Earn rewards by lending ${symbols} to ${protocol?.name} on ${chain.name}`;
                break;
            case "BORROW":
                description = `Earn rewards by taking a long position on ${protocol?.name} ${symbols} on ${chain.name}`;
                break;
            case "DROP":
                description = `Visit your dashboard to check if you've earned rewards from this airdrop`;
                break;
            case "LONG":
                description = `Borrow ${symbols} on ${protocol?.name} on ${chain.name}`;
                break;
            case "SHORT":
                description = `Earn rewards by taking a short position on ${protocol?.name} ${symbols} on ${chain.name}`;
                break;
            case "SWAP":
                description = `Earn rewards by trading ${symbols} on ${chain.name}`;
                break;
            default:
                break;
        }
        const howToSteps = OpportunityService.howToSteps(action, tokens, protocol);
        if (description !== opportunity.description) {
            await apiDbClient.opportunity.update({
                where: {
                    id: opportunity.id,
                },
                data: {
                    description,
                    howToSteps,
                },
            });
            console.log(`updated description for ${opportunity.id} - ${opportunity.name} to ${description}`);
        }
        else {
            console.log(`no description for ${opportunity.id} - ${opportunity.name}`);
        }
    }
}
process.exit(0);
