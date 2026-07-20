import { AppDataSource } from "../config/data-source";
import { Category } from "../config/entities/category";


const categoryRepo = AppDataSource.getRepository(Category);

export class CategoryRepository {
    async createCategory (name: string): Promise<Category> {
        const category = new Category();
        category.name = name;

        return categoryRepo.save(category);
    }

    async getCategories (): Promise<Category[]> {
        const queryBuilder = categoryRepo.createQueryBuilder("category");
        const category = await queryBuilder
            .leftJoinAndSelect("category.question", "question")
            .getMany();

        return category;
    }
}