import { pool } from "../dbConnectComponent.mjs";
import checkDataDB from "./functions/checkDataDB.mjs";
import updateSql from "../functions/updateSql.mjs";
import { verifyAuthority } from "../middleware/verifyAuthority.js";
import { authorityList } from "../config/authorityList.js";
import checkIdentity from "../functions/checkIdentity.mjs";

export default async function updateOrder(req, res) {
  const { order_id } = req.body;
  const realOrder = await checkDataDB(order_id, "orders");
  if (!realOrder)
    return res
      .status(404)
      .json({ Error: `Can't find order with id = ${order_id}` });

  if (verifyAuthority(req, authorityList.Admin) || await checkIdentity(req)) {
    const keys = Object.keys(req.body);
    const values = Object.values(req.body);
    try {
      const updateOrder = await pool.query(updateSql(keys, values, "orders"));
      if (updateOrder.command === "UPDATE") res.json("Order was updated");
    } catch (error) {
      res.status(400).json({ Error: error.message });
    }
  } else {
    return res.status(403).json({Error: "Forbidden"})
  }
}
