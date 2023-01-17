import { pool } from "../dbConnectComponent.mjs";

export default async function getOneOrder(req, res) {
  const id = req.params.id;
  const sql = `SELECT * FROM orders WHERE id_order = $1;`;

  const order = await pool.query(sql, [id]);
  res.json(order.rows);
}
