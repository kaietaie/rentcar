import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ allowedAuthority }) => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.authority ? (
    allowedAuthority.some((authority) => authority === auth?.authority[0]) ? (
      <Outlet />
    ) : (
      <Navigate to="unauthorized" state={{ from: location }} replace />
    )
  ) : (
    <Navigate to="login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
