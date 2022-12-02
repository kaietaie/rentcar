import React from "react";
import LoginHeaderComponent from "./LoginHeaderComponent";
import LogoutHeaderComponent from "./LogoutHeaderComponent";
import { useAuth } from "../context/AuthContext";

<<<<<<< HEAD
export default function LoginHeader() {
  const currentUser = useAuth();
  if (!currentUser.currentUser?.email) {
      return <LogoutHeaderComponent />
    } 
=======
const LoginHeader = ({ isMobile }) => {
    const currentUser = useAuth();
>>>>>>> CAR-20-adaptive-header-and-main-page

    return (
        <div className={`${!isMobile ? 'login': ""}`}>
            {currentUser.currentUser?.email ? <LoginHeaderComponent /> : <LogoutHeaderComponent />}
        </div>
    );
};

