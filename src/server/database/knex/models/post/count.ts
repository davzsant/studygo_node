import { Knex } from "../.."

type QueryParams = {
    user_name?: string,
    search?: string,
    topic?: string,
}
/**Get the count of registers */
const count = async (queryParams?: Partial<QueryParams>):Promise<Error|number> => {
    try{
        const queryCount = Knex.from('post')

        //The Filter
        if(queryParams){
            if(queryParams.user_name){
                queryCount.where('user.username','like',`%${queryParams.user_name}%`)
            }
            if(queryParams.search){
                queryCount.where('post.title','like',`%${queryParams.search}%`)
                    .orWhere('post.body','like',`%${queryParams.search}%`)
            }
        }
        const countAll = await queryCount.count<{ total: number }[]>('* as total').first()
        if (!countAll) throw new Error("Erro a fazer a contagem")
        return await countAll.total
    }catch(error)
    {
        return error as Error
    }
}

export default count