import { pool } from "../dbConnectComponent.mjs";

export default async function deleteOrder(req, res) {
  try {
    const { order_id } = req.body;
    const sqlstr = `SELECT user_id from orders WHERE order_id=${order_id};`;
    const order = await pool.query(sqlstr);
    if (!order.rows[0]) {
      return res
        .status(404)
        .json({ message: `Cannot find order with id: ${order_id}` });
    }

    const sql = `UPDATE orders SET archivated=true WHERE order_id= $1;`;
    const removeOrder = await pool.query(sql, [order_id]);
    console.log(removeOrder);
    if (removeOrder.command === "UPDATE" && removeOrder.rowCount === 1)
      res.json("Order was removed to archive");
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: "Something goes wrong!" });
  }
}
