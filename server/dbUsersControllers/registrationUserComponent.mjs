import { pool } from "../dbConnectComponent.mjs";
import bcrypt from "bcrypt";
import getUser from "./functions/getUser.mjs";
import { validationResult } from "express-validator";
import emailValidation from "../functions/validation/emailValidation.mjs";
import passwordValidation from "../functions/validation/passwordValidation.mjs";
import phoneValidation from "../functions/validation/phoneValidation.mjs";
import nameValidation from "../functions/validation/nameValidation.mjs";

export default async function registrationUser(req, res) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ message: "Error in registration process", errors });
    }
    const { user_name, user_surname, user_email, phone, user_pass, authority } =
      req.body;
    if (req.body.user_name && !nameValidation(req.body.user_name)) {
      return res.status(400).json({ Error: "Name is failed" });
    }

    if (req.body.user_surname && !nameValidation(req.body.user_surname)) {
      return res.status(400).json({ Error: "Surname is failed" });
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
    const user = await getUser({ user_email: user_email });

    if (user) {
      console.log(user);
      return res.status(409).json({ message: "User already exists" });
    }

    const hashPass = await bcrypt.hash(user_pass, 5);

    await pool.query(
      `INSERT INTO Users ( user_name, user_surname, user_email, phone, user_password, authority )
      VALUES
      ($1, $2, $3, $4, $5, $6);`,
      [user_name, user_surname, user_email, phone, hashPass, authority],
      (err, result) => {
        if (err)
          return res.status(400).json({ ERROR: "Something goes wrong", err });
        res.status(201).send(`New user was added`);
      }
    );
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Registration error" });
  }
}
