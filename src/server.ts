import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize()
.then(() => {
    console.log("Neon Connected"),
    app.listen(process.env.PORT);
})
.catch((err) => {
    console.error(err);
})