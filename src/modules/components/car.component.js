import React, { Component, useState } from "react";
import cars from "./cars";

// export default class Car extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       cars: [],
//       search: {},
//       name: "",
//       properties: {
//         isavailable: false,
//         popular: true,
//         class: [],
//         engine: "",
//         transmission: "",
//         fuel: "",
//         consumption: 0,
//         passengers: 0,
//         trunk: 0,
//         options: {
//           clima: true,
//           cruiseControle: false,
//         },
//       },
//     };
//     this.search = this.props.car;

//   }

// render(props){
export default function Car(props) {
  const car = props.car.name;
  const [actualCar, setActualCars] = useState();
  setActualCars({
    name: car,
    properties: {
      isavailable: false,
      popular: true,
      class: [],
      engine: "",
      transmission: "",
      fuel: "",
      consumption: 0,
      passengers: 0,
      trunk: 0,
      options: {
        clima: true,
        cruiseControle: false,
      },
    },
  });
  console.log("actual "+actualCar);

  setActualCars(cars(car));
  return (
    <>
      Мест {actualCar?.properties?.passengers | 0} <br />
      Кондиционер <br />
      Объем багажника {actualCar?.properties?.trunk | 0}л.
      <br />
      Расход {actualCar?.properties?.consumption | 0} л./100 км
      <br />
    </>
  );
}

// }
