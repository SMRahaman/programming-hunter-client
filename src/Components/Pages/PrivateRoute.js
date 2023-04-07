import { useContext } from "react";
import { userContext } from "../Share_Component/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(userContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="spinner-grow d-flex align-items-center" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
