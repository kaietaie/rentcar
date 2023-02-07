import { authorityList } from "../config/authorityList.js";
import { pool } from "../dbConnectComponent.mjs";
import { verifyAuthority } from "../middleware/verifyAuthority.js";
import jwt from "jsonwebtoken";
import checkDataDB from "./functions/checkDataDB.mjs";

export default async function getOrders(req, res) {
  try {
    if (verifyAuthority(req, authorityList.User, authorityList.Holder)) {
      const token = req.headers.authorization || req.headers.Authorization;
      const auth = jwt.decode(token, { complete: true });
      const user_id = auth.payload.user_id;
      try {
        const sql = `SELECT * FROM orders WHERE user_id = $1;`;
        const order = await pool.query(sql, [user_id]);
        return res.json(order.rows);
      } catch (error) {
        return res.json({ Error: error.message });
      }
    } else {
      if (verifyAuthority(req, authorityList.Admin)) {
        // check orders for some user : {"user_id" : 2}
        if (req.body?.user_id) {
          try {
            const user_id = req.body.user_id;
            const realUser = await checkDataDB(user_id, "users");
            if (realUser === false) {
              return res.status(404).json({ Error: "Cannot find a user" });
            }
            const sql = `SELECT * FROM orders WHERE user_id = $1;`;
            const order = await pool.query(sql, [user_id]);
            return res.json(order.rows);
          } catch (error) {
            return res.json({ Error: error.message });
          }
        }
        //  or have a look on all orders
        const sql = `SELECT * FROM orders;`;
        const orders = await pool.query(sql);
        res.json(orders.rows);
      }
    }
  } catch (error) {
    return res
      .status(401)
      .json({ Error: "Unauthorized", message: error.message });
  }
}
