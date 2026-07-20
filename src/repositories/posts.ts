import { AppDataSource } from "../config/data-source";
import { Posts } from "../config/entities/post";
import { User } from "../config/entities/user";
import { IPostPayload } from "../interface/interface";


const postRepo = AppDataSource.getRepository(Posts);
const userRepo = AppDataSource.getRepository(User);

export class PostRepository {
    async createPost (payload: IPostPayload): Promise<Posts> {

        const {userId, ...postData} = payload;

        const isUserExist = await userRepo.findOneBy({id: userId})
        if(!isUserExist){
            throw new Error("User not found");
        }

        const post = postRepo.create({
            ...postData,
            user: {
                id: userId
            }
        });

        const saved = await postRepo.save(post);

        const result = await postRepo.findOne({
            where: { id: saved.id },
            relations: { user: true },
            select: {
                
            }
        })

        if(!result){
            throw new Error("No user found for this posts");
        }
        return result;
    }

    async getPosts (filters: {
        title ?: string,
        content ?: string,
        status ?: string,
        userId ?: string
    }): Promise<Posts[]> {

        const query = postRepo.createQueryBuilder("post")
        .leftJoin("post.user", "user")
        .select([
            "post",
            "user.id",
            "user.name"
        ]);

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