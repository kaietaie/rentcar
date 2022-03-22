import ShowCard from "../components/ShowCard";

export default function Autopark() {
  return (
    <div className="wrapper">
      <main className="MainWrapper">
        <h2>Autopark</h2>
        <div className="carsCards">
          <ShowCard showCar="Škoda Fabia" />
          <ShowCard showCar="Škoda Superb" />
          <ShowCard showCar="Volkswagen Passat" />
        </div>
        <div className="carsCards">
          <ShowCard showCar="Volkswagen Golf" />
          <ShowCard showCar="Mercedes E-Class" />
          <ShowCard showCar="Mercedes C-Class" />
        </div>
      </main>
    </div>
  );
}
