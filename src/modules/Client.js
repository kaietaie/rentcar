import Header from "./Header";
import Footer from "./Footer";

export default function Client() {
    return (
        <div className="wrapper">  
      <Header />
      <main className="MainWrapper">
        <h2>Client</h2>
        
      </main>
      
      <Footer />
    </div>
    );
  }

/* кабинет клиента, для просмотра своего заказа (данные по автомобилю, количество 
  оставшихся дней, место сдачи авто, сколько было оплачено, какие доп.услуги были 
  включены в заказ), возможность оставить отзыв( который после модерации будет 
  отображен на странице ОТЗЫВЫ).
  Отобразить фото и имя клиента. */