import { PostType } from ".";
import { Knex } from "../..";

type MessageResponse = "Register Post Not Found to Update"|"Update"
/**
 * Update the post with the post_id and the post_data
 * @param post_id 
 * @param post_data 
 * @returns 
 */
const update = async (post_id: string, post_data: Partial<PostType>):Promise<Error|MessageResponse> => {
    try{
        const rowsUpdate = await Knex.from('post').where('id',post_id).update(post_data)
        if(typeof rowsUpdate == 'number') return "Register Post Not Found to Update"
        return "Update"
    }catch(error)
    {
        return error as Error
    }
}

export default update