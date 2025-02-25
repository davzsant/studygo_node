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
    created: string,
    resume?: string,
    subject?: string,
    topic?:string,
    subtopic?:string,
    genre?:string,
    category?:string,
    master_id?:number,
    just_master?: boolean,
    difficulty_level?:number,
    updated?: string
}

const postModel = {
    get,
    getAll,
    create, 
    update,
    deletePost
}

export default postModel