import { pool } from "../dbConnectComponent.mjs";

export default async function getOneOrder(req, res) {
  let id;
  if (!req.params?.id) {
    id = Number(req.id);
    if (typeof id !== "number")
      return res.status(400).json({ Error: "id should be a number" });
  } else {
    id = Number(req.params?.id);
    if (typeof id !== "number")
      return res.status(400).json({ Error: "id should be a number" });
  }
  try {
    const sql = `SELECT * FROM orders WHERE id_order = $1;`;
    const order = await pool.query(sql, [id]);

    if (!req.params?.id) {
      return order.rows;
    } else {
      return res.json(order.rows);
    }
  } catch (error) {
    return res.json({ Error: error.message });
  }
}
