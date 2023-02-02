import { Client, GatewayIntentBits } from "discord.js";
import * as eventModules from "./events";

const events = Object(eventModules);

export const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

for (const [name, value] of Object.entries(events)) {
  client.on(name, (value as any)["default"]["execute"]);
}