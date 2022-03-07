import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";

const PrivateRoute = () => {
  const { user, isLoading } = useAuth();
  const location = useLocation();
//   console.log(user);

  if(isLoading){
      return <p>Loading</p>
  }
  return user?.displayName ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
