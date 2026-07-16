import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profile {
    @PrimaryGeneratedColumn("uuid")
    id!: string

    @Column({type: "varchar", length: 10})
    gender!: string

    @Column({type: "varchar", length: 200})
    photo!: string
}