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

  const [user_name, setUser_name] = useState("");
  const [user_surname, setUser_surname] = useState("");
  const [user_email, setUser_email] = useState("");
  const [valid_email, setValid_email] = useState(false);

  const [user_pass, setUser_pass] = useState("");
  const [valid_pass, setValid_pass] = useState(false);

  const [match_pass, setMatch_pass] = useState("");
  const [valid_match, setValid_match] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [authority, setAuthority] = React.useState("");

  const handleChange = (event) => {
    setAuthority(event.target.value);
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValid_email(EMAIL_REGEX.test(user_email));
  }, [user_email]);

  useEffect(() => {
    setValid_pass(PASS_REGEX.test(user_pass));
    setValid_match(user_pass === match_pass);
  }, [user_pass, match_pass]);

  useEffect(() => {
    setErrMsg("");
  }, [user_email, user_pass, match_pass]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        REGISTER_URL,
        JSON.stringify({ user_name, user_surname, user_email, user_pass, authority }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      //clear state and controlled inputs
      setUser_name("");
      setUser_surname("");
      setUser_email("");
      setUser_pass("");
      setMatch_pass("");
      setAuthority("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("user_name Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <main className="MainWrapper">
    <section className='form-container'>
      <p ref={errRef} className={errMsg ? "error-message" : "offscreen"}>
        {errMsg}
      </p>
      <h1>Registration</h1>
      <form className="form">
        <TextField
          required
          inputRef={userRef}
          label="Name"
          id="user_name"
          name="user_name"
          type="text"
          onChange={(e) => setUser_name(e.target.value)}
          value={user_name}
          margin="normal"
          autoComplete="off"
        />
          <TextField
          required
          inputRef={userRef}
          label="Surname"
          id="user_surname"
          name="user_surname"
          type="text"
          onChange={(e) => setUser_surname(e.target.value)}
          value={user_surname}
          margin="normal"
          autoComplete="off"
        />
        <TextField
          required
          label="Email"
          id="user_email"
          name="email"
          type="email"
          onChange={(e) => setUser_email(e.target.value)}
          value={user_email}
          margin="normal"
          autoComplete="off"
          aria-invalid={valid_email ? "false" : "true"}
        />
        <TextField
          required
          label="Password"
          type="password"
          id="password"
          onChange={(e) => setUser_pass(e.target.value)}
          value={user_pass}
          margin="normal"
          aria-invalid={valid_pass ? "false" : "true"}
        />
        <TextField
          required
          label="Repeat your password"
          type="password"
          id="confirm_pwd"
          onChange={(e) => setMatch_pass(e.target.value)}
          value={match_pass}
          margin="normal"
          aria-invalid={valid_match ? "false" : "true"}
        />
        <FormControl margin="normal" fullWidth>
          <InputLabel id="role-select-label">Role</InputLabel>
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
        {/* <button disabled={!valid_email || !valid_pass || !valid_match ? true : false}>Sign Up</button> */}
      </form>
      <p>
        Already registered?
        <br />
        <span>
          <Link to="/login">Sign In</Link>
        </span>
      </p>
    </section>
    </main>
  );
};

export default Register;
