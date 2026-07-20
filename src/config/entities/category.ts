import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./question";

@Entity()
export class Category {
    @PrimaryGeneratedColumn("uuid")
    id!: string

    @Column({type: "varchar"})
    name!: string

    @ManyToMany(()=> Question, (question) => question.categories)
    question!: Question[]
}