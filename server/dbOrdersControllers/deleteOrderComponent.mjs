import { pool } from "../dbConnectComponent.mjs";
import getOneOrder from "./getOneOrderComponent.mjs";

export default async function deleteOrder(req, res) {
  try {
    const { id_order } = req.body;
    const order = await getOneOrder({ id: id_order });
    if (!order) {
      return res
        .status(404)
        .json({ message: `Cannot find order with id: ${id_order}` });
    }

    const sql = `UPDATE orders SET deleted=true WHERE id_order= $1;`;
    const removeOrder = await pool.query(sql, [ id_order]);
    console.log(removeOrder);
    if (removeOrder.command === "UPDATE" && removeOrder.rowCount === 1)
      res.json("Order was removed to archive");
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: "Something goes wrong!" });
  }
}

/*
insert into archive_orders(id_archive_order, username, car, date_start, date_end, place, price ) select id_order, username, car, date_start, date_end, place, price from orders where id_order=9;
*/
