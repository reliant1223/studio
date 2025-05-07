import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const dbUser = process.env.DB_USER || 'postgres';
const dbPassword = process.env.DB_PASSWORD || 'postgres';
const dbHost = process.env.DB_HOST || 'localhost';
const dbPort = parseInt(process.env.DB_PORT || '5432', 10);
const dbDatabase = process.env.DB_DATABASE || 'postgres';

const pool = new Pool({
  user: dbUser,
  password: dbPassword,
  host: dbHost,
  port: dbPort,
  database: dbDatabase,
});

export default pool;