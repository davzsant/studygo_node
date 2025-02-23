/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Response,Request } from "express"
import models from "../../database/knex/models"
import { UserType } from "../../database/knex/models/user"
import { z } from "zod"

const userValidation = z.object({
    name: z.string().min(3,'Insira um nome válido').optional(),
    username: z.string().min(5,'É necessario um username para criar o usuario').optional(),
    email: z.string().email('É becessario ser um email').optional(),
    crated: z.date().optional(),
    password: z.string().min(6,"É necessario no minimo 6 caracters para criar a senha").optional(),
    description: z.string().optional(),
    birth: z.date().optional()
})

type RequestParams = {
    id: string
}

export const update = async(req:Request<RequestParams,{},Omit<UserType,'id'>>,res: Response) => {
    if(!req.params.id){
        res.json({ errors: { id: {_errors: ['ID is required']} } })
        return
    }
    const updateUserValidation = userValidation.safeParse(req.body)

    if(!updateUserValidation.success){
        res.status(400).json({ errors: updateUserValidation.error.format()})
        return
    }
    const response = await models.userModel.update(req.params.id,req.body)
    if (response instanceof Error){
        res.status(500).json({ errors: response })
        return
    }
    console.log("User Atualizado")
    res.status(200).json(response)

}