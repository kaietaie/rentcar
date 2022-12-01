import { pool } from "../dbCarControllers/dbConnectComponent.mjs";
import updaterSql from "../dbCarControllers/functions/updateSql.mjs"

export default async function updateCar(req, res) {
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  const updateCar = await pool.query(updaterSql(keys, values))
  res.json(updateCar);
}
