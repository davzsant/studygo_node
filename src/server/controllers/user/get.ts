import { Response,Request } from "express"
import models from "../../database/knex/models"

type getUserParam = {
    id?: number
}

export const get = async(req: Request<getUserParam>,res:Response) =>{
    if(!req.params.id){
        res.status(400).json({ errors: { id: {_errors: ['ID is required']} } })
        return
    }
    const user = await models.userModel.get(req.params.id)
    if (user instanceof Error){
        res.status(500).json({ errors: user })
        return
    }
    console.log("Um user Buscado")
    res.status(200).json(user)
}

