import { Knex } from "knex";

export const seed = async (knex: Knex) => {
  // Deletes ALL existing entries
  console.log(await knex('category').select('*'))
  await knex('category').insert('Artigo de Opiniao')
 /*  await knex('category').insert([
    {category_name: 'Artigo de Opinião'},
    {category_name: 'Curiosidade'},
    {category_name: 'Informação'},
    {category_name: 'Comedia'},
    {category_name: 'Tutorial'},
    {category_name: 'Analise Critica'},
  ]); */
};
