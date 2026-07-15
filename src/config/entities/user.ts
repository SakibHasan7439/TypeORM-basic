import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id!:string;

    @Column({type: "varchar"})
    name!: string;

    @Column({type: "varchar"})
    email!: string;

    @Column({type: "bool", default: true, nullable: true})
    isActive!: boolean;

    // @OneToOne(() => Profile)
    // @JoinColumn()
    // profile!: Profile
}