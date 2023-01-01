import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import useAuth from "../hooks/useAuth";
import AuthContext from "../../context/AuthProvider";
import axios from "./api/UserAPI.js";

function LoginHeaderComponent() {
  const { setAuth } = useContext(AuthContext);
  const auth = useAuth();
  const navigate = useNavigate();
  const go = () => {
    if (auth.auth.authority[0] === "5150") {
      navigate("/admin-panel");
    } else if (auth.auth.authority[0] === "2001") {
      navigate("/user-page");
    } else if (auth.auth.authority[0] === "1984") {
      navigate("/holder-page");
    }
  };
  const buttonValue = () => {
    if (auth.auth.authority[0] === "5150") {
      return "Admin page"
    } else if (auth.auth.authority[0] === "2001") {
      return "User page"
    } else if (auth.auth.authority[0] === "1984") {
      return "Holder page"
    }
  }
  const handlerLogOut = async () => {
    await axios.get("/logout");
    setAuth({})
    navigate("/");
  };

  return (
    <>
      <Button
        size="small"
        variant="contained"
        style={{ marginBottom: "15px" }}
        onClick={go}
      >
        {buttonValue()}
      </Button>
      <br />

      <Button size="small" variant="contained" onClick={handlerLogOut}>
        Sign Out
      </Button>
    </>
  );
}

export default LoginHeaderComponent;
