import { pool } from "../dbConnectComponent.mjs";
import getUser from "./functions/getUser.mjs";

export default async function deleteUser(req, res) {
  try {
    const { userEmail } = req.body;
    const user = await getUser({"userEmail":userEmail});
    if (!user) {
      return res
        .status(400)
        .json({ message: `Cannot find user with email: ${userEmail}` });
    }

    const sql = "DELETE FROM Users WHERE userEmail = $1";
    const deleteUser = await pool.query(sql, [userEmail]);
    res.json(deleteUser);
  } catch (error) {
    console.log(error);
    res.json({ message: "Something goes wrong!" });
  }
}
