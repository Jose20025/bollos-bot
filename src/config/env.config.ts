import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  BOT_TOKEN: z.string(),
  APP_ID: z.string(),
});

const env = envSchema.parse(process.env);

export default env;
