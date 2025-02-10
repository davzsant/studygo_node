import { Response,Request } from "express"
import models from "../../database/knex/models"

type getUserParam = {
    id?: number
}

export const get = async(req: Request<getUserParam>,res:Response) =>{
    if(!req.params.id)
    {
        res.json({
            erro: "É necesario informar o id"
        })
        return
    }
    res.json(await models.userModel.get(req.params.id))
}

