// lib/db.ts
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DB_USER, // e.g., "postgres"
  host: process.env.DB_HOST, // e.g., "localhost"
  database: process.env.DB_NAME, // your database name
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT) || 5432,
});

export default pool;
