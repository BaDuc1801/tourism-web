import { createContext, useEffect, useState } from "react";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const isLogined = localStorage.getItem("isAuthenticated");
  const [isAuthenticated, setIsAuthenticated] = useState(!!isLogined);

  useEffect(() => {
    const isLogined = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(!!isLogined);
  }, [isLogined]);

  const value = {
    isAuthenticated,
    setIsAuthenticated,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };