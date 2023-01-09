import React, { useRef, useState, useEffect } from "react";
import axios from "../components/api/UserAPI";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";

const authorityList = {
  "Admin": 5150,
  "Holder": 1984,
  "User": 2001
}

const EMAIL_REGEX = /^[A-z][@.][A-z0-9-_]{4,23}$/;
const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/auth/registration";

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/user-page";

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [userPass, setUserPass] = useState("");
  const [validPass, setValidPass] = useState(false);

  const [matchPass, setMatchPass] = useState("");
  const [validMatch, setValidMatch] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [authority, setAuthority] = React.useState("");

  const handleChange = (event) => {
    setAuthority(event.target.value);
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(userEmail));
  }, [userEmail]);

  useEffect(() => {
    setValidPass(PASS_REGEX.test(userPass));
    setValidMatch(userPass === matchPass);
  }, [userPass, matchPass]);

  useEffect(() => {
    setErrMsg("");
  }, [userEmail, userPass, matchPass]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        REGISTER_URL,
        JSON.stringify({ userName, userEmail, userPass, authority }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      //clear state and controlled inputs
      setUserName("");
      setUserEmail("");
      setUserPass("");
      setMatchPass("");
      setAuthority("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <section className='form-container'>
      <p ref={errRef} className={errMsg ? "error-message" : "offscreen"}>
        {errMsg}
      </p>
      <h1>Register</h1>
      <form className="form">
        <TextField
          required
          inputRef={userRef}
          label="Ім'я"
          id="userName"
          name="userName"
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          margin="normal"
          autoComplete="off"
        />
        <TextField
          required
          label="Ел. пошта"
          id="userEmail"
          name="email"
          type="email"
          onChange={(e) => setUserEmail(e.target.value)}
          value={userEmail}
          margin="normal"
          autoComplete="off"
          aria-invalid={validEmail ? "false" : "true"}
        />
        <TextField
          required
          label="Пароль"
          type="password"
          id="password"
          onChange={(e) => setUserPass(e.target.value)}
          value={userPass}
          margin="normal"
          aria-invalid={validPass ? "false" : "true"}
        />
        <TextField
          required
          label="Підтвердіть пароль"
          type="password"
          id="confirm_pwd"
          onChange={(e) => setMatchPass(e.target.value)}
          value={matchPass}
          margin="normal"
          aria-invalid={validMatch ? "false" : "true"}
        />
        <FormControl margin="normal" fullWidth>
          <InputLabel id="role-select-label">Роль</InputLabel>
          <Select
            labelId="role-select-label"
            id="role-select-label"
            value={authority}
            label="Роль"
            onChange={handleChange}
            required
          >
            <MenuItem value={authorityList.Admin}>Admin</MenuItem>
            <MenuItem value={authorityList.Holder}>Holder</MenuItem>
            <MenuItem value={authorityList.User}>User</MenuItem>
          </Select>
        </FormControl>
        <Button
          type="submit"
          className="form-btn"
          size="small"
          variant="contained"
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
        {/* <button disabled={!validEmail || !validPass || !validMatch ? true : false}>Sign Up</button> */}
      </form>
      <p>
        Already registered?
        <br />
        <span>
          <Link to="/login">Sign In</Link>
        </span>
      </p>
    </section>
  );
};

export default Register;
