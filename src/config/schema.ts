import { configDotenv } from "dotenv";
configDotenv();
import { z } from "zod";

export const configSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]),
  PORT: z.string().min(1, "port is required"),
  REDIS_PORT: z.string().min(1, "redis port is required"),
  BASE_URL: z.string().min(1, "base url is required"),
});

export type EnvSchema = z.infer<typeof configSchema>;
