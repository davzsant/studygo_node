import knex from "knex";

import { development } from "./Enviroment";



export const Knex = knex(development)