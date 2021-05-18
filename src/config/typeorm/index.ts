import {
    DEV_DATABASE,
    DEV_PASSWORD,
    DEV_USERNAME,
    NODE_ENV,
    PROD_DATABASE,
    PROD_HOST,
    PROD_PASSWORD,
    PROD_USERNAME,
} from "../../environments";
import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

import { LeadEntity } from "../../webhook/lead.entity";

@Injectable()
export class TypeOrmService implements TypeOrmOptionsFactory {
    async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
        switch (NODE_ENV) {
            case "development": {
                return {
                    type: "postgres",
                    host: "localhost",
                    port: 5432,
                    username: DEV_USERNAME,
                    password: DEV_PASSWORD,
                    database: DEV_DATABASE,
                    autoLoadEntities: true,
                    synchronize: true,
                    entities: [LeadEntity],
                };
            }
            case "production": {
                return {
                    type: "postgres",
                    host: PROD_HOST,
                    port: 5432,
                    username: PROD_USERNAME,
                    password: PROD_PASSWORD,
                    database: PROD_DATABASE,
                    autoLoadEntities: true,
                    synchronize: true,
                    entities: [LeadEntity],
                    ssl: true
                };
            }
        }
    }
}
