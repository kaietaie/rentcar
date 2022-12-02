import axios from "axios";

export default async function CarsDB(car) {
  const host = process.env.HOST || "localhost";
  const carName = car.split(" ");
  const { data } = await axios.get(
    `http://${host}:5000/apicars/cars/${carName[1]}`
  );
  return data;
}
