import { AppDataSource } from "../config/data-source";
import { User } from "../config/entities/user";

const userRepo = AppDataSource.getRepository(User);

export class UserRepository {

    async createUser (name: string, email: string, isActive: boolean): Promise<User> {
        const user = new User();

        const isUserExist = await userRepo.findOne({
            where: { email }
        });

        if(isUserExist){
            throw new Error("User already exist");
        }

        user.name = name;
        user.email = email;
        user.isActive = isActive;

        return userRepo.save(user);
    }

    async getUsers () : Promise<User[]> {
        const queryBuilder = userRepo.createQueryBuilder('user');
        const users = await queryBuilder.getMany();
        return users;
    }

    async getUserById (id: string) : Promise<User> {
        const user = await userRepo.findOne({
            where: {
                id
            }
        });

         if (!user) {
            throw new Error("User not found");
        }
        return user;
    }
}