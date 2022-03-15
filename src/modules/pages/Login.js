import Header from "../Header";
import Footer from "../Footer";
import Singup from "../components/Singup";
import "bootstrap/dist/css/bootstrap.min.css"

export default function Login() {
  return (
    <div className="wrapper">
      <Header />
      <main className="MainWrapper">
       <Singup />
      </main>

      <Footer />
    </div>
  );
}
