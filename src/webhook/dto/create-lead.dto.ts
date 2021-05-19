import { IsString } from "class-validator";

export class CreateLeadDto {
    @IsString()
    readonly comment: string;

    @IsString()
    readonly fullName: string;

    @IsString()
    readonly email: string;

    @IsString()
    readonly phone: string;

    @IsString()
    readonly adIdentifier: string;

    @IsString()
    readonly adUrl: string;

    @IsString()
    readonly source: string;

    @IsString()
    readonly sentAt: string;

    @IsString()
    readonly recipientEmail: string;

    @IsString()
    readonly firstName: string;

    @IsString()
    readonly lastName: string;

    @IsString()
    readonly clientKey: string;

    readonly buildingId: number;

    @IsString()
    readonly adTitle: string;

    @IsString()
    readonly parser: string;
}
