import express, { Request, Response } from 'express';
import cors from 'cors';
import { userRoutes } from './routes/user.routes';
import { photoRoutes } from './routes/photo.routes';
import { photoMetaDataRoutes } from './routes/photoMetaData.routes';
import { profileRoutes } from './routes/profile.routes';
import { postRoutes } from './routes/post.routes';
import { CategoryRoutes } from './routes/category.routes';
import { QuestionRoutes } from './routes/question.route';


const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("TypeORM Server Running");
});

app.use("/api/users", userRoutes);
app.use("/api/photos", photoRoutes);
app.use("/api/photoMetaData", photoMetaDataRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/category", CategoryRoutes);
app.use("/api/question", QuestionRoutes);

export default app;