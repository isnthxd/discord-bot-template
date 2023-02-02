import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import config from "../config";
import * as commandModules from "./commands";

type Command = { data: unknown };

const commands = [];

for (const module of Object.values<Command>(commandModules)) {
    commands.push(module.data);
}

new REST({ version: "9" })
  .setToken(config.TOKEN)
  .put(Routes.applicationGuildCommands(config.CLIENT, config.GUILD), { body: commands })
  .then(() => console.log("Successfully registered application commands."))
  .catch(console.error);
