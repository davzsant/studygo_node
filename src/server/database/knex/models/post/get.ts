import { Knex } from "../.."


/**Get one Post with the ID */
const get = async (post_id:number):Promise<Error|[]> => {
    try{
        const post = await Knex.select('post.*',"user.name", "user.username").from('post').where('post.id',post_id)
            .innerJoin('user','user.id','post.user_id').first()
            console.log(post)
        return post
    }catch(error)
    {
        return error as Error
    }
}

export default get