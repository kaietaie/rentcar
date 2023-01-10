import { Button } from "@mui/material";
import { useRef, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "./api/UserAPI";

const LOGIN_URL = "/auth/login";

const Login = () => {
  const { setAuth, persist, setPersist } = useAuth();

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
    e.preventDefault();
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

  const togglePersist = ()=> {
    setPersist( prev => !prev)
  }

  useEffect( ()=> {
    localStorage.setItem("persist", persist)
  }, [persist])
  
  return (
    <section>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1>Sign In</h1>
      <form>
        <label htmlFor="userEmail">Email:</label>
        <input
          type="text"
          id="userEmail"
          ref={userEmailRef}
          autoComplete="off"
          onChange={(e) => setUserEmail(e.target.value)}
          value={userEmail}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setUserPass(e.target.value)}
          value={userPass}
          required
        />
        <br />
        <Button
          size="small"
          variant="contained"
          style={{ marginBottom: "15px" }}
          onClick={handleSubmit}
        >
          Sign In
        </Button>
        <br />
        <div className="persistCheck">
          <input type="checkbox"
          id="persist"
          onChange={togglePersist}
          checked={persist} />
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

export default Login;
