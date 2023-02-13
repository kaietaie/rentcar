import { pool } from "../dbConnectComponent.mjs";
import checkDataDB from "../dbOrdersControllers/functions/checkDataDB.mjs";
import updaterSql from "../functions/updateSql.mjs";
import { verifyAuthority } from "../middleware/verifyAuthority.js";
import { authorityList } from "../config/authorityList.js";
import checkIdentity from "../functions/checkIdentity.mjs";

export default async function updateUser(req, res) {
  if ( typeof req.body.user_id !== "number" )  return res.status(400).json({ Error: "User ID must be a number" })
  const { user_id } = req.body;
  const realUser = await checkDataDB(user_id, "users");
  if (!realUser)
    return res
      .status(404)
      .json({ Error: `Can't find user with id = ${user_id}` });
      if (verifyAuthority(req, authorityList.Admin) || (await checkIdentity(req))) {    
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  if (req.body.enabled && typeof (req.body.enabled) !== "boolean") {
    return res.status(400).json("Type of Enabled should be Boolean");
  }
    const updateUser = await pool.query(updaterSql(keys, values, "users"));
    if (updateUser.command === "UPDATE") res.json("User was updated");
} else {
  return res.status(403).json({ Error: "Forbidden" });
}
}
