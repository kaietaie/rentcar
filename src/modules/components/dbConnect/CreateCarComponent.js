import axios from "axios";

export default async function createCar(car) {
  await axios
    .post("http://localhost:5000/api/cars", car)
    .catch(function (error) {
      console.log(error);
    });
}
