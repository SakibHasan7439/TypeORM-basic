import { Request, Response, Router } from "express";
import { UserRepository } from "../repositories/user";

const router = Router();
const userRepository = new UserRepository();

router.post("/", async (req: Request, res: Response) => {
    try {
        const { name, email, isActive, gender, photo } = req.body;
        const user = await userRepository.createUser(name, email, isActive, gender, photo);
        res.status(201).json({
            success: true,
            data: user,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error instanceof Error ? error.message : "Failed to create user",
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


router.get("/:id", async(req:Request, res: Response) => {
    try {
        const {id} = req.params;
        const user = await userRepository.getUserById(id as string);

        res.status(201).json({
            success: true,
            message: "Users retrieved successfully",
            data: user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve users",
            error,
        });
    }
})


export const userRoutes = router;