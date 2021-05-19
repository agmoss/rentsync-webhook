import { Body, Controller, Post, Res } from "@nestjs/common";
import { CreateLeadDto } from "./dto/create-lead.dto";
import { Lead } from "./interfaces/lead.interface";
import { WebhookService } from "./webhook.service";

@Controller("webhook")
export class WebhookController {
    constructor(private readonly webhookService: WebhookService) {}

    /**
     * Endpoint for lead data ingestion
     * @param createLeadDto
     */
    @Post()
    async createLead(@Body() lead: any) {
        this.webhookService.createLead(lead);
    }

}
