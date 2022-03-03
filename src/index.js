import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Autopark from './modules/Autopark';
import Terms from './modules//Terms';
import Feedback from './modules//Feedback';
import Advices from './modules//Advices';
import Contacts from './modules//Contacts';


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
      </Routes>
    </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
