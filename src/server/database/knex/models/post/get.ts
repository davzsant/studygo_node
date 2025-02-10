import { Knex } from "../.."


const get = (post_id:number) => {
    console.log("Buscando um post")
    return Knex
        .select('*')
        .from('post')
        .where('post.id',post_id)
}

export default get