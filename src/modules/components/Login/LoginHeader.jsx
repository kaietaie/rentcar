import React from "react";
import LoginHeaderComponent from "./LoginHeaderComponent";
import LogoutHeaderComponent from "./LogoutHeaderComponent";
import { useAuth } from "../../context/AuthContext";

const LoginHeader = ({ isMobile }) => {
    const currentUser = useAuth();

    return (
        <div className={`${!isMobile ? 'login': ""}`}>
            {currentUser.currentUser?.email ? <LoginHeaderComponent /> : <LogoutHeaderComponent />}
        </div>
    );
};

export default LoginHeader;
