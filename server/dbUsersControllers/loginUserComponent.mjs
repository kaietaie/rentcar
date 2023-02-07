import { accessToken, refreshToken } from "./functions/jwtTokens.mjs";
import getUser from "./functions/getUser.mjs";
import bcrypt from "bcrypt";
import updaterSql from "./functions/updateSql.mjs";
import { pool } from "../dbConnectComponent.mjs";

export default async function loginUser(req, res) {
  try {
    const { user_email, user_pass } = req.body;
    if (!user_email || !user_pass) {
      return res
        .status(400)
        .json({ message: `Email and password are required!` });
    }
    const user = await getUser({ user_email: user_email });
    if (!user) return res.sendStatus(401);
    if (user?.enabled === false) return res.status(401).json({ Error: 'This user is blocked'})
    const validPassword = await bcrypt.compare(user_pass, user.user_password);
    if (!validPassword) {
      return res.status(400).json({ message: `Wrong password!` });
    }
    const accesstoken = accessToken(user.user_name, user.user_id, user.authority);
    const reftoken = refreshToken(user.user_name, user.user_id, user.authority);
    const authority = [user.authority];
    // Add refreshToken to DB
    const str = updaterSql(['user_email', 'refreshtoken'], [ user_email, reftoken]);
    await pool.query(str);

    res.cookie("jwt", reftoken, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ accesstoken, authority  });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: `Login error` });
  }
}
