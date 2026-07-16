import { AppDataSource } from "../config/data-source";
import { Profile } from "../config/entities/profile";

const profileRepo = AppDataSource.getRepository(Profile);

export class ProfileRepository {

    async createProfile (gender: string, photo: string, ): Promise<Profile> {
        const profile = new Profile;
        profile.gender = gender;
        profile.photo = photo;

        const result = await profileRepo.save(profile);
        return result;
    }
}