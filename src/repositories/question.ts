import { In } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { Category } from "../config/entities/category";
import { Question } from "../config/entities/question";
import { IQuestionPayload } from "../interface/interface";

const questionRepo = AppDataSource.getRepository(Question);
const categoryRepo = AppDataSource.getRepository(Category);

export class QuestionRepository {
    async createQuestion (payload : IQuestionPayload) : Promise<Question> {
        const question = new Question();

        question.text = payload.text,
        question.title = payload.title,
        question.categories = await categoryRepo.findBy({
            id: In(payload.categories)
        });

        return await questionRepo.save(question);
    }
}