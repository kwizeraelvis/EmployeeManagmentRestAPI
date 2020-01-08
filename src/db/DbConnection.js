import {Pool} from 'pg'
import 'dotenv/config';


let pool = new Pool({connectionString: process.env.DEV_DB_URL});

export {pool};