import React from 'react';
import ShowCard from '../components/CarCards/ShowCard';

const auoparkCars = [
  {
    id: "1",
    car: "Škoda Fabia"
  },
  {
    id: "2",
    car: "Škoda Superb"
  },
  {
    id: "3",
    car: "Volkswagen Passat"
  },
  {
    id: "4",
    car: "Volkswagen Golf"
  },
  {
    id: "5",
    car: "Mercedes E-Class"
  },
  {
    id: "6",
    car: "Mercedes C-Class"
  }
];

export default function Autopark() {
  return (
    <div className="wrapper">
      <main className="MainWrapper">
        <h2>Autopark</h2>
        <div className="carsCards">
          {auoparkCars.map(({car, id})=> <ShowCard key={id} showCar={car}/>)}
        </div>
      </main>
    </div>
  );
}
