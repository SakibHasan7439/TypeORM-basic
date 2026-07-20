import { PostStatus } from "../enums/postStatus";

export interface ICreatePhoto {
  name: string;
  description: string;
  filename: string;
  views: number;
  isPublished: boolean;
}

export interface IUpdatePhoto {
  name?: string;
  description?: string;
  filename?: string;
  views?: number;
  isPublished?: boolean;
}

export interface ICreatePhotoMetaData {
    height : number;
    width : number;
    compressed : string;
    comment : string;
    orientation : string;
    photoId: string;
};

export interface IPostPayload {
  title: string;
  content: string;
  status: PostStatus;
  userId: string;
}

export interface IQuestionPayload {
  title     : string;
  text      : string;
  categories: string[];
}