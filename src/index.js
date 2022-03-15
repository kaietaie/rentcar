import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Autopark from "./modules/pages/Autopark";
import Terms from "./modules/pages/Terms";
import Feedback from "./modules/pages/Feedback";
import Advices from "./modules/pages/Advices";
import Contacts from "./modules/pages/Contacts";
import Login from "./modules/pages/Login";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="autopark" element={<Autopark />} />
        <Route path="terms" element={<Terms />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="advices" element={<Advices />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
