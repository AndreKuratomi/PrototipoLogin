import { createContext, useContext, useState } from "react";

import bcrypt from "bcryptjs";

export const UserLoginContext = createContext();

export const UserLoginProvider = ({ children }) => {
  // STATE PARA VERIFICAR SE O USUÁRIO ESTÁ LOGADO:
  const [logged, setLogged] = useState(false);

  const userLogged = () => {
    setLogged(true);
  };

  // GERAÇÃO DE TOKEN E ALOCAÇÃO NO LOCALSTORAGE QUANDO USUÁRIO LOGA:
  const createUserToken = () => {
    const cryptoUserToken = bcrypt.genSaltSync(10);
    localStorage.setItem(
      "@token: UserLoggedToken",
      JSON.stringify(cryptoUserToken)
    );
  };

  return (
    <UserLoginContext.Provider
      value={{ logged, setLogged, userLogged, createUserToken }}
    >
      {children}
    </UserLoginContext.Provider>
  );
};

export const useUserLogin = () => useContext(UserLoginContext);
