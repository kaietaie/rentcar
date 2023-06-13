import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ allowedAuthority }) => {
  const { auth } = useAuth();
  const location = useLocation();
  return  auth?.authority 
    ? allowedAuthority.some((allAu) => auth.authority.includes(allAu)) 
    ? <Outlet />  
    : <Navigate to="unauthorized" state={{ from: location }} replace />
    : <Navigate to="login" state={{ from: location }} replace />
    
  };
  
  export default ProtectedRoute;
//   return (
//     auth?.authority.find(role => allowedAuthority?.includes(role))
//         ? <Outlet />
//         : auth?.accessToken //changed from user to accessToken to persist login after refresh
//             ? <Navigate to="/unauthorized" state={{ from: location }} replace />
//             : <Navigate to="/login" state={{ from: location }} replace />
// );
//   }
