import * as dotenv from "dotenv";

dotenv.config();

type _env = "production" | "development";

export const NODE_ENV: _env = (process.env.NODE_ENV as _env) || "development";

export const STORAGE_ACCOUNT_NAME = process.env.STORAGE_ACCOUNT_NAME || "";
export const STORAGE_ACCOUNT_KEY = process.env.STORAGE_ACCOUNT_KEY || "";

export const DB_PORT = process.env.STORAGE_ACCOUNT_NAME || 3306;
export const DEV_DATABASE = process.env.DEV_DATABASE || "";
export const DEV_PASSWORD = process.env.DEV_PASSWORD || "";
export const DEV_USERNAME = process.env.DEV_USERNAME || "";

export const PROD_HOST = process.env.PROD_HOST || "";
export const PROD_DATABASE = process.env.PROD_DATABASE || "";
export const PROD_PASSWORD = process.env.PROD_PASSWORD || "";
export const PROD_USERNAME = process.env.PROD_USERNAME || "";

export const APP_PORT = 3000;
