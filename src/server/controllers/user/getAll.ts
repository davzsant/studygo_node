import { Response,Request } from "express"
import models from "../../database/knex/models"

export const getAll = async(req: Request,res:Response) =>{
    const allUsers = await models.userModel.getAll()
    if (allUsers instanceof Error){
        res.status(500).json({ errors: allUsers })
        return
    }
    console.log("Todos os users buscados")
    res.status(200).json(allUsers)
}