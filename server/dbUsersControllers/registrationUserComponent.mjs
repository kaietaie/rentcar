import { pool } from "../dbConnectComponent.mjs";
import bcrypt from "bcrypt";
import getUser from "./functions/getUser.mjs";
import { validationResult } from "express-validator";

export default async function registrationUser(req, res) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ message: "Error in registration process", errors });
    }
    const { user_name, user_surname, user_email, phone, user_pass, authority } = req.body;
    const user = await getUser({"user_email":user_email} );

      if(user) {
      console.log(user);
      return res.status(409).json({ message: "User already exists" });
    }

    const hashPass = await bcrypt.hash(user_pass, 5);
    
    await pool.query(
      `INSERT INTO Users ( user_name, user_surname, user_email, phone, user_password, authority )
      VALUES
      ($1, $2, $3, $4, $5, $6);`,
      [user_name,user_surname, user_email, phone, hashPass, authority],
      (err, result) => {
        if (err) return res.status(400).json({ ERROR: "Something goes wrong", err });
        res.status(201).send(`New user was added`);
      }
    );
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Registration error" });
  }
}
