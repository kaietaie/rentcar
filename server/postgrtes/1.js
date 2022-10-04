const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'carrentdb',
  user: 'kaieta',
  password: 'kaieta',
});

// const sql = `INSERT INTO cars VALUES (1,'Superb', 'Skoda', '2.0 TDI, 115kW', 6.2, 625, 5)`;
const sql = `SELECT * FROM Cars`
pool.query(sql, (err, res) => {
  if (err) {
    throw err;
  }
  // console.dir({ res });
  // console.table(res.fields);
  console.table(res.rows);
  pool.end();
});