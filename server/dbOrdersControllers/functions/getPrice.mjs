import { pool } from "../../dbConnectComponent.mjs";

const getPrice = async (req, res, car_id, start_date, end_date) => {
  try {
    const sql = `SELECT price FROM price WHERE car_id=$1;`;
    const car = await pool.query(sql, [car_id]);
    let numprice
    try {
      numprice = Object.values(car.rows[0]);
    } catch (error) {
      return res
      .status(404)
      .json({ Error: "Cannot find a car", message: error.message });
    }
    const start = new Date(start_date);
    const end = new Date(end_date);
    const days = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
    if (days < 0) return {Error: "Last day can`t be before first day" }
    const result = Math.ceil(days) * numprice[0];
    return result;
  } catch (err) {
    console.log(err.message);
  } 
};

export default getPrice;
