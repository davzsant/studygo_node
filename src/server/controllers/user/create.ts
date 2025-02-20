/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Response,Request } from "express"
import models from "../../database/knex/models"
import { UserType } from "../../database/knex/models/user"
import { z } from "zod"

const userValidation = z.object({
    name: z.string().min(3,'Insira um nome válido'),
    username: z.string().min(5,'É necessario um username para criar o usuario'),
    email: z.string().email('É becessario ser um email').optional(),
    crated: z.date().optional(),
    password: z.string().min(6,"É necessario no minimo 6 caracters para criar a senha"),
    description: z.string().optional(),
    birth: z.date().optional()
})

export const create = async(req:Request<{},{},Omit<UserType,'id'>>,res: Response) => {
    const createUserValidation = userValidation.safeParse(req.body)
    if(!createUserValidation.success){
        console.log("Erro na criação do usuario")
        console.error(createUserValidation.error.format())
        res.status(400).json({
            errors: createUserValidation.error.format()
        })
        return
    }
    const user_id = await models.userModel.create(req.body)
    if (user_id instanceof Error){
        res.status(500).json({
            erro: "Erro na insercao do usuario"
        })
        return
    }
    console.log("O ID DO USER È:",user_id)
    res.json(user_id)

}