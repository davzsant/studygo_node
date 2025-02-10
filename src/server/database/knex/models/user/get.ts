import { Knex } from "../.."


const get = (user_id:number) => {
    console.log("Buscando um user")
    return Knex
        .select('*')
        .from('user')
        .where('user.id',user_id)
}

export default get