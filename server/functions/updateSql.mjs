export default function updaterSql(keys, values, table) {
  let str = "",
    query,
    val;
  for (let i = 1; i < keys.length; i++) {
    if (typeof values[i] === "string") {
      val = `'${values[i]}'`;
    } else val = `${values[i]}`;
    str += `${keys[i]} = ${val},`;
    if (i === keys.length - 1) query = str.slice(0, -1);
  }
  return `UPDATE ${table} SET ${query} WHERE ${keys[0]} = '${values[0]}';`;
}
