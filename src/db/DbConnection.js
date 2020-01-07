import {Pool} from 'pg'
import 'dotenv/config';


export default pool = new Pool({connectionString: process.env.DEV_DB_URL});