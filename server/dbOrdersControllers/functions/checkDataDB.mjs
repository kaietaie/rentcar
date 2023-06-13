import { pool } from "../../dbConnectComponent.mjs";

export default async function checkDataDB(id, table) {
  try {
    const normtable = table.slice(0, table.length - 1);
    const sql = `SELECT * from ${table} WHERE ${normtable}_id=${id};`;
    const find = await pool.query(sql);
    if (
      find?.rows[0]?.archivated === true ||
      find?.rows[0]?.enabled === false
    ) {
      return [false, find];
    }
    if (find?.rowCount === 1) {
      return [true, find];
    }
    return [false];
  } catch (error) {
    console.log(error);
    return [false];
  }
}
