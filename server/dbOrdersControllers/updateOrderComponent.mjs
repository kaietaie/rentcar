import { pool } from "../dbConnectComponent.mjs";
import checkDataDB from "./functions/checkDataDB.mjs";
import updateSql from "../functions/updateSql.mjs";
import { verifyAuthority } from "../middleware/verifyAuthority.js";
import { authorityList } from "../config/authorityList.js";
import checkIdentity from "../functions/checkIdentity.mjs";
import getPrice from "./functions/getPrice.mjs";

export default async function updateOrder(req, res) {
  const { order_id, car_id, start_date, end_date, location } = req.body;
  // const keys = Object.keys(req.body); 
  // const values = Object.values(req.body);
  delete req.body.order_id;
  delete req.body.car_id;
  delete req.body.start_date;
  delete req.body.end_date;
  delete req.body.location;
  if (Object.keys(req.body).length !== 0)
    return res.status(500).json({Error : "Some extra fields are excessive or check correct spelling of the fields"});
  
  const realOrder = await checkDataDB(order_id, "orders");
  if (!realOrder[0])
  return res
  .status(404)
  .json({ Error: `Can't find order with id = ${order_id}` });
  
  const order = realOrder[1].rows[0];
  console.log(order.car)
  let car, locationId, sdate, edate, price;
  car_id ? car = car_id : car = order.car;
  location ? locationId = location : locationId = order.location;
  start_date ? sdate = start_date : sdate = order.start_date;
  end_date ? edate = end_date : edate = order.end_date;

  if (verifyAuthority(req, authorityList.Admin) || (await checkIdentity(req))) {
    if (req.body?.price)
      return res
        .status(403)
        .json({ Error: "Forbidden", message: "Price can`t be change manualy" });
    if (car) {
      const checkcar = await checkDataDB(car, "cars");
      console.log({checkcar})
      if (checkcar[0] === false) {
        return res.status(404).json({ Error: "Cannot find a car" });
      }
      // update Price order
    }
    if (locationId) {
      const checklocation = await checkDataDB(locationId, "locations");
      if (checklocation[0] === false) {
        return res.status(404).json({ Error: "Cannot find this location" });
      }
    }
    if (sdate || edate) {
      price = await getPrice( res, car, sdate, edate);
      console.log({price})
      if (typeof price === "object") return res.status(400).json(price);
      const order = realOrder[1].rows[0];
      if (sdate && edate) {
        const start = new Date(sdate);
        const end = new Date(edate);
        const days = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
        if (days < 0)
          return res
            .status(404)
            .json({ Error: "Last day can`t be before first day of order" });
      }
      if (sdate) {
        const start = sdate;
        const end = order.end_date;
        if (end - start < 0)
          return res
            .status(404)
            .json({ Error: "Last day can`t be before first day of order" });
      }
      if (edate) {
        const end = edate;
        const start = order.start_date;
        if (end - start < 0)
          return res
            .status(404)
            .json({ Error: "Last day can`t be before first day of order" });
      }
    }
    try {
      const keys = ["order_id", "car", "start_date", "end_date", "location", "price"];
      const values = [order_id, car, sdate, edate, locationId, price];
      const updateOrder = await pool.query(updateSql(keys, values, "orders"));
      if (updateOrder.command === "UPDATE") res.json("Order was updated");
    } catch (error) {
      res.status(400).json({ Error: error.message });
    }
  } else {
    return res.status(403).json({ Error: "Forbidden" });
  }
}
