import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

import bcrypt from "bcryptjs";
import api from "src/service/api";

interface ILoginProvider {
  logged: boolean;
  setLogged: Dispatch<SetStateAction<boolean>>;
  loggedCNPJ: boolean;
  setLoggedCNPJ: Dispatch<SetStateAction<boolean>>;
  allowUser: () => void;
  userLogged: () => void;
  createUserToken: (elem: string) => void;
  createSuperUserToken: (elem: string) => void;
}

interface ILoginProviderProps {
  children: ReactNode;
}

export const UserLoginContext = createContext({} as ILoginProvider);

export const UserLoginProvider = ({ children }: ILoginProviderProps) => {
  // STATE PARA VERIFICAR SE O USUÁRIO ESTÁ LOGADO:
  const [logged, setLogged] = useState(false);

  // STATE PARA VERIFICAR SE O USUÁRIO FEZ PEDIDO DE ALTERAÇÃO DE SENHA POR STATE:
  const [loggedCNPJ, setLoggedCNPJ] = useState(false);

  const allowUser = () => {
    setLoggedCNPJ(true);
  };
  console.log(loggedCNPJ);

  const userLogged = () => {
    setLogged(true);
  };

  // GERAÇÃO DE TOKEN E ALOCAÇÃO NO LOCALSTORAGE QUANDO USUÁRIO LOGA:
  const createUserToken = (elem: string) => {
    // const cryptoUserToken = bcrypt.genSaltSync(10);
    localStorage.setItem("@UserLoggedToken:cnpj", elem);
  };

  const createSuperUserToken = (elem: string) => {
    console.log(elem);
    // const cryptoUserToken = bcrypt.genSaltSync(10);
    localStorage.setItem("@SuperUserLoggedToken:cnpj", elem);
  };

  return (
    <UserLoginContext.Provider
      value={{
        logged,
        setLogged,
        loggedCNPJ,
        setLoggedCNPJ,
        allowUser,
        userLogged,
        createUserToken,
        createSuperUserToken,
      }}
    >
      {children}
    </UserLoginContext.Provider>
  );
};

export const useUserLogin = () => useContext(UserLoginContext);
