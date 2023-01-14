import React, {useState} from "react";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import {Divider, Hidden, IconButton, List, ListItem, SwipeableDrawer,} from "@mui/material";
import {ChevronRight} from "@mui/icons-material";
import LoginHeader from "./components/LoginHeader";
import useAuth from "./hooks/useAuth";
import Menu from "./components/menu/Menu.jsx";
import MobileMenuList from "./components/menu/MobileMenuList.jsx";
import "./Header.sass";

const Header = () => {
  const [open, setOpen] = useState(false);
  const auth = useAuth();
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
            <LoginHeader auth={auth}/>
          </div>
        </div>
        <Menu />
      </Hidden>
      <Hidden smUp>
        <IconButton onClick={() => setOpen(true)} className="header-burger">
          <MenuIcon />
        </IconButton>
      </Hidden>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <div>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronRight />
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
          <MobileMenuList/>
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
