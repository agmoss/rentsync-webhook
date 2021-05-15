interface Source {
    name: string;
    ad_url: string;
    ad_title: string;
}

interface Client {
    recipient_email: string;
    building_id: string;
}

interface Customer {
    first_name: string;
    last_name: string;
    full_name: string;
    email: string;
    phone: string;
    comment: string;
}

export interface Lead {
    readonly source: Source;
    readonly client: Client;
    readonly customer: Customer;
    readonly sent_at: string;
}
