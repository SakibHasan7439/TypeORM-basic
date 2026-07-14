import { AppDataSource } from "../config/data-source";
import { PhotoMetaData } from "../config/entities/photoMetaData";
import { ICreatePhotoMetaData } from "../interface/interface";
import { PhotoRepository } from "./photo";

const photoMetaDataRepo = AppDataSource.getRepository(PhotoMetaData);
const photoRepository  = new PhotoRepository();
export class PhotoMetaDataRepository {
    async createPhotoMetaData (payload: ICreatePhotoMetaData) : Promise<PhotoMetaData> {
        const photo = await photoRepository.getPhotoById(payload.photoId);

        if(!photo){
            throw new Error("Photo does not exist!");
        }

        const photoMetaData = photoMetaDataRepo.create({
            ...payload,
            photo
        });
        return photoMetaDataRepo.save(photoMetaData);
    }
} 
