import get from "./get";
import getAll from "./getAll";
import create from "./create";
import update from "./update";
import deletePost from "./delete";

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
    create, 
    update,
    deletePost
}

export default postModel