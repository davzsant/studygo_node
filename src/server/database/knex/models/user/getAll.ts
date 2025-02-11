import { Knex } from "../..";


const getAll = () => {
    console.log("Buscando todos os users")
    return Knex
        .select('*')
        .from('User')
        /* .innerJoin('user','user.id','post.user_id') */
}

export default getAll