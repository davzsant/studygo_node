import knex from "knex";

import { development } from "./enviroment";



export const Knex = knex(development)