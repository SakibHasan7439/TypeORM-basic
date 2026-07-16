import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { PostStatus } from "../../enums/postStatus";
import { User } from "./user";

@Entity()
export class Posts {
    @PrimaryGeneratedColumn("uuid")
    id!: string

    @Column({type: "varchar"})
    title!: string

    @Column({type: "varchar"})
    content!: string

    @Column({
        type: "enum",
        enum: PostStatus,
        default: PostStatus.Pending
    })
    status!: PostStatus

     @ManyToOne(() => User, (user) => user.posts)
    user!: User
}