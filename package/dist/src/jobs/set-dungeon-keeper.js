import { Client } from "@notionhq/client";
import { Client as DiscordClient, GatewayIntentBits } from "discord.js";
import moment from "moment";
const notion = new Client({ auth: process.env.NOTION_TOKEN });
const discord = new DiscordClient({ intents: [GatewayIntentBits.GuildMembers] });
const NOTION_EMAIL_TO_DISCORD_ID = {
    picodes: "thepicodes",
    hugo: "ugolxt",
    alex: "wombomango",
    nileco: ".nileco",
    thibaudb: ".greedythib",
    gnervo: "gs8nrv",
    vincent: "vince_merkl",
    hicham: "lamicham_93854",
    pveyrat: "sogipec",
    baptiste: "baptistg",
    clement: "clmntngl",
    "hicham.bouanani": "hichrptg",
};
async function fetchEntriesForDateWithTag(databaseId, date, tag) {
    const response = await notion.databases.query({
        database_id: databaseId,
        filter: {
            and: [
                {
                    property: "Date",
                    date: {
                        equals: date,
                    },
                },
                {
                    property: "Database",
                    select: {
                        equals: tag,
                    },
                },
            ],
        },
    });
    return response.results;
}
async function assignRole(notionId) {
    const discordId = NOTION_EMAIL_TO_DISCORD_ID[notionId];
    if (!discordId)
        throw "Discord ID not found.";
    await discord.login(process.env.DISCORD_TOKEN);
    const guild = await discord.guilds.cache.get("862708408711643136");
    if (!guild)
        throw "Guild not found.";
    const roles = await guild.roles.fetch();
    const teamRole = roles.find(r => r.name === "Team");
    const dkRole = roles.find(r => r.name === "Dungeon Keeper");
    if (!teamRole || !dkRole)
        throw "Roles not found.";
    const users = await guild.members.fetch();
    for (const [_id, dkUser] of users.filter(member => member.roles.cache.has(dkRole.id))) {
        await dkUser.roles.remove(dkRole);
    }
    const user = users
        .filter(member => member.roles.cache.has(teamRole.id))
        .find(member => member.user.tag === discordId);
    if (!user)
        throw "User not found";
    await user.roles.add(dkRole);
    const channel = await discord.channels.fetch("1328383110957633630");
    if (!channel)
        throw "Channel not found";
    if (channel.isSendable()) {
        await channel.send(`Lucky you <@${user.id}>! You're the <@&${dkRole.id}> today!`);
    }
}
async function main() {
    const entries = await fetchEntriesForDateWithTag("8546f6a84641406bafb2358762281e81", moment().format("YYYY-MM-DD"), "Dungeon Keeper");
    const user = entries?.[0];
    if (!user) {
        throw "No dk found for today";
    }
    const notionId = (user?.properties["Qui ?"]).people[0].person.email
        .replace("@angle.money", "")
        .replace("@merkl.xyz", "");
    await assignRole(notionId);
}
try {
    await main();
    process.exit(0);
}
catch (err) {
    console.error(err);
    process.exit(1);
}
