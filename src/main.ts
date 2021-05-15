import { NestFactory } from "@nestjs/core";
import Table from "cli-table3";
import chalk from "chalk";
import * as dotenv from "dotenv";
import figlet from "figlet";

import { __Logger } from "./logger/logger.service";
import pkg from "../package.json";
import { AppModule } from "./app.module";
import { WL } from "./logger/winston.logger";
import { NODE_ENV, APP_PORT } from "./environments";

const info = () => {
    const table = new Table();
    table.push(
        { version: `${pkg.version}` },
        { env: `${NODE_ENV}` },
        { port: `${APP_PORT}` }
    );
    const name = pkg.name ? pkg.name : "HA";
    const n = name.lastIndexOf("/");
    const result = name.substring(n + 1);
    console.log(
        chalk.red(
            figlet.textSync(result, {
                horizontalLayout: "default",
                verticalLayout: "default",
            })
        )
    );
    console.log(table.toString());
};

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        logger: WL(),
    });
    await app.listen(APP_PORT);
    info();
}

if (!module.parent) {
    __Logger.log("Starting bootstrap");
    try {
        dotenv.config();
        bootstrap().catch((e) => {
            __Logger.error(`Bootstrap Error => ${e}`);
        });
    } catch (e) {
        __Logger.error(e);
    }
}
