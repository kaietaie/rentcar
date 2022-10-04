import { pool } from "./dbConnectComponent.mjs";

class DBController {
  async createCar(req, res) {
    const sql = await pool.query(
      `INSERT INTO Cars ( 
       Model, Brand, Engine, Transmission, Fuel, Consumption, Trunk, Class, Seats, Clima, Cruise, Available )
       VALUES
       ('Fabia', 'Skoda', '1.4 TDI, 66kW', '1', '1', '4.7', '330', '1', '5', '1', '2', '1'),`,
      [req.body.name, req.body.secondname]
    );

    res.json(sql.rows);
  }
  async getCars(req, res) {
    const sql = `SELECT Cars.brand, Cars.model, Cars.Engine, Transmission.Transmission, Fuel.Fuel  
        FROM Cars INNER JOIN transmission ON Transmission.Id_T=Cars.transmission 
        INNER JOIN Fuel ON Fuel.Id_F=Cars.Fuel;`;
    const carList = await pool.query(sql);
    res.json(carList.rows);
  }
  async getOneCar(req, res) {
    const model = req.params.model;
    const sql = `SELECT Cars.brand, Cars.model, Cars.Engine, Transmission.Transmission, Fuel.Fuel  
      FROM Cars INNER JOIN transmission ON Transmission.Id_T=Cars.transmission 
      INNER JOIN Fuel ON Fuel.Id_F=Cars.Fuel WHERE Cars.Model=$1;`;
    const carList = await pool.query(sql, [model]);
    res.json(carList.rows);
  }
  async updateCar(req, res) {
    // $1 = column`s name, $2 = new value, $3 = updated obj, $4 = id value
    const sql = "UPDATE Cars SET $1 = $2 WHERE $3 = $4";
    const updateCar = await pool.query(sql, []);
    res.json(updateCar);
  }
  async deleteCar(req, res) {
    const id = req.params.id;
    const sql = "DELETE FROM Cars WHERE id = $1";
    const deleteCar = await pool.query(sql, [id]);
    res.json(deleteCar);
  }
}

export const dbController = new DBController();
