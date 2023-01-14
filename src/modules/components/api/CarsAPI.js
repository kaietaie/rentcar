import axios from "axios";

export default async function CarsDB(car) {
  const host = process.env.HOST || "localhost";
  const port = process.env.SERVER_PORT || 5000;
  const carName = car.split(" ");
  const { data } = await axios.get(
    `http://${host}:${port}/apicars/cars/${carName[1]}`
  );
  return data;
}
