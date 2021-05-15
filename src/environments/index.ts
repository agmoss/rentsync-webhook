import * as dotenv from "dotenv";

dotenv.config();

type _env = "production" | "development";

export const NODE_ENV: _env = (process.env.NODE_ENV as _env) || "development";

export const STORAGE_ACCOUNT_NAME = process.env.STORAGE_ACCOUNT_NAME || "";
export const STORAGE_ACCOUNT_KEY = process.env.STORAGE_ACCOUNT_NAME || "";
