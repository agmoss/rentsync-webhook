import { Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { WebhookModule } from "./webhook/webhook.module";
import { LoggerModule } from "./logger/logger.module";
import { TypeOrmService } from "./config/typeorm";
import { LoggingInterceptor } from "./logger/logging.interceptor";

@Module({
    imports: [
        WebhookModule,
        LoggerModule,
        TypeOrmModule.forRootAsync({
            useClass: TypeOrmService,
        }),
    ],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: APP_INTERCEPTOR,
            useClass: LoggingInterceptor,
        },
    ],
})
export class AppModule {}
