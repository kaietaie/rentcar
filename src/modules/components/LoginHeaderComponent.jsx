import React, {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import AuthContext from "../../context/AuthProvider";
import axios from "./api/UserAPI.js";

function LoginHeaderComponent(auth) {
  const {setAuth, setPersist} = useContext(AuthContext);
  const [buttonValue, setButtonValue] = useState('')
  const navigate = useNavigate();
  const go = () => {
    if (auth.authentication.authority[0] === 5150) {
      navigate("/admin-panel");
    } else if (auth.authentication.authority[0] === 2001) {
      navigate("/user-page");
    } else if (auth.authentication.authority[0] === 1984) {
      navigate("/holder-page");
    }
  };

  useEffect(() => {
    if (auth.authentication.authority[0] === 5150) {
      return setButtonValue("Admin page");
    } else if (auth.authentication.authority[0] === 2001) {
      return setButtonValue("User page");
    } else if (auth.authentication.authority[0] === 1984) {
      return setButtonValue("Holder page");
    }
  }, [])

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
        style={{marginBottom: "15px"}}
        onClick={go}
      >
        {buttonValue}
      </Button>
      <br/>

      <Button size="small" variant="contained" onClick={handlerLogOut}>
        Sign Out
      </Button>
    </>
  );
}

export default LoginHeaderComponent;
