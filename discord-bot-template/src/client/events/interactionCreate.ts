import { Events, CommandInteraction } from "discord.js";
import { client } from "../bot";
import * as commandModules from "../commands";

const commands = Object(commandModules);

export default {
  name: Events.InteractionCreate,
  async execute(interaction: CommandInteraction) {
    try {
      if (!interaction.isCommand()) return;
      if (!interaction?.channelId) return;

      const { commandName } = interaction;
      commands[commandName].execute(interaction, client);
    } catch (e) {}
  },
};
