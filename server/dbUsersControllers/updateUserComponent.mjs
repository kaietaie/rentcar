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
import bcrypt from "bcrypt";

export default async function updateUser(req, res) {
  const { user_id, user_name, user_surname, user_pass, user_email, phone } =
    req.body;
  delete req.body.user_id;
  delete req.body.user_name;
  delete req.body.user_surname;
  delete req.body.user_pass;
  delete req.body.user_email;
  delete req.body.phone;
  if (Object.keys(req.body).length !== 0)
    return res
      .status(500)
      .json({
        Error:
          "Some extra fields are excessive or check correct spelling of the fields",
      });

  if (typeof user_id !== "number")
    return res.status(400).json({ Error: "User ID must be a number" });
  const realUser = await checkDataDB(user_id, "users");
  if (!realUser)
    return res
      .status(404)
      .json({ Error: `Can't find user with id = ${user_id}` });
      
  const user = realUser[1].rows[0];
  let name, surname, pass, email, tel;
  user_name ? name = user_name : name = user.user_name;
  user_surname ? surname = user_surname : surname = user.user_surname;
  user_pass ? pass = user_pass : pass = user.user_password;
  user_email ? email = user_email : email = user.user_email;
  phone ? tel = phone : tel = user.phone;

      
  if (verifyAuthority(req, authorityList.Admin) || (await checkIdentity(req))) {
    // const keys = Object.keys(req.body);
    // const values = Object.values(req.body);
    console.log({surname})
    if (
      (user_name &&
      !nameValidation(user_name)) ||
      (user_surname &&
      !nameValidation(user_surname))
    ) {
      return res.status(400).json({ Error: "Name or surname is failed" });
    }
    if (user_email && !emailValidation(user_email)) {
      return res.status(400).json({ Error: "Email is failed" });
    }
    if (user_pass && !passwordValidation(user_pass)) {
      return res.status(400).json({
        Error: `Password should contain at least one numeric digit, one uppercase and one lowercase letter`,
      });
    }
    if (phone && !phoneValidation(phone)) {
      return res
        .status(400)
        .json({ Error: "Tel number must be in format +XXX XXXXXXXXX" });
    }
    if (user_pass && !passwordValidation(user_pass)) {
      return res.status(400).json({
        Error: `Password should contain at least one numeric digit, one uppercase and one lowercase letter`,
      });
    }
    const hashPass = await bcrypt.hash(pass, 5);
    const keys = ["user_name", "user_surname", "user_password", "user_email", "phone"];
    const values = [name, surname, hashPass, email, tel];
      
    const updateUser = await pool.query(updaterSql(keys, values, "users"));
    if (updateUser.command === "UPDATE") res.json("User was updated");
  } else {
    return res.status(403).json({ Error: "Forbidden" });
  }
}
