import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { auth } from "../common/firebaseconfig";
import { useAuth } from "../context/AuthContext";

export default function LoginComp() {
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
      navigate("/user-page");
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
