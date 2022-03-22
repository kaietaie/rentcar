import React, { useEffect, useState } from "react";
import CarsDB from "./cars";

export default function Car(props) {
  const findCar = props.car.name;
  const [actualCar, setActualCar] = useState({});

  useEffect(() => {
    const fetchCars = async () => {
      const result = await CarsDB(findCar);
      setActualCar(result);
    };
    fetchCars();
  }, [findCar]);
  if (!Object.keys(actualCar).length) {
    return <>loading...</>;
  } else {
    return (
      <>
        Мест {actualCar.properties.passengers} <br />
        Кондиционер <br />
        Объем багажника {actualCar.properties.trunk} л.
        <br />
        Расход {actualCar.properties.consumption} л./100 км
        <br />
      </>
    );
  }
  
}
