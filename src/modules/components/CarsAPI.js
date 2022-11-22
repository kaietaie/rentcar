import axios from "axios";

export default async function CarsDB(car) {
  const carName = car.split(' ');
  const { data } = await axios.get("http://localhost:5000/apicars/cars/" + carName[1]);
  return data;
}
 