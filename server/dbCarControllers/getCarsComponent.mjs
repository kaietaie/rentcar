import { pool } from "../dbConnectComponent.mjs";

export default async function getCars(req, res) {
  const sql = `SELECT  cars.car_id, make, model, engine.engine, engine.power, consumption, trunk, seats, 
    transmission.transmission, fuel.fuel, class.class, clima, cruise, available 
    FROM cars 
    inner join engine
    on engine.car_id=cars.car_id
    INNER JOIN transmission 
    ON transmission.transmission_id=cars.transmission 
    INNER JOIN fuel 
    ON fuel.fuel_id=cars.fuel
    INNER JOIN class 
    ON class.class_id=cars.class
    where available = true;`;
  const carList = await pool.query(sql);
  res.json(carList.rows);
}

//   Cars.brand, Cars.model, Cars.Engine
