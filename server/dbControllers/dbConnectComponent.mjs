import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
    host: process.env.HOST,
    port: 5432,
    database: 'carrentdb',
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASS,
  });
