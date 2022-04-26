import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  const isAuth = (element) => {
    if (element) {
      setAuth(true);
    }
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
