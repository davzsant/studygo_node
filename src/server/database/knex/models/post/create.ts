import { PostType } from ".";
import { Knex } from "../..";

/**
 * Connect with database and create a user
 * @param data the content to create a new post register
 * @returns the POST ID or ERROR
 */
const create = async(post_data:Omit<PostType,'id'>): Promise<Error|number> => {
    try{
        const [result] = await Knex.from('post').insert(post_data)
        return result
    }
    catch(error)
    {
        return error as Error
    }

}

export default create