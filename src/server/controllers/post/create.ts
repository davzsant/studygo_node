/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Response,Request } from "express"
import models from "../../database/knex/models"
import { PostType } from "../../database/knex/models/post"



export const create = async(req:Request<{},{},Omit<PostType,'id'>>,res: Response) => {
    const post_id = await models.postModel.create(req.body)
    if (post_id instanceof Error){
        res.json({
            erro: "Erro na insercao"
        })
        return
    }
    console.log("O ID DO POST È:",post_id)
    res.json(post_id)

}