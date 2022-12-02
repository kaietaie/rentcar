import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Hidden, IconButton, SwipeableDrawer, Divider, List, ListItem } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import Main from './pages/Main';
import Autopark from './pages/Autopark';
import Terms from './pages/Terms';
import Feedback from './pages/Feedback';
import Advices from './pages/Advices';
import Contacts from './pages/Contacts';
import LoginHeader from './components/LoginHeader';

import './Header.sass';

const Header = () => {
<<<<<<< HEAD
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
=======
    const [open, setOpen] = useState(false);
>>>>>>> CAR-20-adaptive-header-and-main-page

    return (
        <header>
            <Hidden smDown>
                <div className="header fixed-header">
                    <div className="logo">
                        <img alt="CarRent" className="logo" src="logo.png" />
                    </div>
                    <div className="bacisInfo">
                        <div className="workinghour">
                            ПН - ВС: 9:00 до 19:00, СБ - ВС: по запросу
                            <br />
                            Поддержка клиентов и заявки с сайта 24/7
                            <br />
                            <Button size="small" variant="contained">
                                Оформить заказ
                            </Button>
                        </div>
                        <div className="contactInfo">
                            Київ: +380 11 111 11 11 <br />
                            Прага: +420 111 111 111 <br />
                            Братислава: +421 111 111 111
                        </div>
                        <LoginHeader />
                    </div>
                </div>
                <div className="menu">
                    <ul className="menuList">
                        <li>
                            <Link element={<Main />} to="/">
                                Главная
                            </Link>
                        </li>
                        <li>
                            <Link element={<Autopark />} to="/autopark">
                                Автопарк
                            </Link>
                        </li>
                        <li>
                            <Link element={<Terms />} to="/terms">
                                Условия
                            </Link>
                        </li>
                        <li>
                            <Link element={<Feedback />} to="/feedback">
                                Отзывы
                            </Link>
                        </li>
                        <li>
                            <Link element={<Advices />} to="/advices">
                                Советы
                            </Link>
                        </li>
                        <li>
                            <Link element={<Contacts />} to="/contacts">
                                Контакты
                            </Link>
                        </li>
                    </ul>
                </div>
            </Hidden>
            <Hidden smUp>
                <IconButton className="header-burger">
                    <MenuIcon onClick={() => setOpen(true)} />
                </IconButton>
            </Hidden>
            <SwipeableDrawer anchor="right" open={open} onClose={() => setOpen(false)} onOpen={() => setOpen(true)}>
                <div>
                    <IconButton>
                        <ChevronRight onClick={() => setOpen(false)} />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem>
                        <LoginHeader isMobile />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <Button size="small" variant="contained">
                            Оформить заказ
                        </Button>
                    </ListItem>
                </List>
                <Divider />
                <List className="menuList--mobile">
                    <ListItem>
                        <Link element={<Main />} to="/">
                            Главная
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link element={<Autopark />} to="/autopark">
                            Автопарк
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link element={<Terms />} to="/terms">
                            Условия
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link element={<Feedback />} to="/feedback">
                            Отзывы
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link element={<Advices />} to="/advices">
                            Советы
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link element={<Contacts />} to="/contacts">
                            Контакты
                        </Link>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem>
                        <div className="contactInfo">
                            Київ: +380 11 111 11 11 <br />
                            Прага: +420 111 111 111 <br />
                            Братислава: +421 111 111 111
                        </div>
                    </ListItem>
                </List>
            </SwipeableDrawer>
        </header>
    );
};

export default Header;
