import { UserType } from ".";
import { Knex } from "../..";




const create = async(data:Omit<UserType,'id'>) => {
    console.log("Criando user")
    try{
        const [result] = await Knex.from('user').insert(data)
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