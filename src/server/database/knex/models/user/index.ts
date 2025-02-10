import create from "./create"
import get from "./get"
import getAll from "./getAll"

export type UserType = {
    id: number,
    name: string,
    username: string,
    email: string,
    created?: string,
    birth?: string,
    password: string,
    description?: string
}

const userModel = {
    get,
    getAll,
    create
}

export default userModel