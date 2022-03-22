import "./App.css";
import Footer from "./modules/Footer";
import Header from "./modules/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Autopark from "./modules/pages/Autopark";
import Terms from "./modules/pages/Terms";
import Feedback from "./modules/pages/Feedback";
import Advices from "./modules/pages/Advices";
import Contacts from "./modules/pages/Contacts";
import Login from "./modules/pages/Login";
import Client from "./modules/pages/Client";
import Main from "./modules/pages/Main";

export default function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="autopark" element={<Autopark />} />
          <Route path="terms" element={<Terms />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="advices" element={<Advices />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="login" element={<Login />} />
          <Route path="/userPage" element={<Client />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
