import React, { useContext, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import AuthContext from "../../context/AuthProvider";
import axios from "./api/UserAPI.js";
import Go from "./Go";

function LoginHeaderComponent(auth) {
  const { setAuth, setPersist } = useContext(AuthContext);
  const navigate = useNavigate();
  const [buttonValue, setButtonValue ] = useState ( "" )
  console.log(auth.authentication.authority[0])
  let authority = auth.authentication?.authority[0];
  const go = () => {
    return Go(authority)
  }
    useLayoutEffect( () => {
    if (authority === 5150) {
      return setButtonValue("Admin page");
    } else if (authority === 2001) {
      return setButtonValue("User page");
    } else if (authority === 1984) {
      return setButtonValue("Holder page");
    }   
  },[authority] );
  const handlerLogOut = async () => {
    try {
      await axios("/logout", {
        withCredentials: true,
      });
    } catch (err) {
      console.error(err);
    }
    setAuth({});
    setPersist(false);
    navigate("/");
  };

  return (
    <>
      <Button
        size="small"
        variant="contained"
        style={{ marginBottom: "15px" }}
        onClick={ go }
      >
        {buttonValue}
      </Button>
      <br />

      <Button size="small" variant="contained" onClick={handlerLogOut}>
        Sign Out
      </Button>
    </>
  );
}

export default LoginHeaderComponent;
