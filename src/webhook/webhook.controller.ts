import { Body, Controller, Post, Req, Res } from "@nestjs/common";
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
    async createLead(@Body() lead: Buffer) {
        // TODO: Add run time validation
        const _data = JSON.parse(lead.toString())
        const _lead = _data.data as Lead
        this.webhookService.createLead(_lead);
    }

}
