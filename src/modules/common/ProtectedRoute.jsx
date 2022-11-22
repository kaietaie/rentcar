import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute() {
  const currentUser = useAuth();

  if (!currentUser.currentUser?.email) {
    return <Navigate to={"/login"} replace />;
  } else {
    return <Outlet />;
  }
}

export default ProtectedRoute;
