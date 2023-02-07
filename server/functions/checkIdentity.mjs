import jwt from "jsonwebtoken";
import { pool } from "../dbConnectComponent.mjs";

export default async function checkIdentity(req) {
  const token = req.headers.authorization || req.headers.Authorization;
  const auth = jwt.decode(token, { complete: true });
  const currentUser = auth.payload.user_id;
  const { order_id } = req.body;
  const sql = `SELECT user_id from orders WHERE order_id=${order_id};`;
  const find = await pool.query(sql);
  if (currentUser === find.rows[0].user_id) return true;
  return false;
}