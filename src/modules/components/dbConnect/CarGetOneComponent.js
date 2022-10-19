import axios from "axios";

export default async function CarGetOne(car) {
  const { data } = await axios.get("http://localhost:5000/api/cars");
  return data.find((r) => r.model === car);
}
