import { pool } from "../dbConnectComponent.mjs";
import getUser from "./functions/getUser.mjs";

export default async function deleteUser(req, res) {
  try {
    const { user_email } = req.body;
    const user = await getUser({"user_email":user_email});
    if (!user) {
      return res
        .status(400)
        .json({ message: `Cannot find user with email: ${user_email}` });
    }

    const sql = "UPDATE Users SET enabled=false WHERE user_email= $1;";
    const deleteUser = await pool.query(sql, [user_email]);
    if (deleteUser.command === "DELETE") res.json("User was deleted");
  } catch (error) {
    console.log(error);
    res.json({ message: "Something goes wrong!" });
  }
}
