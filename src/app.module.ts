import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { WebhookModule } from "./webhook/webhook.module";
import { LoggerModule } from "./logger/logger.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmService } from "./config/typeorm";

@Module({
    imports: [
        WebhookModule,
        LoggerModule,
        TypeOrmModule.forRootAsync({
            useClass: TypeOrmService,
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
