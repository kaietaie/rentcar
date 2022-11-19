import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
// import { useAuth } from "../../context/AuthContext";
import { getAuth, signOut } from "firebase/auth";

function LoginHeaderComponent() {
  // const [error, setError] = useState("");
  const navigate = useNavigate();
  // const logout = useAuth();
  const go = () => navigate("/user-page");
 
  const auth = getAuth();
  const handlerLogut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // setError("Failed to log out");
        console.log(error);
      });
  };

  return (
    <>
      <Button
        size="small"
        variant="contained"
        style={{ marginBottom: "15px" }}
        onClick={go}
      >
        Личный кабинет
      </Button>
      <br />
      <Button size="small" variant="contained" onClick={handlerLogut}>
        Выйти
      </Button>
    </>
  );
}

export default LoginHeaderComponent;
