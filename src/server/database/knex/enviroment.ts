import { Knex } from "knex";
import { config } from "dotenv";

config()


export const development:Knex.Config = {
    client: 'mysql2',
    connection: {
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: Number(process.env.DB_PORT || 3306),
        user: process.env.DB_USER
    },
    seeds: {
        directory: './seeds'
    }
}

export const production: Knex.Config = {
    client: 'mysql'
}