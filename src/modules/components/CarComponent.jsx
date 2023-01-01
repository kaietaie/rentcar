import React, { useEffect, useState } from "react";
import CarsDB from "./api/CarsAPI.js";

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
        Мест {actualCar[0].seats} <br />
        Кондиционер <br />
        Объем багажника {actualCar[0].trunk} л.
        <br />
        Расход {actualCar[0].consumption} л./100 км
        <br />
      </>
    );
  }
  
}
