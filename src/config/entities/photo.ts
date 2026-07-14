import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Photo {
    @PrimaryGeneratedColumn("uuid")
    id!: string

    @Column({type: "varchar"})
    name!: string

    @Column({type: "varchar"})
    description!: string

    @Column({type: "varchar"})
    fileName!: string

    @Column({type: "int"})
    views!: number

    @Column({default: true, type: "bool"})
    isPublished!: boolean
}