import { DataSource } from "typeorm";
import dotenv from 'dotenv';
import { User } from "./entities/user";
import { Photo } from "./entities/photo";
import { PhotoMetaData } from "./entities/photoMetaData";
import { Profile } from "./entities/profile";
import { Posts } from "./entities/post";
import { Category } from "./entities/category";
import { Question } from "./entities/question";


dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,

    ssl: {
        rejectUnauthorized: false
    },
    synchronize: false,
    entities: [
        User,
        Photo,
        PhotoMetaData,
        Profile,
        Posts,
        Category,
        Question
    ],
    migrations: ["src/migrations/*.ts"],

})