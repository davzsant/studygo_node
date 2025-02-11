import { Knex } from "../.."


const get = (user_id:number) => {
    console.log("Buscando um user")
    return Knex
        .select('*')
        .from('User')
        .where('id',user_id)
        .first()
}

export default get