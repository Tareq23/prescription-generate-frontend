import React, { createContext, useState, useEffect, useContext } from "react";
import { signIn, signUp, logout } from "../services/AuthService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('p-gen-auth-token'));

  useEffect(() => {
    const _token = localStorage.getItem("p-gen-auth-token");
    if (_token) {
      setToken({ _token }); 
    }
  }, []);

  const handleSignIn = async (credentials) => {
    const data = await signIn(credentials);
    setToken(data.token); 
  };

  const handleSignUp = async (userData) => {
    const data = await signUp(userData);
    setToken(data.token); 
    return data;
  };

  const handleLogout = () => {
    logout();
    setToken(null);
  };
  
  const isLogin = !!token;
  return (
    <AuthContext.Provider value={{ token, handleSignIn, handleSignUp, handleLogout, isLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
