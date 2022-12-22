import generateAccessToken from "./functions/generateAccessToken.mjs";
import getUser from "./functions/getUser.mjs";
import bcrypt from "bcrypt";

export default async function loginUser(req, res) {
  try {
    const { userEmail, userPass } = req.body;
    const user = await getUser({"userEmail":userEmail});
    if (!user) {
      return res
        .status(400)
        .json({ message: `Cannot find user with email: ${userEmail}` });
    }
    const validPassword = await bcrypt.compare(userPass, user.userpassword);
    if (!validPassword) {
      return res.status(400).json({ message: `Wrong password!` });
    }
    const token = generateAccessToken(user.userEmail, user.authority);
    res.json({ token });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: `Login error` });
  }
}
