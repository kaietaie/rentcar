import { pool } from "../../dbConnectComponent.mjs";

const getPrice = async (req, res, id_car, date_start, date_end) => {
  try {
    const sql = `SELECT price FROM price WHERE id_car=$1;`;
    const priceForCar = await pool.query(sql, [id_car]);
    let numprice
    try {
      numprice = Object.values(priceForCar.rows[0]);
    } catch (error) {
      return res
      .status(404)
      .json({ Error: "Cannot find a car", message: error.message });
    }
    const dstart = new Date(date_start);
    const dend = new Date(date_end);
    const days = (dend.getTime() - dstart.getTime()) / (1000 * 60 * 60 * 24);
    const result = Math.ceil(days) * numprice[0];
    return result;
  } catch (err) {
    console.log(err.message);
    return res
      .status(404)
      .json({ Error: "Cannot find a car", message: err.message });
  } 
};

export default getPrice;
