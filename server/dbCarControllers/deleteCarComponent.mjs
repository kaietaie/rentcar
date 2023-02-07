import { pool } from "../dbConnectComponent.mjs";

export default async function deleteCar(req, res) {
  const id = req.body.car_id;
  const sql = "UPDATE cars SET available=false WHERE car_id = $1";
  try {
    await pool.query(sql, [id],
      (err, result) => {
        if( err ) {
          console.log(err.message); 
          res.status(400).json({ Error: "Delete error", message : err.message  });
        }
        res.status(200).send("Car was deleted successfully")
      });
  } catch (error) {
    res.json({"ERROR" : error.message})
  }
}
