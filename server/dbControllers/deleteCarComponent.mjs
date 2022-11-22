import { pool } from "./dbConnectComponent.mjs";

export default async function deleteCar(req, res) {
  const id = req.params.id;
  const sql = "DELETE FROM Cars WHERE id = $1";
  const deleteCar = await pool.query(sql, [id]);
  res.json(deleteCar);
}
