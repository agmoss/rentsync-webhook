import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "lead_entity"})
export class LeadEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 10000, nullable: true })
    readonly comment: string;

    @Column("varchar", { length: 20000, nullable: true })
    readonly leadContents: string;

    @Column({ nullable: true })
    readonly fullName: string;

    @Column({ nullable: true })
    readonly email: string;

    @Column({ nullable: true })
    readonly phone: string;

    @Column({ nullable: true })
    readonly adIdentifier: string;

    @Column({ nullable: true })
    readonly adUrl: string;

    @Column({ nullable: true })
    readonly source: string;

    @Column({ nullable: true })
    readonly sentAt: string;

    @Column({ nullable: true })
    readonly recipientEmail: string;

    @Column({ nullable: true })
    readonly firstName: string;

    @Column({ nullable: true })
    readonly lastName: string;

    @Column({ nullable: true })
    readonly clientKey: string;

    @Column({ nullable: true })
    readonly buildingId: number;

    @Column({ nullable: true })
    readonly adTitle: string;

    @Column({ nullable: true })
    readonly parser: string;
}
