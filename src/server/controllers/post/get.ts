import { Response,Request } from "express"
import models from "../../database/knex/models"

type getPostParam = {
    id?: number
}

export const get = async(req: Request<getPostParam>,res:Response) =>{
    if(!req.params.id){
        res.status(400).json({ errors: { id: {_errors: ['ID is required']} } })
        return
    }
    const post = await models.postModel.get(req.params.id)
    if (post instanceof Error){
        res.status(500).json({ errors: post })
        return
    }
    console.log("Um post Buscado")
    res.status(201).json(post)
}

