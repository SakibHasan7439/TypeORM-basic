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
}