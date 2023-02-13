import { pool } from "../dbConnectComponent.mjs";
import checkDataDB from "../dbOrdersControllers/functions/checkDataDB.mjs";
import updaterSql from "../functions/updateSql.mjs";
import { verifyAuthority } from "../middleware/verifyAuthority.js";
import { authorityList } from "../config/authorityList.js";
import checkIdentity from "../functions/checkIdentity.mjs";
import emailValidation from "../functions/validation/emailValidation.mjs";
import phoneValidation from "../functions/validation/phoneValidation.mjs";
import passwordValidation from "../functions/validation/passwordValidation.mjs";
import nameValidation from "../functions/validation/nameValidation.mjs";

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
  if (
    req.body.user_name &&
    !nameValidation(req.body.user_name) &&
    req.body.user_surname &&
    !nameValidation(req.body.user_surname)
  ) {
    return res.status(400).json({ Error: "Name or surname is failed" });
  }
  if (req.body.user_email && !emailValidation(req.body.user_email)) {
    return res.status(400).json({ Error: "Email is failed" });
  }
  if (req.body.user_pass && !passwordValidation(req.body.user_pass)) {
    return res.status(400).json({
      Error: `Password should contain at least one numeric digit, one uppercase and one lowercase letter`,
    });
  }
  if (req.body.phone && !phoneValidation(req.body.phone)) {
    return res
      .status(400)
      .json({ Error: "Tel number must be in format +XXX XXXXXXXXX" });
  }
    const updateUser = await pool.query(updaterSql(keys, values, "users"));
    if (updateUser.command === "UPDATE") res.json("User was updated");
} else {
  return res.status(403).json({ Error: "Forbidden" });
}
}
