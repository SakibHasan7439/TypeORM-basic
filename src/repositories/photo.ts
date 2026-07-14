import { AppDataSource } from "../config/data-source";
import { Photo } from "../config/entities/photo";
import { ICreatePhoto } from "../interface/interface";


const photoRepo = AppDataSource.getRepository(Photo);

export class PhotoRepository {
    async createPhoto (payload: ICreatePhoto) : Promise<Photo> {
        const photo = photoRepo.create(payload);
        return photoRepo.save(photo);
    }

    async getPhotos () : Promise<Photo[]> {
        const queryBuilder = photoRepo.createQueryBuilder();
        const photos = queryBuilder.getMany();
        return photos;
    }
};