import getUser from "./functions/getUser.mjs";
import { pool } from "../dbConnectComponent.mjs";
import updaterSql from "./functions/updateSql.mjs";

export default async function logoutHandle(req, res) {
  // On client we should also delete accessToken
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); // No content
  const refreshToken = cookies.jwt;

  const user = await getUser({ refreshToken: refreshToken });
  if (!user) {
    res.clearCookie("jwt", {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    return res.sendStatus(204);
  }
  // Delete refreshToken in DB
  const str = updaterSql(['refreshtoken', 'refreshtoken'], [refreshToken, ""]) 
  await pool.query(str);
  res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
  res.sendStatus(204);
}
