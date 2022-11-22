import { pool } from "./dbConnectComponent.mjs";

export default async function updateCar(req, res) {
  // $1 = column`s name, $2 = new value, $3 = updated obj, $4 = id value
  const sql = "UPDATE Cars SET $1 = $2 WHERE $3 = $4";
  const updateCar = await pool.query(sql, []);
  res.json(updateCar);
}
