import { pool } from "../dbConnectComponent.mjs";

export default async function getCars(req, res) {
    const sql = `SELECT id_car, brand, model, engine, seats, 
                        Transmission.Transmission, 
                        Fuel.Fuel,
                        Class.Class,
                        Clima.Clima,
                        Cruise.Cruise,
                        Available.Available 
        FROM Cars 
        INNER JOIN Transmission 
        ON Transmission.Id_T=Cars.transmission 
        INNER JOIN Fuel 
        ON Fuel.Id_F=Cars.Fuel
        INNER JOIN Class 
        ON Class.Id_C=Cars.Class
        INNER JOIN Clima 
        ON Clima.Id_Cl=Cars.Clima
        INNER JOIN Cruise 
        ON Cruise.Id_Cr=Cars.Cruise   
        INNER JOIN Available 
        ON Available.Id_Av=Cars.Available 
        ;`;
    const carList = await pool.query(sql);
    res.json(carList.rows);
  }


//   Cars.brand, Cars.model, Cars.Engine
