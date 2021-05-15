import {
    WinstonModule,
    utilities as nestWinstonModuleUtilities,
} from "nest-winston";
import * as winston from "winston";
import chalk from "chalk";
import { winstonAzureBlob } from "winston-azure-blob";

import {
    NODE_ENV,
    STORAGE_ACCOUNT_KEY,
    STORAGE_ACCOUNT_NAME,
} from "../environments";

export const WL = () => {
    switch (NODE_ENV) {
        case "development": {
            return WinstonModule.createLogger({
                transports: [
                    new winston.transports.Console({
                        format: winston.format.combine(
                            winston.format.colorize(),
                            winston.format.simple(),
                            winston.format.timestamp(),
                            winston.format.align(),
                            winston.format.printf((info) => {
                                const {
                                    timestamp,
                                    level,
                                    message,
                                    context,
                                    ...args
                                } = info;

                                const ts = timestamp
                                    .slice(0, 19)
                                    .replace("T", " ");
                                return ` ${chalk.red(
                                    context
                                )} ${chalk.bgBlueBright(
                                    chalk.black(ts)
                                )} [${level}]: ${chalk.magenta(message)} ${
                                    Object.keys(args).length
                                        ? JSON.stringify(args, null, 2)
                                        : ""
                                }`;
                            })
                        ),
                    }),
                    new winston.transports.File({
                        filename: "combined.log",
                        level: "info",
                    }),
                    new winston.transports.File({
                        filename: "errors.log",
                        level: "error",
                    }),
                ],
                exceptionHandlers: [
                    new winston.transports.File({ filename: "exceptions.log" }),
                ],
            });
        }
        case "production": {
            return WinstonModule.createLogger({
                transports: [
                    new winston.transports.Console({
                        format: winston.format.combine(
                            winston.format.timestamp(),
                            nestWinstonModuleUtilities.format.nestLike()
                        ),
                        handleExceptions: true,
                    }),
                    winston.add(
                        winstonAzureBlob({
                            account: {
                                name: STORAGE_ACCOUNT_NAME,
                                key: STORAGE_ACCOUNT_KEY,
                            },
                            containerName: "rentsync",
                            blobName: "production_error",
                            level: "error",
                            rotatePeriod: "YYYY-MM-DD",
                        })
                    ),
                    winston.add(
                        winstonAzureBlob({
                            account: {
                                name: STORAGE_ACCOUNT_NAME,
                                key: STORAGE_ACCOUNT_KEY,
                            },
                            containerName: "rentsync",
                            blobName: "production_info",
                            level: "info",
                            rotatePeriod: "YYYY-MM-DD",
                        })
                    ),
                ],
                exceptionHandlers: [
                    winston.add(
                        winstonAzureBlob({
                            account: {
                                name: STORAGE_ACCOUNT_NAME,
                                key: STORAGE_ACCOUNT_KEY,
                            },
                            containerName: "rentsync",
                            blobName: "production_exceptions",
                            rotatePeriod: "YYYY-MM-DD",
                        })
                    ),
                ],
                exitOnError: false,
            });
        }
    }
};
