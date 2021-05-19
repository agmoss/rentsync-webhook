import { Module } from "@nestjs/common";
import { WebhookService } from "./webhook.service";
import { WebhookController } from "./webhook.controller";
import { __Logger } from "../logger/logger.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LeadEntity } from "./lead.entity";

@Module({
    imports: [TypeOrmModule.forFeature([LeadEntity])],
    providers: [WebhookService, __Logger],
    controllers: [WebhookController],
})
export class WebhookModule {}
