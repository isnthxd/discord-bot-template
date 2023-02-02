import { Events, Client } from "discord.js";

export default {
  name: Events.ClientReady,
  async execute(client: Client) {
    console.log("bot ready!");
  },
};
