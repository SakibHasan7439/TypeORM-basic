import { Request, Response, Router } from "express";
import { ProfileRepository } from "../repositories/profile";

const router = Router();
const profileRepo = new ProfileRepository();

router.post("/", async (req: Request, res: Response) => {
    try {
        const { gender, photo } = req.body;
        const user = await profileRepo.createProfile(gender, photo);
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


export const profileRoutes = router;