import { UserType } from ".";
import { Knex } from "../..";



/**
 * Create a user
 * @param user_data 
 * @returns 
 */
const create = async(user_data:Omit<UserType,'id'>): Promise<Error|number> => {
    try{
        if(user_data.birth)user_data.birth = new Date(user_data.birth)
        const [result] = await Knex.from('user').insert(user_data)
        return result
    }
    catch(error)
    {
        return error as Error
    }

}

export default create