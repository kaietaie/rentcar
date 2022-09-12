import React from 'react';
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
          <Route path="/admin-panel" element={<Admin />}/>
        </Routes>
        <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}
