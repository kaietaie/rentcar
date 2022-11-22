import React, { useEffect, useState } from "react";
import CarsDB from "./CarsAPI";

export default function Car(props) {
  const findCar = props.car.name;
  const [actualCar, setActualCar] = useState({});

  useEffect(() => {
    const fetchCars = async () => {
      const result = await CarsDB(findCar);
      return setActualCar(result[0]);
    };
    fetchCars();
  }, [findCar]);
  const clima =  actualCar.clima === 1 ? "Є кондиціонер" : "Без кондиціонеру";
  if (!Object.keys(actualCar).length) {
    return <>loading...</>;
  } else {
    return (
      <>
        Кількість місць {actualCar.seats} <br />
        { clima }<br />
        Об'ієм багажника {actualCar.trunk} л.
        <br />
        Витрата палива {actualCar.consumption} л./100 км
        <br />
      </>
    );
  }
  
}
