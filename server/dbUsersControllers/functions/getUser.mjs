import { pool } from "../../dbConnectComponent.mjs";
//function takes object with key and value for searching in DB tables with column 'key' and value 'value'
export default async function getUser(user) {
  const key = Object.keys(user);
  const value = Object.values(user);
  const sql = `SELECT * FROM Users WHERE Users.${key}='${value}';`;
  const answer = await pool.query(sql);
  return answer.rows[0];
}
// export default async function getUser(userEmail) {
//   const sql = `SELECT * FROM Users WHERE Users.userEmail=$1;`;
//   const user = await pool.query(sql, [userEmail]);
//   return user.rows[0];
