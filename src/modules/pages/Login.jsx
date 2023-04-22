import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import LoginComp from '../components/LoginComp';

export default function Login() {
  return (
    <div className="wrapper">
      <main className="MainWrapper">
        <LoginComp />
      </main>
    </div>
  );
}
