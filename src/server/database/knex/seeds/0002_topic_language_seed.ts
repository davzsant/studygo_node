import { Knex } from "knex";

export const seed = async (knex: Knex) => {
  // Deletes ALL existing entries
  await knex('topic').del()
  await knex('topic').insert([
    //Portugues
    {id: 1, topic_name: 'Gramatica',subject_id: 1,topic_difficulty: 2,topic_order: 1},
    {id: 2, topic_name: 'Pronuncia e Fonetica',subject_id: 1,topic_difficulty: 2,topic_order: 2},
    {id: 3, topic_name: 'Comunicação Oral e Escrita',subject_id: 1,topic_difficulty: 2,topic_order: 3},
    {id: 4, topic_name: 'Vocabulario',subject_id: 1,topic_difficulty: 2,topic_order: 4},
    {id: 5, topic_name: 'Conversação e Escrita',subject_id: 1,topic_difficulty: 2,topic_order: 5},
    {id: 6, topic_name: 'Cultura e Costumes',subject_id: 1,topic_difficulty: 2,topic_order: 6},
    //Ingles
    {id: 7, topic_name: 'Gramatica',subject_id: 2,topic_difficulty: 2,topic_order: 1},
    {id: 8, topic_name: 'Pronuncia e Fonetica',subject_id: 2,topic_difficulty: 2,topic_order: 2},
    {id: 9, topic_name: 'Comunicação Oral e Escrita',subject_id: 2,topic_difficulty: 2,topic_order: 3},
    {id: 10, topic_name: 'Vocabulario',subject_id: 2,topic_difficulty: 2,topic_order: 4},
    {id: 11, topic_name: 'Conversação e Escrita',subject_id: 2,topic_difficulty: 2,topic_order: 5},
    {id: 12, topic_name: 'Cultura e Costumes',subject_id: 2,topic_difficulty: 2,topic_order: 6},
    //Frances
    {id: 13, topic_name: 'Gramatica',subject_id: 3,topic_difficulty: 2,topic_order: 1},
    {id: 14, topic_name: 'Pronuncia e Fonetica',subject_id: 3,topic_difficulty: 2,topic_order: 2},
    {id: 15, topic_name: 'Comunicação Oral e Escrita',subject_id: 3,topic_difficulty: 2,topic_order: 3},
    {id: 16, topic_name: 'Vocabulario',subject_id: 2,topic_difficulty: 3,topic_order: 4},
    {id: 17, topic_name: 'Conversação e Escrita',subject_id: 3,topic_difficulty: 2,topic_order: 5},
    {id: 18, topic_name: 'Cultura e Costumes',subject_id: 3,topic_difficulty: 2,topic_order: 6},
    //Espanhol
    {id: 19, topic_name: 'Gramatica',subject_id: 8,topic_difficulty: 2,topic_order: 1},
    {id: 20, topic_name: 'Pronuncia e Fonetica',subject_id: 8,topic_difficulty: 2,topic_order: 2},
    {id: 21, topic_name: 'Comunicação Oral e Escrita',subject_id: 8,topic_difficulty: 2,topic_order: 3},
    {id: 22, topic_name: 'Vocabulario',subject_id: 8,topic_difficulty: 3,topic_order: 4},
    {id: 23, topic_name: 'Conversação e Escrita',subject_id: 8,topic_difficulty: 2,topic_order: 5},
    {id: 24, topic_name: 'Cultura e Costumes',subject_id: 8,topic_difficulty: 2,topic_order: 6},
    //Japones
    {id: 25, topic_name: 'Gramatica',subject_id: 4,topic_difficulty: 2,topic_order: 1},
    {id: 26, topic_name: 'Escrita',subject_id: 4,topic_difficulty: 2,topic_order: 2},
    {id: 27, topic_name: 'Pronuncia e Fonetica',subject_id: 4,topic_difficulty: 2,topic_order: 3},
    {id: 28, topic_name: 'Comunicação Oral e Escrita',subject_id: 4,topic_difficulty: 2,topic_order: 4},
    {id: 29, topic_name: 'Vocabulario',subject_id: 4,topic_difficulty: 3,topic_order: 5},
    {id: 30, topic_name: 'Conversação e Escrita',subject_id: 4,topic_difficulty: 2,topic_order: 6},
    {id: 31, topic_name: 'Cultura e Costumes',subject_id: 4,topic_difficulty: 2,topic_order: 7},
    //Mandarim
    {id: 32, topic_name: 'Gramatica',subject_id: 5,topic_difficulty: 2,topic_order: 1},
    {id: 33, topic_name: 'Escrita',subject_id: 5,topic_difficulty: 2,topic_order: 2},
    {id: 34, topic_name: 'Pronuncia e Fonetica',subject_id: 5,topic_difficulty: 2,topic_order: 3},
    {id: 35, topic_name: 'Comunicação Oral e Escrita',subject_id: 5,topic_difficulty: 2,topic_order: 4},
    {id: 36, topic_name: 'Vocabulario',subject_id: 5,topic_difficulty: 3,topic_order: 5},
    {id: 37, topic_name: 'Conversação e Escrita',subject_id: 5,topic_difficulty: 2,topic_order: 6},
    {id: 38, topic_name: 'Cultura e Costumes',subject_id: 5,topic_difficulty: 2,topic_order: 7},

  ]);
};
