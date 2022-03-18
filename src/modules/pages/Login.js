import Header from "../Header";
import Footer from "../Footer";
import Singup from "../components/Singup";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "../common/context/AuthContext";

export default function Login() {
  return (
    <div className="wrapper">
      <Header />
      <main className="MainWrapper">
        <AuthProvider>
          <Singup />
        </AuthProvider>
      </main>

      <Footer />
    </div>
  );
}
