import { Pool } from "pg";

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'zaza',
    database: 'Store',
    port: 5432

})