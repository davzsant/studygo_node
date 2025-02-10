import { Response,Request } from "express"
import models from "../../database/knex/models"

type getPostParam = {
    id?: number
}

export const get = async(req: Request<getPostParam>,res:Response) =>{
    if(!req.params.id)
    {
        res.json({
            erro: "É necesario informar o id"
        })
        return
    }
    res.json(await models.postModel.get(req.params.id))
}

