import axios from "axios";

export default async function CarsDB(car) {
  const { data } = await axios.get("http://localhost:5000/car");

  return data.find((r) => r.name === car);
}

/*
findCar = "name"
carArr = [ {name:'', prop:{}}, {car2}, {car3} ...]

let car = carArr.find(e => e.name === findCar)

//   const carArr = [
  //     {
  //       properties: {
  //         options: { clima: true, cruiseControle: true },
  //         isavailable: true,
  //         popular: true,
  //         class: ["econom"],
  //         engine: "1.4 TDI, 66kW",
  //         transmission: "manual",
  //         fuel: "diesel",
  //         consumption: 4.7,
  //         pasangers: 5,
  //       },
  //       _id: "6234b2f1e255aa57c7a57114",
  //       name: "Škoda Fabia",
  //       __v: 0,
  //     },
  //     {
  //       properties: {
  //         options: { clima: true, cruiseControle: true },
  //         isavailable: true,
  //         popular: true,
  //         class: ["buziness", "family"],
  //         engine: "2.0 TDI, 115kW",
  //         transmission: "automat",
  //         fuel: "diesel",
  //         consumption: 6.2,
  //         pasangers: 5,
  //       },
  //       _id: "6234b45a04baf6cba4e90608",
  //       name: "Škoda Superb",
  //       __v: 0,
  //     },
  //     {
  //       properties: {
  //         options: { clima: true, cruiseControle: true },
  //         isavailable: true,
  //         popular: true,
  //         class: ["buziness", "family"],
  //         engine: "2.0 TDI, 130kW",
  //         transmission: "automat",
  //         fuel: "diesel",
  //         consumption: 5.8,
  //         pasangers: 5,
  //       },
  //       _id: "6234c3a0c91411c658a847de",
  //       name: "Volkswagen Passat",
  //       __v: 0,
  //     },
  //     {
  //       properties: {
  //         options: { clima: true, cruiseControle: true },
  //         isavailable: true,
  //         popular: true,
  //         class: ["family"],
  //         engine: "1.6 TDI, 85 kW",
  //         transmission: "manual",
  //         fuel: "diesel",
  //         consumption: 3.8,
  //         pasangers: 5,
  //       },
  //       _id: "6234de0421bd0bdecc749e3c",
  //       name: "Volkswagen Golf",
  //       __v: 0,
  //     },
  //     {
  //       properties: {
  //         options: { clima: true, cruiseControle: true },
  //         isavailable: true,
  //         popular: true,
  //         class: ["buziness", "family"],
  //         engine: "1.8 TDI, 130 kW",
  //         transmission: "automat",
  //         fuel: "diesel",
  //         consumption: 5.8,
  //         pasangers: 5,
  //       },
  //       _id: "6234de0421bd0bdecc749e3c",
  //       name: "Mercedes E-Class",
  //       __v: 0,
  //     },
  //     {
  //         properties: {
  //           options: { clima: true, cruiseControle: true },
  //           isavailable: true,
  //           popular: true,
  //           class: ["buziness", "family"],
  //           engine: "1.8 TDI, 120 kW",
  //           transmission: "manual",
  //           fuel: "diesel",
  //           consumption: 5.7,
  //           pasangers: 5,
  //         },
  //         _id: "6234de0421bd0bdecc749e3c",
  //         name: "Mercedes C-Class",
  //         __v: 0,
  //       },
  //   ];
*/
