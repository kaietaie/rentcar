import { pool } from "../dbConnectComponent.mjs";
import getPrice from "./functions/getPrice.mjs";

export default async function createOrder(req, res) {
  const { username, car, date_start, date_end, id_pl } = req.body;
  // date_start and date_end should be string in date format like 2023-04-01 8:00
  let price;
  try {
    price = await getPrice(req, res, car, date_start, date_end);
    try {
      const params = [username, car, date_start, date_end, id_pl, price];
      const query = `INSERT INTO orders ( username, car, date_start, date_end, place, price )
      VALUES ($1, $2, $3, $4, $5, $6);`;

      await pool.query(query, params, (err, result) => {
        if (err) {
          console.log(err.message);
          if (
            (err.message = `insert or update on table \"orders\" violates foreign key constraint \"orders_username_fkey\"`)
          ) {
            return res
              .status(400)
              .json({ Error: "You should registered this user first" });
          } else
            return res
              .status(400)
              .json({ Error: "Cannot add an order", message: err.message });
        }

        return res.status(201).send(`Order was added`);
      });
    } catch (error) {
      console.log(error);
      res
        .status(400)
        .json({ message: "Order cannot be added", ERROR: error.message });
    }
  } catch (error) {
    return res.status(404).json({ Error: "Cannot find a car" });
  }
}
