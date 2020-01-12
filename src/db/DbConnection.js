import {Pool} from 'pg'
import 'dotenv/config';

const isProduction = process.env.NODE_ENV === 'production'
const connectionString = process.env.DEV_DATABASE_URL

const pool = new Pool({connectionString: isProduction ? process.env.DATABASE_URl: connectionString})

export {pool};