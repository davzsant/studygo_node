import { Knex } from "../.."

type MessageResponse = "Register Not Found to Delete"|"Deleted"

/**
 * Delete the post with the ID
 * @param post_id 
 * @returns
 */
const deletePost = async (post_id:number):Promise<Error|MessageResponse> => {
    try{
        const rowDeleted = await Knex('post').where('id',post_id).del()
        if(rowDeleted < 1) return "Register Not Found to Delete"
        return "Deleted"
    }catch(error)
    {
        return error as Error
    }
}

export default deletePost