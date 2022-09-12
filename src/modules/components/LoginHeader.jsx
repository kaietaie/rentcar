import React from "react";
import LoginHeaderComponent from "./LoginHeaderComponent";
import LogoutHeaderComponent from "./LogoutHeaderComponent";
import { useAuth } from "../context/AuthContext";

function LoginHeader() {
  const currentUser = useAuth();
  if (!currentUser.currentUser?.email) {
      return <LogoutHeaderComponent />
    } 

  return <LoginHeaderComponent />
}

export default LoginHeader;
