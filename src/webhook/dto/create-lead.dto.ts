import { IsDefined, IsInt, IsString } from "class-validator";

class SourceDto {
    @IsString()
    name: string;
    @IsString()
    ad_url: string;
    @IsString()
    ad_title: string;
}

class ClientDto {
    @IsString()
    recipient_email: string;
    @IsInt()
    building_id: string;
}

class CustomerDto {
    @IsString()
    first_name: string;
    @IsString()
    last_name: string;
    @IsString()
    full_name: string;
    @IsString()
    email: string;
    @IsString()
    phone: string;
    @IsString()
    comment: string;
}

export class CreateLeadDto {
    @IsDefined()
    readonly source: SourceDto;
    @IsDefined()
    readonly client: ClientDto;
    @IsString()
    readonly sent_at: string;
}
