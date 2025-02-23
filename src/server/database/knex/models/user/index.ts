import create from "./create"
import deleteUser from "./delete"
import get from "./get"
import getAll from "./getAll"
import update from "./update"

export type UserType = {
    id: number,
    name: string,
    username: string,
    email: string,
    created?: string,
    birth?: Date,
    password: string,
    description?: string
}

const userModel = {
    get,
    getAll,
    create,
    update,
    deleteUser
}

export default userModel