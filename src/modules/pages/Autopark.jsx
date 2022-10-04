import React from 'react';
import ShowCard from "../components/ShowCard";

export default function Autopark() {
  return (
    <div className="wrapper">
      <main className="MainWrapper">
        <h2>Autopark</h2>
         <div className="carsCards">
          <ShowCard showCar="Golf"/> 
          <ShowCard showCar="Fabia"/> 
          <ShowCard showCar="C-Class"/>
          {/* <ShowCard showCar="Passat"/> */}
          <ShowCard showCar="Superb"/> 
          <ShowCard showCar="E-Class"/> 
        </div> 
        {/* <div className="carsCards">
          <ShowCard showCar="Passat"/>
          <ShowCard showCar="Superb"/> 
          <ShowCard showCar="E-Class"/> 
        </div> */}
      </main>
    </div>
  );
}
