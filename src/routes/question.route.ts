import { Request, Response, Router } from "express";
import { QuestionRepository } from "../repositories/question";
import { IQuestionPayload } from "../interface/interface";
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();
const questionRepo = new QuestionRepository();

router.post("/", asyncHandler( async(req: Request, res: Response) => {
    const payload: IQuestionPayload = req.body;
    const question = await questionRepo.createQuestion(payload);

    res.status(201).json({
      success: true,
      message: "question created successfully",
      data: question,
    });
}));

router.get("/", asyncHandler( async(req: Request, res: Response) => {
    const question = await questionRepo.getQuestions();

    res.status(200).json({
      success: true,
      message: "question retrieved successfully",
      data: question,
    });
}));

export const QuestionRoutes = router;