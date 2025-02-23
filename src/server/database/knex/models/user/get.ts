import { Knex } from "../.."


/**
 * Get one user by ID
 * @param user_id 
 * @returns 
 */
const get = async(user_id:number) => {
    try{
        const user = await Knex.select('*').from('user').where('user.id',user_id)
            .innerJoin('post','post.user_id','user.id').first()
        return user

    }catch(error){
        return error as Error
    }
}

export default get