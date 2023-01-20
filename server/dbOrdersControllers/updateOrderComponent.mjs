import { pool } from "../dbConnectComponent.mjs";
import updateSql from "./functions/updateSql.mjs";

export default async function updateOrder(req, res) {
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  try {
    const updateOrder = await pool.query(updateSql(keys, values));
    console.log(updateOrder)
    if (updateOrder.command === "UPDATE") res.json("Order was updated");
  } catch (error) {
    if (
      (error.message = `insert or update on table "orders" violates foreign key constraint "orders_username_fkey"`)
    )
      res.status(400).json({ Error: "You should registered this user first" });
  }
}
