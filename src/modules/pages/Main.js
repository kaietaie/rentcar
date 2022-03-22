import MainCarousel from "../components/Carousel";
import ShowCard from "../components/ShowCard";
import MapRend from "../map/Map";

const Main = () => {
  return (
    <div className="MainWrapper">
     
      <div className="mainBoard">
        <div className="mainBoardText">
          <h2>АРЕНДА АВТО В БРАТИСЛАВЕ</h2>
          <br/>
          Ищете авто напрокат в Братиславе? Сдаем в аренду только новые, ухоженные,
          технически исправные автомобили — Ваша безопасность и комфорт на
          первом месте! Гарантируем честную стоимость и низкие цены. Собственный
          гараж в центре Праги, доставим машину в любую точку города.
          Исключительный автопрокат на родном языке
        </div>
        <div className="rezervation">
        <h2>РЕЗЕРВАЦИЯ АВТО</h2>
          <br/>
          Ищете авто напрокат в Братиславе? Сдаем в аренду только новые, ухоженные,
          технически исправные автомобили — Ваша безопасность и комфорт на
          первом месте! Гарантируем честную стоимость и низкие цены. Собственный
          гараж в центре Праги, доставим машину в любую точку города.
          Исключительный автопрокат на родном языке

        </div>
      </div>
      <div className=""></div>
      <MainCarousel />
      <div>
        <h1>ПОПУЛЯРНЫЕ МАШИНЫ АВТОПРОКАТА</h1>
        <div className="carsCards">
          <ShowCard showCar="Škoda Fabia"/> 
          <ShowCard showCar="Volkswagen Golf"/> 
          <ShowCard showCar="Škoda Superb"/>
        </div>
      </div>

      <div>
        <p>Наши Контакты</p>
        <div id="map">
            {/* <MapRend />          */}
        </div>
      </div>
    </div>
  );
};

export default Main;
