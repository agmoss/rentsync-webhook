import { Module } from "@nestjs/common";
import { WebhookService } from "./webhook.service";
import { WebhookController } from "./webhook.controller";
import { __Logger } from "../logger/logger.service";

@Module({
    providers: [WebhookService, __Logger],
    controllers: [WebhookController],
})
export class WebhookModule {}
