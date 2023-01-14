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
    const { userName, userEmail, userPass, authority } = req.body;
    const user = await getUser({"userEmail":userEmail} );

      if(user) {
      console.log(user);
      return res.status(409).json({ message: "User already exists" });
    }

    const hashPass = await bcrypt.hash(userPass, 5);
    
    await pool.query(
      `INSERT INTO Users ( UserName, useremail, userpassword, authority )
      VALUES
      ($1, $2, $3, $4);`,
      [userName, userEmail, hashPass, authority],
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
