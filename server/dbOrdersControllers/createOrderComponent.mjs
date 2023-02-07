import { pool } from "../dbConnectComponent.mjs";
import getPrice from "./functions/getPrice.mjs";
import jwt from "jsonwebtoken";
import checkDataDB from "./functions/checkDataDB.mjs";

export default async function createOrder(req, res) {
  const { car_id, start_date, end_date, location_id } = req.body;
  // date_start and date_end should be string in date format like 2023-04-01 8:00
  // let price;

  // return res
  //   .status(400)
  //   .json({ Error: "You should registered this user first" });
  // try {
  const checkcar = await checkDataDB(car_id, "cars");
  const checklocation = await checkDataDB(location_id, "locations");

  if (!car_id || !start_date || !end_date || !location_id) {
    return res.status(400).json({ Error: "There are some data missing" });
  } else if (checkcar === false) {
    console.log(`checkData is false`);
    return res.status(404).json({ Error: "Cannot find a car" });
  } else if (checklocation === false) {
    return res.status(404).json({ Error: "Cannot find this location" });
  } else {
    const token = req.headers.authorization || req.headers.Authorization;
    const auth = jwt.decode(token, { complete: true });
    console.log({ auth });
    const user_id = auth.payload.user_id;
    const price = await getPrice(req, res, car_id, start_date, end_date);
    if( typeof price === "object" ) return res.status(400).json(price)
    try {
      const params = [
        user_id,
        car_id,
        start_date,
        end_date,
        location_id,
        price,
      ];
      const query = `INSERT INTO orders ( user_id, car, start_date, end_date, location, price )
      VALUES ($1, $2, $3, $4, $5, $6);`;

      pool.query(query, params, (err, result) => {
        if (err) {
          console.log(err.message);
          return res
            .status(400)
            .json({ Error: "Cannot create an order", message: err.message });
        }
        console.log("Finish");
        return res.status(201).send(`Order was added`);
      });
    } catch (error) {
      console.log(error);
      res
        .status(400)
        .json({ message: "Order cannot be added", ERROR: error.message });
    }
  }
  // } catch (error) {
  //   return res.status(404).json({ Error: error.message });
  // }
}
