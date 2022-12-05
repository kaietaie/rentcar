import React, { useEffect, useState } from "react";
import CarsDB from "./CarsAPI";
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
  const clima =  actualCar[0]?.clima === true ? "Є кондиціонер" : "Без кондиціонеру";
  if (!Object.keys(actualCar).length) {
    return <>loading...</>;
  } else {
    return (
      <>
        Кількість місць {actualCar[0].seats} <br />
        { clima }<br />
        Об'ієм багажника {actualCar[0].trunk} л.
        <br />
        Витрата палива {actualCar[0].consumption} л./100 км
        <br />
      </>
    );
  }
  
}
