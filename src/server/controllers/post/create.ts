/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Response,Request } from "express"
import models from "../../database/knex/models"
import { PostType } from "../../database/knex/models/post"
import { z } from "zod"

const postValidation = z.object({
    title:  z.string().min(1,'O titulo é obrigatório'),
    body: z.string().min(1,'O texto é obrigatório'),
    user_id: z.number(),
    question_id: z.number().optional(),
    created: z.date().optional(),
    resume: z.string().optional()
    
})


export const create = async (req:Request<{},{},Omit<PostType,'id'>>,res: Response) => {
    const createPostValidation = postValidation.safeParse(req.body)
    if(!createPostValidation.success){
        console.log("Erro na criação do usuario")
        console.error(createPostValidation.error.format())
        res.status(400).json({
            errors: createPostValidation.error.format()
        })
        return
    }

    const post_id = await models.postModel.create(req.body)
    if (post_id instanceof Error){
        res.status(500).json({
            errors: "Erro na insercao"
        })
        return
    }
    console.log("O ID DO POST È:",post_id)
    res.status(201).json(post_id)

}