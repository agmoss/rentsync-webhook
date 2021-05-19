import { Inject, Injectable } from "@nestjs/common";
import { __Logger } from "../logger/logger.service";
import { Lead } from "./interfaces/lead.interface";
import { LeadEntity } from "./lead.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class WebhookService {
    constructor(
        @Inject(__Logger) private readonly logger: __Logger,
        @InjectRepository(LeadEntity)
        private leadRepository: Repository<LeadEntity>
    ) {
        this.logger.setContext(WebhookService.name);
    }

    async createLead(lead: any) {
        try {
            return await this.leadRepository.save({leadContents: lead});
        } catch (e) {
            this.logger.error(JSON.stringify(e));
            throw e;
        }
    }
}
