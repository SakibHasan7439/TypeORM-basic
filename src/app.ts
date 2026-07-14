import express, { Request, Response } from 'express';
import cors from 'cors';
import { userRoutes } from './routes/user.routes';
import { photoRoutes } from './routes/photo.routes';
import { photoMetaDataRoutes } from './routes/photoMetaData.routes';


const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("TypeORM Server Running");
});

app.use("/api/users", userRoutes);
app.use("/api/photos", photoRoutes);
app.use("/api/photoMetaData", photoMetaDataRoutes);

export default app;