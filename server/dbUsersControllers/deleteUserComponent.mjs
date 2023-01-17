import { pool } from "../dbConnectComponent.mjs";
import getUser from "./functions/getUser.mjs";

export default async function deleteUser(req, res) {
  try {
    const { useremail } = req.body;
    const user = await getUser({"useremail":useremail});
    if (!user) {
      return res
        .status(400)
        .json({ message: `Cannot find user with email: ${useremail}` });
    }

    const sql = "DELETE FROM Users WHERE useremail = $1";
    const deleteUser = await pool.query(sql, [useremail]);
    if (deleteUser.command === "DELETE") res.json("User was deleted");
  } catch (error) {
    console.log(error);
    res.json({ message: "Something goes wrong!" });
  }
}
