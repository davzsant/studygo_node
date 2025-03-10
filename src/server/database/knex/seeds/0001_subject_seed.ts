import { Knex } from "knex";

export const seed = async (knex: Knex) => {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('subject').insert([
    //Idiomas
    {id: 1, subject_name: 'Português',difficulty: 2},
    {id: 2, subject_name: 'Inglês',difficulty: 2},
    {id: 3, subject_name: 'Francês', difficulty: 2},
    {id: 4, subject_name: 'Japonês', difficulty: 3},
    {id: 5, subject_name: 'Mandarim', difficulty: 4},
    {id: 6, subject_name: 'Italiano', difficulty: 2},
    {id: 7, subject_name: 'Russo', difficulty: 4},
    {id: 8, subject_name: 'Espanhol', difficulty: 2},
    {id: 9, subject_name: 'Alemão', difficulty: 3},
    {id: 10, subject_name: 'Coreano', difficulty: 3},
    {id: 11, subject_name: 'Arabe', difficulty: 2},
    {id: 12, subject_name: 'Swahili', difficulty: 4},
    {id: 13, subject_name: 'Ioruba', difficulty: 3},
    //Materias Escolares
    {id: 14, subject_name: 'Geografia', difficulty: 2},
    {id: 15, subject_name: 'História', difficulty: 2},
    {id: 16, subject_name: 'Filosofia', difficulty: 2},
    {id: 17, subject_name: 'Sociologia', difficulty: 2},
    {id: 18, subject_name: 'Matematica', difficulty: 2},
    {id: 19, subject_name: 'Física', difficulty: 3},
    {id: 20, subject_name: 'Química', difficulty: 3},
    {id: 21, subject_name: 'Biologia', difficulty: 2},
    {id: 22, subject_name: 'Literatura', difficulty: 2},
    {id: 23, subject_name: 'Artes', difficulty: 4},
    {id: 24, subject_name: 'Programação', difficulty: 3},
    {id: 25, subject_name: 'Robotica', difficulty: 3},
    {id: 26, subject_name: 'Educação Físcia', difficulty: 1},
    {id: 27, subject_name: 'Emprendendorismo', difficulty: 1},
    //Materias Complementares
    {id: 28, subject_name: 'Economia', difficulty: 3},
    {id: 29, subject_name: 'Direito', difficulty: 3},
    {id: 30, subject_name: 'Design', difficulty: 4},
    {id: 31, subject_name: 'Marketing', difficulty: 2},
    {id: 32, subject_name: 'Musíca', difficulty: 2},
    {id: 33, subject_name: 'Teatro', difficulty: 2},
    {id: 34, subject_name: 'Dança', difficulty: 2},
    {id: 35, subject_name: 'Cinema e Audiovisual', difficulty: 2},
    {id: 36, subject_name: 'Artes Visuais', difficulty: 2},
    {id: 37, subject_name: 'Fotografia', difficulty: 2},
    {id: 38, subject_name: 'Psicologia', difficulty: 3},
    {id: 39, subject_name: 'Oratória E Comunicação', difficulty: 3},
    {id: 40, subject_name: 'Artes Marciais', difficulty: 3},
    {id: 41, subject_name: 'Yoga e Meditação', difficulty: 3},
    {id: 42, subject_name: 'Esportes', difficulty: 3},
    {id: 43, subject_name: 'Academia', difficulty: 3},
    {id: 44, subject_name: 'Corrida', difficulty: 3},
    {id: 45, subject_name: 'Inteligencia Artifical', difficulty: 3},
    {id: 46, subject_name: 'Blockchain e Criptomoedas', difficulty: 3},
    {id: 47, subject_name: 'BigData e Analise de Dados', difficulty: 3},
    {id: 48, subject_name: 'Cibersegurança', difficulty: 3},
    {id: 49, subject_name: 'Desenvolvimento de Jogos', difficulty: 3},
    {id: 50, subject_name: 'Administração', difficulty: 3},
    {id: 51, subject_name: 'Direito', difficulty: 3},
    {id: 52, subject_name: 'Cultura', difficulty: 3},
    {id: 53, subject_name: 'Mitologia', difficulty: 3},
    {id: 54, subject_name: 'Religião', difficulty: 3},
    {id: 55, subject_name: 'Nutrição', difficulty: 3},
    {id: 56, subject_name: 'Moda', difficulty: 3},
    {id: 57, subject_name: 'Midias Sociais', difficulty: 3},
    {id: 58, subject_name: 'Culinaria', difficulty: 3},
    {id: 59, subject_name: 'Logistica', difficulty: 3},
    {id: 60, subject_name: 'Compras', difficulty: 3},
    {id: 61, subject_name: 'Financeiro', difficulty: 3},
    {id: 62, subject_name: 'RH', difficulty: 3},
    {id: 63, subject_name: 'Departamento Pessoal', difficulty: 3},
    {id: 64, subject_name: 'Contabilidade', difficulty: 3},
    {id: 65, subject_name: 'Gestão e Liderença', difficulty: 3},
    {id: 66, subject_name: 'Operacional', difficulty: 3},
    {id: 67, subject_name: 'Diretoria', difficulty: 3},
    {id: 68, subject_name: 'Agronomia', difficulty: 3},
    {id: 69, subject_name: 'Pecuaria', difficulty: 3},
    {id: 70, subject_name: 'Astronomia', difficulty: 3},
    {id: 71, subject_name: 'Astrologia', difficulty: 3},
    

  ]);
};
