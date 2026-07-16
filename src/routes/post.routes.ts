import { Request, Response, Router } from "express";
import { UserRepository } from "../repositories/user";
import { PostRepository } from "../repositories/posts";

const router = Router();
const postRepository = new PostRepository();

router.post("/", async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const user = await postRepository.createPost(payload);
        res.status(201).json({
            success: true,
            data: user,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create posts",
            error,
        });
    }
});

router.get("/", async (req: Request, res: Response) => {
    try {
        const {title, content, status} = req.query;
        const users = await postRepository.getPosts({
            title:title as string,
            content:content as string, 
            status:status as string   
        });
        res.status(201).json({
            success: true,
            message: "Users retrieved successfully",
            data: users,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve users",
            error,
        });
    }
});

export const postRoutes = router;