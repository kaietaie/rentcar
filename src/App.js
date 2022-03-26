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
import ProtectedRoute from "./modules/common/ProtectedRoute";
import Admin from "./modules/pages/Admin";
import { AuthProvider } from "./modules/context/AuthContext";

export default function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="autopark" element={<Autopark />} />
          <Route path="terms" element={<Terms />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="advices" element={<Advices />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="login" element={<Login />} />
          <Route element={<ProtectedRoute />} >
            <Route path="user-page" element={<Client />}/>
          </Route>
          <Route path="/adminPanel" element={<Admin />}/>
        </Routes>
        <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}
