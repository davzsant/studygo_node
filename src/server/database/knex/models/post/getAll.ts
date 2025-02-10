import { Knex } from "../.."


const get = (post_id:number) => {
    return Knex
        .select('*')
        .from('post')
        .innerJoin('user','user.id','post.user_id')
        .where('post.id',post_id)
}

export default get