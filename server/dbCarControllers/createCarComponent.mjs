import { pool } from "../dbConnectComponent.mjs";

export default async function createCar(req, res) {
  try {
    const {engine, power} = req.body;
    const params = [
      req.body.make,
      req.body.model,
      Number(req.body.transmission),
      Number(req.body.fuel),
      Number(req.body.consumption),
      Number(req.body.trunk),
      Number(req.body.class),
      Number(req.body.seats),
      req.body.clima,
      req.body.cruise,
      req.body.available
    ];
    const query = `INSERT INTO cars ( 
      make, model, transmission, fuel, consumption, trunk, class, seats, clima, cruise, available )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) returning car_id;`
      pool.query(query, params,
      (err, result) => {
        if (err) {
          console.log(err.message);
          return res.status(400).json({ Error: "Cannot add a car", message: err.message });
        }
        const query1 = `insert into engine (car_id, engine, power) values ($1, $2, $3);`;
        const params1 = [result.rows[0].car_id, engine, power];
        pool.query(query1, params1,
          (err, result) => {
            if (err) {
              console.log(err.message);
              return res.status(400).json({ Error: "Cannot add a car", message: err.message });
            }
          });
        return res.status(201).send(`${req.body.make} ${req.body.model} was added with id: ${result.rows[0].car_id}`);
      }
    );



      } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Registration error", ERROR : error.message  });
            }
      }


      // "engine": "2.0 TDI",
      // "power": "130kW",