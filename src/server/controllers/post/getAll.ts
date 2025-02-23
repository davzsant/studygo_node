import { Response,Request } from "express"
import models from "../../database/knex/models"

export const getAll = async(req: Request,res:Response) =>{
    const allPosts = await models.postModel.getAll()
    if (allPosts instanceof Error){
        res.status(500).json({ errors: allPosts })
        return
    }
    
    console.log("Todos os posts buscados")
    res.status(200).json(allPosts)
}