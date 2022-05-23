import { createContext, useContext, useState } from "react";

import bcrypt from "bcryptjs";

export const UserLoginContext = createContext();

export const UserLoginProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);

  const userLogged = () => {
    setLogged(true);
  };

  const createUserToken = () => {
    const cryptoUserToken = bcrypt.genSaltSync(10);
    localStorage.setItem(
      "@token: UserLoggedToken",
      JSON.stringify(cryptoUserToken)
    );
  };

  //   const navigate = useNavigate();

  return (
    <UserLoginContext.Provider
      value={{ logged, setLogged, userLogged, createUserToken }}
    >
      {children}
    </UserLoginContext.Provider>
  );
};

export const useUserLogin = () => useContext(UserLoginContext);
