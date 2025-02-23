import { Response,Request } from "express"
import models from "../../database/knex/models"

type deleteUserParam = {
    id?: number
}

export const deleteUser = async(req: Request<deleteUserParam>,res:Response) =>{
    if(!req.params.id){
        res.status(400).json({ errors: { id: {_errors: ['ID is required']} } })
        return
    }
    const response = res.json(await models.userModel.deleteUser(req.params.id))
    if (response instanceof Error){
        res.status(500).json({ errors: response })
        return
    }

    console.log("User Deletado")
    res.status(200).json(response)
}
