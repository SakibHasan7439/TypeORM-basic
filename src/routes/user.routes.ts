import { Request, Response, Router } from "express";
import { UserRepository } from "../repositories/user";

const router = Router();
const userRepository = new UserRepository();

router.post("/", async (req: Request, res: Response) => {
    try {
        const { name, email, isActive } = req.body;
        const user = await userRepository.createUser(name, email, isActive);
        res.status(201).json({
            success: true,
            data: user,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create user",
            error,
        });
    }
});

router.get("/", async (req: Request, res: Response) => {
    try {
        const users = await userRepository.getUsers();
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

export const userRoutes = router;