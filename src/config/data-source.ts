import { DataSource } from "typeorm";
import dotenv from 'dotenv';
import { User } from "./entities/user";
import { Photo } from "./entities/photo";

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
        Photo
    ],
    migrations: ["src/migrations/*.ts"],

})