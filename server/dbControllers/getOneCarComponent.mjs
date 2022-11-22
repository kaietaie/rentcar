import { pool } from "./dbConnectComponent.mjs";

export default async function getOneCars(req, res) {
  const model = req.params.model;
  const sql = `SELECT Cars.*, Transmission.Transmission, Fuel.Fuel
  FROM Cars INNER JOIN transmission ON Transmission.Id_T=Cars.transmission
  INNER JOIN Fuel ON Fuel.Id_F=Cars.Fuel WHERE Cars.Model=$1;`;
  
  const carList = await pool.query(sql, [model]);
  res.json(carList.rows);
}

// const sql = `SELECT Cars.Brand,
//                       Cars.Model, 
//                       Cars.Engine,
//                       Cars.Seats, 
//                 Transmission.Transmission, 
//                 Fuel.Fuel,
//                 Class.Class,
//                 Clima.Clima,
//                 Cruise.Cruise,
//                 Available.Available
//         FROM Cars 
//         INNER JOIN Transmission 
//         ON Transmission.Id_T=Cars.Transmission 
//         INNER JOIN Fuel 
//         ON Fuel.Id_F=Cars.Fuel
//         INNER JOIN Class 
//         ON Class.Class=Cars.Class
//         INNER JOIN Clima 
//         ON Clima.Clima=Cars.Clima
//         INNER JOIN Cruise 
//         ON Cruise.Cruise=Cars.Cruise   
//         INNER JOIN Available 
//         ON Available.Id=Cars.Available 
//         WHERE Cars.Model=$1
//         ;`;