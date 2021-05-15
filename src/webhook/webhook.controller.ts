import { Body, Controller, Post } from '@nestjs/common';
import { CreateLeadDto } from './dto/create-lead.dto';
import { WebhookService } from './webhook.service';

@Controller('webhook')
export class WebhookController {
    constructor(private readonly webhookService: WebhookService){}


    /**
     * Endpoint for lead data ingestion
     * @param createLeadDto 
     */
    @Post()
    async createLead(@Body() createLeadDto: CreateLeadDto) {
      this.webhookService.createLead(createLeadDto);
    }
}
