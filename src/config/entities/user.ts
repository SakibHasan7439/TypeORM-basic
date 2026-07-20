import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile";
import { Posts } from "./post";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id!:string;

    @Column({type: "varchar"})
    name!: string;

    @Column({type: "varchar", unique: true})
    email!: string;

    @Column({type: "bool", default: true, nullable: true})
    isActive!: boolean;

    @OneToOne(() => Profile, {
        cascade: true
    })
    @JoinColumn()
    profile!: Profile

    @OneToMany(() => Posts, (posts) => posts.user)
    posts!: Posts[]
}
