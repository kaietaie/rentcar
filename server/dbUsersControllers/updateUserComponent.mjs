import { pool } from "../dbConnectComponent.mjs";
import updaterSql from "./functions/updateSql.mjs";

export default async function updateUser(req, res) {
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  console.log(req.body.enabled);
  if (req.body.enabled && typeof enabled === "boolean") {
    const updateUser = await pool.query(updaterSql(keys, values));
    if (updateUser.command === "UPDATE") res.json("User was updated");
  } else {
    return res.status(400).json("Type of Enabled should be Boolean");
  }
}
