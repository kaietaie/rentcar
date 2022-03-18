import "dotenv/config";
import Cars from "./carSchema.mjs";

const newCar = {
  name: "Škoda Octavia",
  properties: {
    isavailable: true,
    popular: true,
    class: ["family"],
    engine: "1.6 TDI, 85 kW",
    transmission: "manual",
    fuel: "diesel",
    consumption: 3.8,
    pasangers: 5,
    trunk: 0,
    options: {
      clima: true,
      cruiseControle: true,
    },
  },
};

const addCars = function () {
  const car = new Cars(newCar);
  car.save();
  return  car;
};

export default addCars;
