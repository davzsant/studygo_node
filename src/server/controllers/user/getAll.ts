import { Response,Request } from "express"
import models from "../../database/knex/models"

export const getAll = async(req: Request,res:Response) =>{
    res.json(await models.userModel.getAll())
}