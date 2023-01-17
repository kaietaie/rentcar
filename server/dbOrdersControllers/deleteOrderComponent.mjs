import { pool } from "../dbConnectComponent.mjs";
import getOneOrder from "./getOneOrderComponent.mjs";

export default async function deleteOrder(req, res) {
  try {
    const { id_order } = req.body;
    const user = await getOneOrder({"userEmail":id_order});
    if (!user) {
      return res
        .status(400)
        .json({ message: `Cannot find order with id: ${id_order}` });
    }

    const sql = "DELETE FROM Orders WHERE id_order = $1";
    const deleteOrder = await pool.query(sql, [id_order]);
    if (deleteOrder.command === "DELETE") res.json("Order was deleted");
  } catch (error) {
    console.log(error);
    res.json({ message: "Something goes wrong!" });
  }
}
