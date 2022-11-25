import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Main from './pages/Main';
import Autopark from './pages/Autopark';
import { Link } from 'react-router-dom';
import Terms from './pages/Terms';
import Feedback from './pages/Feedback';
import Advices from './pages/Advices';
import Contacts from './pages/Contacts';
import LoginHeader from './components/LoginHeader';
import MenuIcon from '@mui/icons-material/Menu';
import {
    Hidden,
    IconButton,
    SwipeableDrawer,
    Divider,
    List,
    ListItem
} from "@mui/material";
import {ChevronRight} from "@mui/icons-material";

import './Header.sass'

const Header = () => {
const [open, setOpen] = useState(false);

  return (
    <header>
        <Hidden smDown>
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
              <Button size="small" variant="contained">
              Оформить заказ
              </Button>
            </div>
            <div className="contactInfo">
              Київ: +380 11 111 11 11 <br />
              Прага: +420 111 111 111 <br />
              Братислава: +421 111 111 111
            </div>
            <LoginHeader/>
          </div>
          </div>
            {/*<AppBar>*/}
            {/*  <Toolbar>*/}
            {/*    <Link color="textPrimary" component="button" variant="body1" to='/' element={<Main />}>Главная</Link>*/}
            {/*    /!*<Link color="textPrimary" variant="button" className={styles.link} to='/autopark' element={<Autopark />}>Автопарк</Link>*!/*/}
            {/*    /!*<Link color="textPrimary" variant="button" className={styles.link} to='/terms' element={<Terms />}>Условия</Link>*!/*/}
            {/*    /!*<Link color="textPrimary" variant="button" className={styles.link} to='/feedback' element={<Feedback />}>Отзывы</Link>*!/*/}
            {/*    /!*<Link color="textPrimary" variant="button" className={styles.link} to='/advices' element={<Advices />}>Советы</Link>*!/*/}
            {/*    /!*<Link color="textPrimary" variant="button" className={styles.link} to='/contacts' element={<Contacts />}>Контакты</Link>*!/*/}
            {/*  </Toolbar>*/}
            {/*</AppBar>*/}
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
        </Hidden>
        <Hidden mdUp>
            <IconButton className="header-burger">
                <MenuIcon onClick={() => setOpen(true)}/>
            </IconButton>
        </Hidden>
        <SwipeableDrawer anchor="right" open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
            <div>
                <IconButton>
                    <ChevronRight onClick={() => setOpen(false)}/>
                </IconButton>
            </div>
            <Divider/>
            <List>
                <ListItem>
                    <LoginHeader isMobile/>
                </ListItem>
                <Divider/>
                <ListItem>
                    <Button size="small" variant="contained">
                        Оформить заказ
                    </Button>
                </ListItem>
            </List>
            <Divider/>
            <List className='menuList--mobile'>
                <ListItem><Link to='/' element={<Main />}>Главная</Link></ListItem>
                <ListItem><Link to='/autopark' element={<Autopark />}>Автопарк</Link></ListItem>
                <ListItem><Link to='/terms' element={<Terms />}>Условия</Link></ListItem>
                <ListItem><Link to='/feedback' element={<Feedback />}>Отзывы</Link></ListItem>
                <ListItem><Link to='/advices' element={<Advices />}>Советы</Link></ListItem>
                <ListItem><Link to='/contacts' element={<Contacts />}>Контакты</Link></ListItem>
            </List>
            <Divider/>
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
