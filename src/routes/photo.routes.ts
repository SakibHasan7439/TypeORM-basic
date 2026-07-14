import { Request, Response, Router } from "express";
import { PhotoRepository } from "../repositories/photo";

const router = Router();
const photoRepository = new PhotoRepository();

router.post("/", async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const photo = await photoRepository.createPhoto(payload);
        res.status(201).json({
            success: true,
            data: photo,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create photo",
            error,
        });
    }
});

router.get("/", async (req: Request, res: Response) => {
    try {
        const photos = await photoRepository.getPhotos();
        res.status(201).json({
            success: true,
            message: "photos retrieved successfully",
            data: photos,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve photos",
            error,
        });
    }
});

export const userRoutes = router;