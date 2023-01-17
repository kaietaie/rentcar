import { pool } from "../dbConnectComponent.mjs";
//function takes object with key and value for searching in DB tables with column 'key' and value 'value'
export default async function getAllUser(req, res) {
  const sql = `SELECT * FROM Users;`;
  const answer = await pool.query(sql);
  res.json(answer.rows) ;
}
