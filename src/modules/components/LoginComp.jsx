import React, { useRef, useState, useEffect } from "react";
import {Button, TextField} from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "./api/UserAPI";

import './LoginComp.sass'

const LOGIN_URL = "/auth/login";

const LoginComp = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  //think and modify "from"
  const from = location.state?.from?.pathname || "/";

  const userEmailRef = useRef();
  const errRef = useRef();

  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userEmailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [userEmail, userPass]);

  const handleSubmit = async (e) => {
    console.log({ userEmail, userPass })
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ userEmail, userPass }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const accessToken = response?.data?.actoken;
      const authority = response?.data?.authority;
      setAuth({ authority, accessToken });
      setUserEmail("");
      setUserPass("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing email or password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <section className='form'>
      <p
        ref={errRef}
        className={errMsg ? "error-message" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1>Sign In</h1>
      <form className="sign-in-form">
        <TextField
          required
          inputRef={userEmailRef}
          label="Ел. пошта"
          id="email"
          name="email"
          type="email"
          onChange={(e) => setUserEmail(e.target.value)}
          value={userEmail}
          margin="normal"
        />
        <TextField
          required
          label="Пароль"
          type="password"
          id="password"
          onChange={(e) => setUserPass(e.target.value)}
          value={userPass}
          margin="normal"
        />
        <Button
          className="sign-in-btn"
          size="small"
          variant="contained"
          onClick={handleSubmit}
          type="submit"
        >
          Sign In
        </Button>
      </form>
      <p>
        Need an Account?
        <br />
        <span className="line">
          <Link to="/registration">Sign Up</Link>
        </span>
      </p>
    </section>
  );
};

export default LoginComp;
