import { Response,Request } from "express"
import models from "../../database/knex/models"


type QueryParams = {
    user_name?: string,
    search?: string,
    topic?: string,
}

export const getAll = async(req: Request<{},{},{},Partial<QueryParams>>,res:Response) =>{
    const allPosts = await models.postModel.getAll(req.query)
    if (allPosts instanceof Error){
        res.status(500).json({ errors: allPosts })
        return
    }
    const count = await models.postModel.count(req.query)
    console.log(count)
    if(count instanceof Error){
        res.status(500).json({ errors: allPosts })
        return
    }
    
    console.log("Todos os posts buscados")
    res.status(200).json({
        allPosts,
        count
    })
}