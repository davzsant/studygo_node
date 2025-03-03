import { PostType } from ".";
import { Knex } from "../..";

/**
 * Connect with database and create a user
 * @param data the content to create a new post register
 * @returns the POST ID or ERROR
 */
const create = async(post_data:Omit<PostType,'id'>): Promise<Error|number> => {
    try{
        const { subject, topic, subtopic, category } = post_data
        const {subject_id, topic_id, category_id, subtopic_id} = await createTopics(subject,topic,subtopic,category)


        console.log(subject,topic,subject,category)
        const { title,body, user_id  } = post_data
        const post = {title,body,user_id,subject_id, topic_id, category_id, subtopic_id}
        const [result] = await Knex.from('post').insert(post)
        return result
    }
    catch(error)
    {
        return error as Error
    }

}

async function createTopics(subject_name?:string,topic_name?:string,subtopic_name?:string,category_name?:string){
    if(!subject_name || !topic_name || !subtopic_name || !category_name){
        return { subject_id: 1, topic_id: 1, subtopic_id: 1, category_id: 1 }
    }
    let subject_id,topic_id,subtopic_id,category_id 

    let subject  = await Knex.from('subject').select('id').where('subject_name',subject_name).first()
    if(!subject){
        const [id] = await Knex.from('subject').insert({subject_name})
        subject_id = id
    }else{
        subject_id = subject.id
    }

    let topic  = await Knex.from('topic').select('id').where('topic_name',topic_name).first()
    if(!topic){
        const [id] = await Knex.from('topic').insert({topic_name,subject_id})
        topic_id = id
    }else{
        topic_id = topic.id
    }

    let subtopic  = await Knex.from('subtopic').select('id').where('subtopic_name',subtopic_name).first()
    if(!subtopic){
        const [id] = await Knex.from('subtopic').insert({subtopic_name,topic_id})
        subtopic_id = id
    }else{
        subtopic_id = subtopic.id
    }


    let category  = await Knex.from('category').select('id').where('category_name',category_name).first()
    if(!category){
        const [id] = await Knex.from('category').insert({category_name})
        category_id = id
    }else{
        category_id = category.id
    }


    console.log(`SUBJECT = ${subject_name} ID = ${subject_id}`)
    console.log(`TOPIC = ${topic_name} ID = ${topic_id}`)
    console.log(`SUBTOPIC = ${subtopic_name} ID = ${subtopic_id}`)
    console.log(`CATEGORY = ${category_name} ID = ${category_id}`)
    return {
        subject_id, topic_id, subtopic_id, category_id
    }
}

export default create