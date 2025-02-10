import { Knex } from ".."


type IUser = {
    id: number,
    name: string,
    username: string,
    email: string,
    created: Date,
    password: string,
    description: string,
    birth: Date,
    two_steps: string
}


async function getAll(): Promise<IUser[]>{
    return Knex<IUser>('user').select('*').limit(10)
}

export const user = {
    getAll
}