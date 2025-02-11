import { Knex } from "../.."


const get = (post_id:number) => {
    console.log("Buscando um post")
    return Knex
        .select('*')
        .from('post')
        .where('id',post_id)
        .first()
}

export default get