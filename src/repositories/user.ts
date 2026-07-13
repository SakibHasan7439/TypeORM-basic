import { AppDataSource } from "../config/data-source";
import { User } from "../config/entities/user";

const userRepo = AppDataSource.getRepository(User);

export class UserRepository {

    async createUser (name: string, email: string, isActive: boolean): Promise<User> {
        const user = new User();
        user.name = name;
        user.email = email;
        user.isActive = isActive;

        return userRepo.save(user);
    }
}