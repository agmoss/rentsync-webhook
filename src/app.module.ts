import {
    MiddlewareConsumer,
    Module,
    NestModule,
    RequestMethod,
} from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { WebhookModule } from "./webhook/webhook.module";
import { LoggerModule } from "./logger/logger.module";
import { TypeOrmService } from "./config/typeorm";
import { LoggingInterceptor } from "./logger/logging.interceptor";
import { JsonBodyMiddleware } from "./middleware/json-body.middleware";
import { RawBodyMiddleware } from "./middleware/raw-body.middleware";

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


export class AppModule implements NestModule {
    public configure(consumer: MiddlewareConsumer): void {
        consumer
            .apply(RawBodyMiddleware)
            .forRoutes({
                path: "/webhook",
                method: RequestMethod.POST,
            })
            .apply(JsonBodyMiddleware)
            .forRoutes("*");
    }
}

