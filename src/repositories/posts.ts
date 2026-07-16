import { AppDataSource } from "../config/data-source";
import { Posts } from "../config/entities/post";
import { IPostPayload } from "../interface/interface";


const postRepo = AppDataSource.getRepository(Posts);

export class PostRepository {
    async createPost (payload: IPostPayload): Promise<Posts> {
        const post = postRepo.create(payload);

        const result = await postRepo.save(post);
        return result;
    }

    async getPosts (filters: {
        title ?: string,
        content ?: string,
        status ?: string
    }): Promise<Posts[]> {

        const query = postRepo.createQueryBuilder("post");
        if(filters.title){
            query.orWhere(
                "post.title ILIKE :title",
                {
                    title: `%${filters.title}%`
                }
            )
        };
        if(filters.content){
            query.orWhere(
                "post.content ILIKE :content",
                {
                    content: `%${filters.content}%`
                }
            )
        };
        if(filters.status){
            query.orWhere(
                "post.status = :status",{status: filters.status}
            )
        };

        const result = await query.getMany();
        return result;
    }
}