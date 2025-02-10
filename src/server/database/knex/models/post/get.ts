import { Knex } from "../..";


const getAll = () => {
    console.log("Buscando todos os posts")
    return Knex
        .select('*')
        .from('post')
        /* .innerJoin('user','user.id','post.user_id') */
}

export default getAll