import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Main from './pages/Main';
import Autopark from './pages/Autopark';
import Terms from './pages/Terms';
import Feedback from './pages/Feedback';
import Advices from './pages/Advices';
import Contacts from './pages/Contacts';
import LoginHeader from './components/LoginHeader';

const Header = () => {
  return (
    <header >
      <div className="header fixed-header" >
      <div className="logo" >
        <img
          className="logo"
          alt="CarRent"
          src="logo.png"
        ></img>
      </div>
      <div className="bacisInfo">
        <div className="workinghour">
          ПН - ПТ: 9:00 до 19:00, СБ - НД: по запиту
          <br />
          Підтримка клієнтів і замовлення онлайн 24/7
          <br />
          <Button size="small" variant="contained">
          Замовити
          </Button>
        </div>
        <div className="contactInfo">
          Київ: +380 11 111 11 11 <br />
          Прага: +420 111 111 111 <br />
          Братислава: +421 111 111 111
        </div>
        <div className="language">
        <LoginHeader/>
        </div>
      </div>
      </div>
      <div className="menu">
        <ul className="menuList">
          
            <li><Link to='/' element={<Main />}>Головна</Link></li>
            <li><Link to='/autopark' element={<Autopark />}>Автопарк</Link></li>
            <li><Link to='/terms' element={<Terms />}>Умови</Link></li>
            <li><Link to='/feedback' element={<Feedback />}>Відгуки</Link></li>
            <li><Link to='/advices' element={<Advices />}>Поради</Link></li>
            <li><Link to='/contacts' element={<Contacts />}>Контакти</Link></li>
        
        </ul>
      </div>
    </header>
  );
};


export default Header;
