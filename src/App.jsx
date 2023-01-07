import React from "react";
import "./App.css";
import Footer from "./modules/Footer.jsx";
import Header from "./modules/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Autopark from "./modules/pages/Autopark.jsx";
import Terms from "./modules/pages/Terms.jsx";
import Feedback from "./modules/pages/Feedback.jsx";
import Advices from "./modules/pages/Advices.jsx";
import Contacts from "./modules/pages/Contacts.jsx";
import Login from "./modules/pages/Login.jsx";
import Client from "./modules/pages/Client.jsx";
import Main from "./modules/pages/Main.jsx";
import ProtectedRoute from "./modules/common/ProtectedRoute.jsx";
import Admin from "./modules/pages/Admin.jsx";
import { AuthProvider } from "./context/AuthProvider.js";
import Register from "./modules/pages/Registration";
import Unauthorized from "./modules/pages/Unauthorized";
import Holder from "./modules/pages/Holder";
import PersistLogin from "./modules/components/PersistLogin";

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
            <Route path="advices" element={<Advices />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Register />} />
            <Route path="unauthorized" element={<Unauthorized />} />
            <Route element={<PersistLogin />}>
              <Route element={<ProtectedRoute allowedAuthority={["2001"]} />}>
                <Route path="user-page" element={<Client />} />
              </Route>
              <Route element={<ProtectedRoute allowedAuthority={["5150"]} />}>
                <Route path="/admin-panel" element={<Admin />} />
              </Route>
              <Route
                element={
                  <ProtectedRoute allowedAuthority={["2001", "1984", "5150"]} />
                }
              >
                <Route path="feedback" element={<Feedback />} />
              </Route>
              <Route element={<ProtectedRoute allowedAuthority={["1984"]} />}>
                <Route path="holder-page" element={<Holder />} />
              </Route>
            </Route>
          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}
