import { Knex } from "../..";

/**
 * Get all Users
 * @param queryParams 
 * @returns 
 */
const getAll = async(queryParams?:string) => {

    if(queryParams) console.log(queryParams);
    try{
        const user = await Knex.select('*').from('user')
            .innerJoin('post','post.user_id','user.id')
        return user
    }catch(error)
    {
        return error as Error
    }
}

export default getAll