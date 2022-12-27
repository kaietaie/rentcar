import { pool } from "../dbConnectComponent.mjs";

export default async function createCar(req, res) {
  const a = req.body.fuel

  await pool.query(
    `INSERT INTO Cars ( 
     Brand, Model, Engine, Transmission, Fuel, Consumption, Trunk, Class, Seats, Clima, Cruise, Available )
     VALUES
     ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);`,
    [
      req.body.name,
      req.body.surname,
      req.body.engine,
      Number(req.body.transmission),
      Number(req.body.fuel),
      Number(req.body.consumption),
      Number(req.body.trunk),
      Number(req.body.class),
      Number(req.body.seats),
      Number(req.body.clima),
      Number(req.body.cruise),
      Number(req.body.available),
    ],
    (err, result) => {
      if( err ) console.log(err.message); 
      res.status(201).send(`New car was added with ID: ${result}`)
    }
  );
}
