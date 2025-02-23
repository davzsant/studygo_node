import { UserType } from ".";
import { Knex } from "../..";

type MessageResponse = "Register User Not Found to Update"|"Update"

/**
 * Update user by ID
 * @param user_id 
 * @param user_data 
 * @returns 
 */
const update = async (user_id: string, user_data: Partial<UserType>): Promise<MessageResponse|Error> => {
    try{
        const rowsUpdate = await Knex.from('user').where('id',user_id).update(user_data)
        if(typeof rowsUpdate == 'number') return "Register User Not Found to Update"
        return "Update"
    }catch(error)
    {
        return error as Error
    }
}

export default update