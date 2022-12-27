import { pool } from "../dbConnectComponent.mjs";
import updaterSql from "./functions/updateSql.mjs"

export default async function updateUser(req, res) {
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  const updateUser = await pool.query(updaterSql(keys, values))
  res.json(updateUser);
}
