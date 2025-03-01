import { Knex } from "../..";

type QueryParams = {
    user_name?: string,
    search?: string,
    topic?: string,
}

/**
 * Get all the posts
 * @returns The list of posts
 */
const getAll = async (queryParams?: Partial<QueryParams>,limit:number = 10, page: number = 1) => {
    if(queryParams) console.log(queryParams);
    try{
        const post = Knex.select('post.*',"user.id as id_user","user.name", "user.username").from('post')
            .innerJoin('user','user.id','post.user_id').limit(limit).offset((page - 1) * limit)

        if(queryParams){
            if(queryParams.user_name){
                post.where('user.username','like',`%${queryParams.user_name}%`)
            }
            if(queryParams.search){
                post.where('post.title','like',`%${queryParams.search}%`)
                    .orWhere('post.body','like',`%${queryParams.search}%`)
            }
        }
        return post
    }catch(error)
    {
        return error as Error
    }
}

export default getAll