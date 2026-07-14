import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Photo } from "./photo";

@Entity()
export class PhotoMetaData {
    @PrimaryGeneratedColumn("uuid")
    id!: string

    @Column("int")
    height!: number

    @Column("int")
    width!: number

    @Column("varchar")
    orientation!: string

    @Column("varchar")
    compressed!: string

    @Column("varchar")
    comment!: string

    @OneToOne(() => Photo)
    @JoinColumn()
    photo!: Photo
}