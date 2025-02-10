/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Response,Request } from "express"
import models from "../../database/knex/models"
import { UserType } from "../../database/knex/models/user"

export const create = async(req:Request<{},{},Omit<UserType,'id'>>,res: Response) => {
    const user_id = await models.userModel.create(req.body)
    if (user_id instanceof Error){
        res.json({
            erro: "Erro na insercao"
        })
        return
    }
    console.log("O ID DO USER È:",user_id)
    res.json(user_id)

}