import {Pool} from "pg";
import 'dotenv/config'
const DATABASE_PORT : number = Number(process.env.DATABASE_PORT) || 5432
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD


const pool = new Pool({ 
  user: process.env.DATABASE_USER,
  password: DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: DATABASE_PORT, // default Postgres port
  database: process.env.DATABASE_NAME
});

export const db = {
  query: (text :any , params? : any) => pool.query(text, params)
};
