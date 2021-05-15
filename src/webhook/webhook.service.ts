import { Inject, Injectable } from "@nestjs/common";
import { __Logger } from "../logger/logger.service";
import { Lead } from "./interfaces/lead.interface";

@Injectable()
export class WebhookService {
    constructor(@Inject(__Logger) private readonly logger: __Logger) {
        this.logger.setContext(WebhookService.name);
    }

    createLead(lead: Lead) {
        this.logger.log(JSON.stringify(lead));
    }
}
