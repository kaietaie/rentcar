import { pool } from "../dbConnectComponent.mjs";
import checkDataDB from "../dbOrdersControllers/functions/checkDataDB.mjs";
import updaterSql from "../functions/updateSql.mjs";

export default async function updateUser(req, res) {
  const { user_id } = req.body;
  const realUser = await checkDataDB(user_id, "users");
  if (!realUser)
    return res
      .status(404)
      .json({ Error: `Can't find user with id = ${user_id}` });
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  console.log(req.body.enabled);
  if (req.body.enabled && typeof enabled === "boolean") {
    const updateUser = await pool.query(updaterSql(keys, values, "users"));
    if (updateUser.command === "UPDATE") res.json("User was updated");
  } else {
    return res.status(400).json("Type of Enabled should be Boolean");
  }
}
