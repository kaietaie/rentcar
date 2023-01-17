import { pool } from "../dbConnectComponent.mjs";

export default async function getOrders(req, res) {
    const sql = `SELECT * FROM orders;`;
    const orders = await pool.query(sql);
    res.json(orders.rows);
  }


