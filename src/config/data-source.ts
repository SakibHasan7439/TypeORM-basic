import { DataSource } from "typeorm";
import dotenv from 'dotenv';
import { User } from "./entities/user";

dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,

    ssl: {
        rejectUnauthorized: false
    },
    synchronize: true,
    entities: [User]
})