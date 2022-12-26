import { accessToken, refreshToken } from "./functions/jwtTokens.mjs";
import getUser from "./functions/getUser.mjs";
import bcrypt from "bcrypt";
import updaterSql from "./functions/updateSql.mjs";
import { pool } from "../dbConnectComponent.mjs";

export default async function loginUser(req, res) {
  try {
    const { userEmail, userPass } = req.body;
    if (!userEmail || !userPass) {
      return res
        .status(400)
        .json({ message: `Email and password are required!` });
    }
    const user = await getUser({ userEmail: userEmail });
    if (!user) return res.sendStatus(401);

    const validPassword = await bcrypt.compare(userPass, user.userpassword);
    if (!validPassword) {
      return res.status(400).json({ message: `Wrong password!` });
    }
    const actoken = accessToken(user.username, user.authority);
    const reftoken = refreshToken(user.username, user.authority);
    // Add refreshToken in DB
    const str = updaterSql(['useremail', 'refreshtoken'], [ userEmail, reftoken]);
    await pool.query(str);

    res.cookie("jwt", reftoken, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ actoken });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: `Login error` });
  }
}
