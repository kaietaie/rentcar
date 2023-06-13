import { pool } from "../dbConnectComponent.mjs";
import checkDataDB from "../dbOrdersControllers/functions/checkDataDB.mjs";
import updaterSql from "../functions/updateSql.mjs"

export default async function updateCar(req, res) {
  const { car_id } = req.body;
  const realOrder = await checkDataDB(car_id, "cars");
  if (!realOrder[0])
    return res
      .status(404)
      .json({ Error: `Can't find car with id = ${car_id}` });
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  try {
    await pool.query(updaterSql(keys, values, "cars"))
    res.json("Car was updated successfully");
  } catch (error) {
    res.json({"ERROR" : error.message})
  }
}
