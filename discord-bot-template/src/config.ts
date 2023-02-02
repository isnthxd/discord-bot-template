import dotenv from "dotenv";

dotenv.config();

const { CLIENT, GUILD, TOKEN } = process.env;

if (!CLIENT || !GUILD || !TOKEN)
  throw new Error("Missing environment variables");

const config: Record<string, string> = {
  CLIENT,
  GUILD,
  TOKEN
};

export default config;
