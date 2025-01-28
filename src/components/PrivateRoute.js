import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";



const PrivateRoute = ({ children }) => {
  const { isLogin } = useAuth();
  return isLogin ? children : <Navigate to="/auth/login" />;
};

export default PrivateRoute;

