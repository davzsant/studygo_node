import get from "./getAll";
import getAll from "./get";
import create from "./create";

export type PostType = {
    id: number,
    title: string,
    body: string,
    user_id: number,
    question_id?: string,
    created: string,
    resume?: string
}

const postModel = {
    get,
    getAll,
    create
}

export default postModel