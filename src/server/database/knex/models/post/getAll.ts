import { Knex } from "../..";

/**
 * Get all the posts
 * @returns The list of posts
 */
const getAll = async (queryParams?: string) => {
    if(queryParams) console.log(queryParams);
    try{
        const post = await Knex.select('*').from('post')
            .innerJoin('user','user.id','post.user_id')
        return post
    }catch(error)
    {
        return error as Error
    }
}

export default getAll