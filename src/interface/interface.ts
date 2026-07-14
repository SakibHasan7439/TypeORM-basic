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