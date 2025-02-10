import { Knex } from "../..";


const getAll = () => {
    return Knex
        .select('*')
        .from('post')
        /* .innerJoin('user','user.id','post.user_id') */
}

export default getAll