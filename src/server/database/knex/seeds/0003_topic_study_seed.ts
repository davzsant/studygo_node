import { Knex } from "knex";

export const seed = async (knex: Knex) => {
  // Deletes ALL existing entries
  await knex('topic').del()
  await knex('topic').insert([
    //Geografia
    {id: 39, topic_name: 'Geografia Fisica',subject_id: 14,topic_difficulty: 2,topic_order: 1},
    {id: 40, topic_name: 'Geografia Humano',subject_id: 14,topic_difficulty: 2,topic_order: 2},
    {id: 41, topic_name: 'Geografia Brasileira',subject_id: 14,topic_difficulty: 2,topic_order: 3},
    {id: 42, topic_name: 'Cartografia',subject_id: 14,topic_difficulty: 2,topic_order: 4},
    {id: 43, topic_name: 'Climatologia',subject_id: 14,topic_difficulty: 2,topic_order: 5},
    //Historia
    {id: 44, topic_name: 'Historia Antiga',subject_id: 15,topic_difficulty: 2,topic_order: 1},
    {id: 45, topic_name: 'Idade Media ',subject_id: 15,topic_difficulty: 2,topic_order: 2},
    {id: 46, topic_name: 'Idade Moderna',subject_id: 15,topic_difficulty: 2,topic_order: 3},
    {id: 47, topic_name: 'Idade Contemporanea',subject_id: 15,topic_difficulty: 2,topic_order: 4},
    {id: 48, topic_name: 'Historia do Brasil',subject_id: 15,topic_difficulty: 2,topic_order: 5},
    //Filosofia
    {id: 49, topic_name: 'Introducao',subject_id: 16,topic_difficulty: 2,topic_order: 1},
    {id: 50, topic_name: 'Filosofia Antiga ',subject_id: 16,topic_difficulty: 2,topic_order: 2},
    {id: 51, topic_name: 'Filosofia Medieval',subject_id: 16,topic_difficulty: 2,topic_order: 3},
    {id: 52, topic_name: 'Filosofia Moderna',subject_id: 16,topic_difficulty: 2,topic_order: 4},
    {id: 53, topic_name: 'Filosofia Comtemporanea',subject_id: 16,topic_difficulty: 2,topic_order: 5},
    {id: 54, topic_name: 'Filosofia Brasileira',subject_id: 16,topic_difficulty: 2,topic_order: 6},
    //Sociologia
    {id: 55, topic_name: 'Introducao',subject_id: 17,topic_difficulty: 2,topic_order: 1},
    {id: 56, topic_name: 'Cultura e Sociedade ',subject_id: 17,topic_difficulty: 2,topic_order: 2},
    {id: 57, topic_name: 'Estratificação e Desigualdade Social',subject_id: 17,topic_difficulty: 2,topic_order: 3},
    {id: 58, topic_name: 'Movimentos Sociais',subject_id: 17,topic_difficulty: 2,topic_order: 4},
    {id: 59, topic_name: 'Trabalho e Economia',subject_id: 17,topic_difficulty: 2,topic_order: 5},
    {id: 60, topic_name: 'Política e Estado',subject_id: 17,topic_difficulty: 2,topic_order: 6},
    {id: 61, topic_name: 'Globalização e Sociedade Contemporânea',subject_id: 17,topic_difficulty: 2,topic_order: 7},
    //Matematica
    {id: 62, topic_name: 'Aritmetrica',subject_id: 18,topic_difficulty: 2,topic_order: 1},
    {id: 63, topic_name: 'Algebra',subject_id: 18,topic_difficulty: 2,topic_order: 2},
    {id: 64, topic_name: 'Geometria',subject_id: 18,topic_difficulty: 2,topic_order: 3},
    {id: 65, topic_name: 'Trigonometria',subject_id: 18,topic_difficulty: 3,topic_order: 4},
    {id: 66, topic_name: 'Estatística e Probabilidade',subject_id: 18,topic_difficulty: 2,topic_order: 5},
    {id: 67, topic_name: 'Cálculo',subject_id: 18,topic_difficulty: 2,topic_order: 6},
    {id: 68, topic_name: 'Matematica Financeira',subject_id: 18,topic_difficulty: 2,topic_order: 7},
    //Fisica
    {id: 69, topic_name: 'Cinematica',subject_id: 19,topic_difficulty: 2,topic_order: 1},
    {id: 70, topic_name: 'Dinamica',subject_id: 19,topic_difficulty: 2,topic_order: 2},
    {id: 71, topic_name: 'Trabalho, Energia e Potencia',subject_id: 19,topic_difficulty: 2,topic_order: 3},
    {id: 72, topic_name: 'Eletricidade e Magnetismo',subject_id: 19,topic_difficulty: 2,topic_order: 4},
    {id: 73, topic_name: 'Termodinamica',subject_id: 19,topic_difficulty: 2,topic_order: 5},
    {id: 74, topic_name: 'Óptica',subject_id: 19,topic_difficulty: 2,topic_order: 6},
    {id: 75, topic_name: 'Física Moderna',subject_id: 19,topic_difficulty: 2,topic_order: 7},
    //Quimica
    {id: 76, topic_name: 'Estrutura Atomica',subject_id: 20,topic_difficulty: 2,topic_order: 1},
    {id: 77, topic_name: 'Ligações Químicas',subject_id: 20,topic_difficulty: 2,topic_order: 2},
    {id: 78, topic_name: 'Reações Químicas',subject_id: 20,topic_difficulty: 2,topic_order: 3},
    {id: 79, topic_name: 'Termoquímica',subject_id: 20,topic_difficulty: 2,topic_order: 4},
    {id: 80, topic_name: 'Química Organica',subject_id: 20,topic_difficulty: 2,topic_order: 5},
    {id: 81, topic_name: 'Eletroquímica',subject_id: 20,topic_difficulty: 2,topic_order: 6},
    {id: 82, topic_name: 'Química Ambiental',subject_id: 20,topic_difficulty: 2,topic_order: 7},
    //Biologia
    {id: 83, topic_name: 'Citologia',subject_id: 21,topic_difficulty: 2,topic_order: 1},
    {id: 84, topic_name: 'Genética e Evolução',subject_id: 21,topic_difficulty: 2,topic_order: 2},
    {id: 85, topic_name: 'Fisiologia Humana',subject_id: 21,topic_difficulty: 2,topic_order: 3},
    {id: 86, topic_name: 'Ecologia',subject_id: 21,topic_difficulty: 2,topic_order: 4},
    {id: 87, topic_name: 'Botânica',subject_id: 21,topic_difficulty: 2,topic_order: 5},
    {id: 88, topic_name: 'Microbiologia e Imunologia',subject_id: 21,topic_difficulty: 2,topic_order: 6},
    {id: 89, topic_name: 'Biotecnologia',subject_id: 21,topic_difficulty: 2,topic_order: 7},
    
  ]);
};
