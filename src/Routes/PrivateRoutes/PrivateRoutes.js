import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContexts } from "../../contexts/AuthProvider/AuthProvider";

const PrivetRoutes = ({ children }) => {
  const { user, loader } = useContext(AuthContexts);
  const location = useLocation();

  if (loader) {
    return (
        <div class="flex justify-center items-center">
        <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};
export default PrivetRoutes;
