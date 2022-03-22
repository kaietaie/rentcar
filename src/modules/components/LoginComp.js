import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { auth } from "../common/firebaseconfig";

function LoginComp() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [user, setUser] = useState({});

  let navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      user = await createUserWithEmailAndPassword(auth, loginEmail, loginPass);
      console.log(user);
    } catch (error) {
      console.error(error.message);
    }
  };
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPass
      );
      navigate("/userPage");
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <>
      <input
        placeholder="Email..."
        type="email"
        onChange={(ev) => {
          setLoginEmail(ev.target.value);
        }}
        required
      />
      <input
        placeholder="Password..."
        type="password"
        onChange={(ev) => {
          setLoginPass(ev.target.value);
        }}
        required
      />

      <Button className="w-100 mt-4" onClick={login}>
        Login
      </Button>
      <Button className="w-100 mt-4" onClick={register}>
        Restristration
      </Button>
    </>
  );
}

export default LoginComp;
