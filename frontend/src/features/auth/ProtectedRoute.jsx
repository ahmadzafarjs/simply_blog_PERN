import { Navigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

export default function ProtectedRoute({ children, ...rest }) { 
    const { isLogged } = useUser();
    return isLogged ? children : <Navigate to="/login" />;
    }