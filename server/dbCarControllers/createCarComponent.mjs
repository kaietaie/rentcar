import { pool } from "../dbConnectComponent.mjs";

export default async function createCar(req, res) {
  try {
    const params = [
      req.body.brand,
      req.body.model,
      req.body.engine,
      Number(req.body.transmission),
      Number(req.body.fuel),
      Number(req.body.consumption),
      Number(req.body.trunk),
      Number(req.body.class),
      Number(req.body.seats),
      Number(req.body.clima),
      Number(req.body.cruise),
      Number(req.body.available)
    ];
    const query = `INSERT INTO Cars ( 
      Brand, Model, Engine, Transmission, Fuel, Consumption, Trunk, Class, Seats, Clima, Cruise, Available )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);`
    
    await pool.query( query, params,
        (err, result) => {
          if( err ) {
            console.log(err.message); 
            return res.status(400).json({ Error: "Cannot add a car", message : err.message  });
          }
         return res.status(201).send(`${req.body.brand} ${req.body.model} was added`)
        }
        );
      } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Registration error", ERROR : error.message  });
            }
      }
