/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Response,Request } from "express"
import models from "../../database/knex/models"
import { PostType } from "../../database/knex/models/post"
import { z } from "zod"

const postValidation = z.object({
    title:  z.string().min(1,'O titulo é obrigatório'),
    body: z.string().min(1,'O texto é obrigatório'),
    user_id: z.number(),
    created: z.date().optional(),
    resume: z.string().optional(),
    subject: z.string().optional(),
    topic: z.string().optional(),
    subtopic: z.string().optional(),
    updated: z.date().optional(),
    genre: z.string().optional(),
    category: z.string().optional(),
    master_id: z.number().optional(),
    just_master: z.boolean().optional(),
    difficulty_level: z.number().optional()

    
})


export const create = async (req:Request<{},{},Omit<PostType,'id'>>,res: Response) => {
    console.log(req.body)
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
    console.log("Novo Post criado")
    res.status(201).json(post_id)

}