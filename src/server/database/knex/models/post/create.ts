import { PostType } from ".";
import { Knex } from "../..";




const create = async(data:Omit<PostType,'id'>) => {
    console.log("Criando post")
    try{
        const [result] = await Knex.from('post').insert(data)
        console.log("RESULTADO:",result)
        return result
    }
    catch(error)
    {
        console.error("ERRO",error)
        return {teste:"Teste"}
    }

}

export default create