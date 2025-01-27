import React, { createContext, useState, useEffect, useContext } from "react";
import { signIn, signUp, logout } from "../services/AuthService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const _token = localStorage.getItem("p-gen-auth-token");
    if (_token) {
      setToken({ _token }); 
    }
  }, []);

  const handleSignIn = async (credentials) => {
    const data = await signIn(credentials);
    setToken(data.user); 
  };

  const handleSignUp = async (userData) => {
    const data = await signUp(userData);
    return data;
  };

  const isLogin = () => {
     return token == null ? false : true;
  };

  const handleLogout = () => {
    logout();
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, handleSignIn, handleSignUp, handleLogout, isLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
