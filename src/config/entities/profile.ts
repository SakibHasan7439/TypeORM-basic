import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

@Entity()
export class Profile {
    @PrimaryGeneratedColumn("uuid")
    id!: string

    @Column({type: "varchar", length: 10})
    gender!: string

    @Column({type: "varchar", length: 200})
    photo!: string

    @OneToOne(() =>  User, (user) => user.profile)
    user !: User
}