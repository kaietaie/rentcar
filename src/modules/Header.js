import Button from '@mui/material/Button';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Main from './Main';
import Autopark from './Autopark';
import Terms from './Terms';
import Feedback from './Feedback';
import Advices from './Advices';
import Contacts from './Contacts';
import Client from './Client';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';


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
          ПН - ВС: 9:00 до 19:00, СБ - ВС: по запросу
          <br />
          Поддержка клиентов и заявки с сайта 24/7
          <br />
          <Button size="small" variant="contained">Оформить заказ</Button>
        </div>
        <div className="contactInfo">
          Київ: +380 11 111 11 11 <br />
          Прага: +420 111 111 111 <br />
          Братислава: +421 111 111 111
        </div>
        <div className="language">
          Login
          <Button size="small" variant="contained">
          <Link to='/client' element={<Client />}>Войти</Link>
          </Button>
        </div>
      </div>
      </div>
      <div className="menu">
        <ul className="menuList">
          
            <li><Link to='/' element={<Main />}>Главная</Link></li>
            <li><Link to='/autopark' element={<Autopark />}>Автопарк</Link></li>
            <li><Link to='/terms' element={<Terms />}>Условия</Link></li>
            <li><Link to='/feedback' element={<Feedback />}>Отзывы</Link></li>
            <li><Link to='/advices' element={<Advices />}>Советы</Link></li>
            <li><Link to='/contacts' element={<Contacts />}>Контакты</Link></li>
        
        </ul>
      </div>
    </header>
  );
};


export default Header;
