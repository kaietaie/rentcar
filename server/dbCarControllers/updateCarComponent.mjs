import { pool } from "../dbConnectComponent.mjs";
import updaterSql from "./functions/updateSql.mjs"

export default async function updateCar(req, res) {
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  const str = updaterSql(keys, values);
  const updateCar = await pool.query(str)
  res.json(updateCar);
}
