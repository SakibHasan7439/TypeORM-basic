import { Request, Response, Router } from "express";
import { CategoryRepository } from "../repositories/category";

const router = Router();
const CategoryRepo = new CategoryRepository();

router.post("/", async (req: Request, res: Response) => {
    try {
        const { name } = req.body;
        const user = await CategoryRepo.createCategory(name);
        res.status(201).json({
            success: true,
            data: user,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create profile",
            error,
        });
    }
});

router.get("/", async (req: Request, res: Response) => {
    try {
        const photos = await CategoryRepo.getCategories();
        res.status(201).json({
            success: true,
            message: "Categories retrieved successfully",
            data: photos,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve Categories",
            error,
        });
    }
})


export const CategoryRoutes = router;