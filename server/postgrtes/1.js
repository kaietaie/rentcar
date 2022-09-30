'use strict';

const { Pool } = require('pg');

const pool = new Pool({
  host: '127.0.0.1',
  port: 5432,
  database: 'carrentdb',
  user: 'kaieta',
  password: 'kaieta',
});

const fields = ['schemaname', 'tablename', 'tableowner'].join(', ');
const sql = `SELECT ${fields} FROM pg_tables WHERE tableowner = $1`;
pool.query(sql, ['kaieta'], (err, res) => {
  if (err) {
    throw err;
  }
  console.dir({ res });
  console.table(res.fields);
  console.table(res.rows);
  pool.end();
});