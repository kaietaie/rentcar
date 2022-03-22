import React from 'react';
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { signOut } from "firebase/auth";
import Client from "../pages/Client";
import Main from "../pages/Main";

function LoginHeader() {
  return (
    <>
    {/* {LoginComp.user.email} */}
    
    <Button size="small" variant="contained" style={{"marginBottom":"15px"}}>
      <Link to="/userPage" element={<Client />}>
        Личный кабинет
      </Link>
    </Button> <br/>
    <Button size="small" variant="contained">
      <Link to="/" onClick={() => signOut()} element={<Main />}>
        Выйти
      </Link>
    </Button>
  </>
  )
}

export default LoginHeader

