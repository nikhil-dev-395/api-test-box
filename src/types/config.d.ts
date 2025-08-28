export interface config {
  NODE_ENV: "development" | "production" | "test";
  PORT: string;
  REDIS_PORT: string;
  BASE_URL: string;
}
