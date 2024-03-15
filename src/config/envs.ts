import { get } from 'env-var';

import 'dotenv/config';

export const envs = {
  port: get('PORT').required().asPortNumber(),
  mongoUri: get('MONGO_URI').required().asString(),
  discord_id: get('DISCORD_ID').required().asString(),
  discord_secret: get('DISCORD_SECRET').required().asString(),
  discord_callback: get('DISCORD_CB').required().asString()
};
