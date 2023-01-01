import React from "react";
import useAuth from "../hooks/useAuth";
import LoginHeaderComponent from "./LoginHeaderComponent";
import LogoutHeaderComponent from "./LogoutHeaderComponent";

const LoginHeader = ({ isMobile }) => {
    const auth = useAuth()
    return (
        <div className={`${!isMobile ? 'login': ""}`}>
            {auth.auth.accessToken ? <LoginHeaderComponent /> : <LogoutHeaderComponent />}
        </div>
    );
};

export default LoginHeader;
