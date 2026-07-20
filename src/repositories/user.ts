import { AppDataSource } from "../config/data-source";
import { Profile } from "../config/entities/profile";
import { User } from "../config/entities/user";

const userRepo = AppDataSource.getRepository(User);

export class UserRepository {

    async createUser (name: string, email: string, isActive: boolean, gender: string, photo: string): Promise<User> {
        const user = new User();
        const profile = new Profile();

        const isUserExist = await userRepo.findOne({
            where: { email }
        });

        if(isUserExist){
            throw new Error("User already exist");
        }

        user.name = name;
        user.email = email;
        user.isActive = isActive;

        profile.gender = gender;
        profile.photo = photo;

        user.profile = profile;

        return userRepo.save(user);
    }

    async getUsers () : Promise<User[]> {
        const queryBuilder = userRepo.createQueryBuilder('user');
        const users = await queryBuilder
        .leftJoinAndSelect("user.posts", "posts")
        .getMany();
        return users;
    }

    async getUserById (id: string) : Promise<User> {
        const queryBuilder = userRepo.createQueryBuilder("user");
        const user = await queryBuilder
            .leftJoinAndSelect("user.profile", "profile")
            .leftJoinAndSelect("user.posts", "posts")
            .where("user.id = :id", { id })
            .getOne();

         if (!user) {
            throw new Error("User not found");
        }
        return user;
    }
}