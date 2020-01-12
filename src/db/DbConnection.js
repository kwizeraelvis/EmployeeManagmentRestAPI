import {Pool} from 'pg'
import 'dotenv/config';

let pool;
if(process.env.NODE_ENV === 'development'){
    pool = new Pool({connectionString: process.env.DEV_DATABASE_URL})
}

if(process.env.NODE_ENV === 'production'){
    pool = new Pool({connectionString: process.env.DATABASE_URL})
}

export { pool }