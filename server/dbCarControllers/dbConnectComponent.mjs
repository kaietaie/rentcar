import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'carrentdb',
    user: 'kaieta',
    password: 'kaieta',
  });

