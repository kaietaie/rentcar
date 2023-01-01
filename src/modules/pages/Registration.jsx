import { useRef, useState, useEffect } from "react";
import axios from "../components/api/UserAPI";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

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
        JSON.stringify({ userName, userEmail, userPass }),
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
    <section>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
        {errMsg}
      </p>
      <h1>Register</h1>
      <form>
        <label htmlFor="userName">User name:</label>
        <input
          type="text"
          id="userName"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          required
        />
        <br />
        <label htmlFor="userEmail">User email:</label>
        <input
          type="email"
          id="userEmail"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUserEmail(e.target.value)}
          value={userEmail}
          aria-invalid={validEmail ? "false" : "true"}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setUserPass(e.target.value)}
          value={userPass}
          aria-invalid={validPass ? "false" : "true"}
          required
        />
        <br />
        <label htmlFor="confirm_pwd">Confirm Password:</label>
        <input
          type="password"
          id="confirm_pwd"
          onChange={(e) => setMatchPass(e.target.value)}
          value={matchPass}
          aria-invalid={validMatch ? "false" : "true"}
          required
        />
        <br />
        <Button
          size="small"
          variant="contained"
          style={{ marginBottom: "15px" }}
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
