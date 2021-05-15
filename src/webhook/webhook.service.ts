import { Injectable } from "@nestjs/common";
import { Lead } from "./interfaces/lead.interface";

@Injectable()
export class WebhookService {
    createLead(lead: Lead) {
        console.log(JSON.stringify(lead));
    }
}
