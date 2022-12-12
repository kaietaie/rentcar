import { pool } from "./dbConnectComponent.mjs";

export default async function updateCar(req, res) {
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  const sql = `UPDATE Cars SET ${keys[1]} = ${values[1]}, ${keys[2]} = ${values[2]} WHERE ${keys[0]} = ${values[0]}`;
  const updateCar = await pool.query(sql)
  res.json(updateCar);
}
