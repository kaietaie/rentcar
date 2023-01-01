import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Login from "../pages/Login";

function LogoutHeaderComponent() {
  return (
    <>
      Login
      <br />
      <Button size="small" variant="contained">
        <Link to="/login" element={<Login />}>
          Sign In
        </Link>
      </Button>
    </>
  );
}

export default LogoutHeaderComponent;
