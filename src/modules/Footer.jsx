import React from 'react';
import Button from '@mui/material/Button';

const Footer = () => {
  return (
    <div className="FooterWrapper fixed-footer" >
      <div className="PayInfo" >
        Способы оплаты:
        <br />
        <img
          className="FooterPayment"
          src="visa-logo.png"
          alt="visa"
        ></img>
        <img
          className="FooterPayment"
          src="mastercard-logo.png"
          alt="mastercard"
        ></img>
      </div>
      <div className="CallBack">
      <Button className="callback" size="midle" variant="contained">Заказать звонок</Button>
      <br />
      <br />
      <h4>Made by  Ievgenii Kaieta</h4>
      </div>
      <div
        id="contact"
        className="ContactNumbers"
      >
        Київ: +380 11 111 11 11 <br />
        Прага: +420 111 111 111
        <br />
        Братислава: +421 111 111 111
      </div>
    </div>
  );
};


export default Footer;
