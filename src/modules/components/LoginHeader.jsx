import React from "react";
import LoginHeaderComponent from "./LoginHeaderComponent";
import LogoutHeaderComponent from "./LogoutHeaderComponent";
import { useAuth } from "../context/AuthContext";

export default function LoginHeader() {
  const currentUser = useAuth();
  if (!currentUser.currentUser?.email) {
      return <LogoutHeaderComponent />
    } 

  return <LoginHeaderComponent />
}
