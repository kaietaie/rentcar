import React, { useRef, useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "./api/UserAPI";

const LOGIN_URL = "/auth/login";

const LoginComp = () => {
  const { setAuth, persist, setPersist } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  //think and modify "from"
  const from = location.state?.from?.pathname || "/";

  const user_emailRef = useRef();
  const errRef = useRef();

  const [user_email, setUser_email] = useState("");
  const [user_pass, setUser_pass] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    user_emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user_email, user_pass]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user_email, user_pass }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const accessToken = response?.data?.accesstoken;
      const authority = response?.data?.authority;
      setAuth({ authority, accessToken });
      setUser_email("");
      setUser_pass("");
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

  const togglePersist = () => {
    setPersist((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("persist", persist);
  }, [persist]);

  return (
    <section className="form-container">
      <p
        ref={errRef}
        className={errMsg ? "error-message" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1>Sign In</h1>
      <form className="form">
        <TextField
          required
          inputRef={user_emailRef}
          label="Email"
          id="email"
          name="email"
          type="email"
          onChange={(e) => setUser_email(e.target.value)}
          value={user_email}
          margin="normal"
        />
        <TextField
          required
          label="Password"
          type="password"
          id="password"
          onChange={(e) => setUser_pass(e.target.value)}
          value={user_pass}
          margin="normal"
        />
        <Button
          className="form-btn"
          size="small"
          variant="contained"
          onClick={handleSubmit}
          type="submit"
        >
          Sign In
        </Button>
        <br />
        <div className="persistCheck">
          <input
            type="checkbox"
            id="persist"
            onChange={togglePersist}
            checked={persist}
          />
          <label htmlFor="persist">Remember me</label>
        </div>
        <br />
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
