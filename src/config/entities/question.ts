import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category";

@Entity()
export class Question {
    @PrimaryGeneratedColumn("uuid")
    id!: string

    @Column({type: "varchar"})
    title!: string

    @Column({type: "varchar"})
    text!: string

    @ManyToMany(() => Category)
    @JoinTable()
    categories!: Category[];
}