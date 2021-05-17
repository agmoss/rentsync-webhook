import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LeadEntity {
    @PrimaryGeneratedColumn()
    id: number;

    // Source

    @Column()
    name: string;

    @Column()
    ad_url: string;

    @Column()
    ad_title: string;

    // Client

    @Column()
    recipient_email: string;

    @Column()
    building_id: number;

    // Customer

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    full_name: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    comment: string;

    // Sent at

    @Column()
    sent_at: string;
}
