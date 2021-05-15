import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { WebhookModule } from './webhook/webhook.module';
import { LoggerModule } from './logger/logger.module';

@Module({
    imports: [WebhookModule, LoggerModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
