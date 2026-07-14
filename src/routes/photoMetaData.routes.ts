import { Request, Response, Router } from "express";
import { PhotoMetaDataRepository } from "../repositories/photoMetaData";

const router = Router();
const photoMetaDataRepo = new PhotoMetaDataRepository();

router.post("/", async(req: Request, res: Response) => {
    try {
        const payload = req.body;
        const photoMetaData = await photoMetaDataRepo.createPhotoMetaData(payload);
        res.status(201).json({
            success: true,
            data: photoMetaData,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create photo",
            error,
        });
    }
});

export const photoMetaDataRoutes = router;