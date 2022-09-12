import React, { useState } from "react";
import { Navigate, Outlet } from "react-router";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function ProtectedRoute() {
   const currentUser = useAuth();
   const [err, setErr] = useState("")
   const navigate = useNavigate();
   
       if (!currentUser.currentUser?.email) {
           return <Navigate to={"/login"} replace />;
    } else {
        return <Outlet/>;
        }
   
}

export default ProtectedRoute;

/*
import React from 'react'
import { useLocation, Navigate } from "react-router";
import { AuthProvider } from '../context/AuthContext';

function ProtectedRoute({chilren}) {
  const location = useLocation();
  const auth = AuthProvider.value.login || false;
  
  if( !auth )  {
      return <Navigate to='/login' />
  }
  
  return chilren
}

export default ProtectedRoute
*/
