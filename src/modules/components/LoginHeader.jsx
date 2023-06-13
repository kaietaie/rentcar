import React from "react";
import LoginHeaderComponent from "./LoginHeaderComponent";
import LogoutHeaderComponent from "./LogoutHeaderComponent";

const LoginHeader = (auth, {isMobile}) => {

  return (
    <div className={`${!isMobile ? 'login' : ""}`}>
      {auth?.auth.auth.accessToken ? <LoginHeaderComponent authentication={auth?.auth.auth}/> :
        <LogoutHeaderComponent/>}
    </div>
  );
};

export default LoginHeader;
