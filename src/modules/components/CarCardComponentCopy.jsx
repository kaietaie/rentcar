import React, { useEffect, useState } from "react";
import CarGetOne from "./CarGetOneComponent";

export default function Car(props) {
  const findCar = props.car.name;
  const [actualCar, setActualCar] = useState({});

  useEffect(() => {
    const fetchCars = async () => {
      const result = await CarGetOne(findCar);
      setActualCar(result);
    };
    fetchCars();
  }, [findCar]);
  if (!Object.keys(actualCar).length) {
    return <>loading...</>;
  } else {
    return (
      <>
        {actualCar.brand} {actualCar.model} <br />
        {actualCar.engine } <br />
        Коробка {actualCar.transmission} 
        <br />
        Паливо {actualCar.fuel}
        <br />
      </>
    );
  }
  
}
