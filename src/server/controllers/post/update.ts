import { Request,Response } from "express"
import { z } from "zod"
import models from "../../database/knex/models"

const postValidation = z.object({
    title:  z.string().min(1,'O titulo é obrigatório').optional(),
    body: z.string().min(1,'O texto é obrigatório').optional(),
    user_id: z.number().optional(),
    question_id: z.number().optional(),
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

type RequestParams = {
    id: string
}


export const update = async (req: Request<RequestParams>,res: Response) => {
    if(!req.params.id){
        res.status(400).json({ errors: { id: {_errors: ['ID is required']} } })
        return
    }
    const updatePostValidation = postValidation.safeParse(req.body)
    if(!updatePostValidation.success){
        console.log("Erro na criação do usuario")
        console.error(updatePostValidation.error.format())
        res.status(400).json({
            errors: updatePostValidation.error.format()
        })
        return
    }

    const post = models.postModel.update(req.params.id,req.body)
    if (post instanceof Error){
        res.status(500).json({
            errors: post.message
        })
        return
    }
    console.log("Post atualizado")
    res.status(200).json(post)
}