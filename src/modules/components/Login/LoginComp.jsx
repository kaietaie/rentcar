import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { auth } from "../../common/firebaseconfig";
// import { AuthProvider } from "../../context/AuthContext"; - not worked

export default function LoginComp() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [user, setUser] = useState();

  let navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    try {
      setUser(currentUser);
      
    } catch (error) {
      throw error
    }
    
  });

  const register = 
  // AuthProvider.signup(loginEmail, loginPass) - not worked
  async () => {
    try {
      await createUserWithEmailAndPassword(auth, loginEmail, loginPass);
      await sendEmailVerification();
      navigate("/user-page");
    } catch (error) {
      console.error(error.message);
    }
  };
  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPass);
      navigate("/user-page");
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <>
      <input
      placeholder="Name..."
      type="name"
      id="name"
    />
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
