import { pool } from "./dbConnectComponent.mjs";

export default async function getCars(req, res) {
    const sql = `SELECT * , 
                        Transmission.Transmission, 
                        Fuel.Fuel,
                        Seats.Seats,
                        Class.Class,
                        Clima.Id_B,
                        Cruise.Id_B,
                        Available.Id 
        FROM Cars 
        INNER JOIN Transmission 
        ON Transmission.Id_T=Cars.transmission 
        INNER JOIN Fuel 
        ON Fuel.Id_F=Cars.Fuel
        INNER JOIN Seats 
        ON Seats.Id_T=Cars.Seats 
        INNER JOIN Class 
        ON Class.Id_C=Cars.Class
        INNER JOIN Clima 
        ON Clima.Id_B=Cars.Clima
        INNER JOIN Cruise 
        ON Cruis.Id_B=Cars.Cruise   
        INNER JOIN Available 
        ON Available.Id=Cars.Available 
        ;`;
    const carList = await pool.query(sql);
    res.json(carList.rows);
  }


//   Cars.brand, Cars.model, Cars.Engine
