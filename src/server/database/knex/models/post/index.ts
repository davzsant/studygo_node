import get from "./get";
import getAll from "./getAll";
import create from "./create";
import update from "./update";
import deletePost from "./delete";
import count from "./count";

export type PostType = {
    id: number,
    title: string,
    body: string,
    autor?: string,
    user_id: number,
    created: string,
    resume?: string,
    subject_id?: number,
    topic_id?:number,
    subtopic_id?:number,
    genre?:string,
    category_id?:number,
    master_id?:number,
    just_master?: boolean,
    difficulty_level?:number,
    updated?: string,
    privacy?: number,
    category?: string,
    subject?: string,
    topic?: string,
    subtopic?: string,
}

const postModel = {
    get,
    getAll,
    create, 
    update,
    deletePost,
    count
}

export default postModel