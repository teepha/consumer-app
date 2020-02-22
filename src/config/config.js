import dotenv from "dotenv";

dotenv.config();

const config = {
  dbUrl: process.env.DB_URL,
  port: process.env.PORT,
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
  }
};

export default config;
