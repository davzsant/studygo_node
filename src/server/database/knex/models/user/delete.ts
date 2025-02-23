import { Knex } from "../.."

type MessageResponse = "Register Not Found to Delete"|"Deleted"

/**
 * Delete a user by ID
 * @param user_id 
 * @returns 
 */
const deleteUser = async(user_id:number):Promise<Error|MessageResponse> => {
    try{
        const rowDeleted = await Knex('user').where('id',user_id).del()
        if(rowDeleted < 1) return "Register Not Found to Delete"
        return "Deleted"
    }catch(error)
    {
        return error as Error
    }
}

export default deleteUser