import Header from "../Header";
import Footer from "../Footer";
import ShowCard from "../components/ShowCard";

export default function Autopark() {
    return (
        <div className="wrapper">  
      <Header />
      <main className="MainWrapper">
        <h2>Autopark</h2>
        <div className="carsCards">
          <ShowCard /> <ShowCard /> <ShowCard />
        </div>
        <div className="carsCards">
          <ShowCard /> <ShowCard /> <ShowCard />
        </div>
      </main>
      <Footer />
    </div>
    );
  }