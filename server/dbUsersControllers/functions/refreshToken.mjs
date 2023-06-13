import jwt from "jsonwebtoken";
import "dotenv/config";
import getUser from "./getUser.mjs";

export default async function handleRefreshToken(req, res) {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;

  const user = await getUser({ refreshToken: refreshToken });
  if (!user) return res.sendStatus(403);

  const authority = [user.authority];
  jwt.verify(refreshToken, process.env.REFRESHKEY, (error, decoded) => {
    if (error || user.user_name !== decoded.name) {
      return res.sendStatus(403);
    }

    const accessToken = jwt.sign(
      { username: decoded.name, authority: decoded.authority },
      process.env.ACCESSKEY,
      { expiresIn: "30m" }
    );

    res.json({ accessToken, authority });
  });
}
