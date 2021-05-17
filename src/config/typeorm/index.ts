import {
    DEV_DATABASE,
    DEV_PASSWORD,
    DEV_USERNAME,
} from "../../environments";
import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

import { LeadEntity } from "../../webhook/lead.entity";

@Injectable()
export class TypeOrmService implements TypeOrmOptionsFactory {
    async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
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
}
