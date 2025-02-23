import { Response,Request } from "express"
import models from "../../database/knex/models"

type deletePostParam = {
    id?: number
}

export const deletePost = async(req: Request<deletePostParam>,res:Response) =>{
    if(!req.params.id){
        res.status(400).json({ errors: { id: {_errors: ['ID is required']} } })
        return
    }
    const response = await models.postModel.deletePost(req.params.id)
    if (response instanceof Error){
        res.status(500).json({ errors: response })
        return
    }
    console.log("Post Deletado")
    res.status(200).json(response)
}
