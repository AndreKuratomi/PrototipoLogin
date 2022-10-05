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
  loggedCNPJ: string;
  setLoggedCNPJ: Dispatch<SetStateAction<string>>;
  getDataByEmail: (email: string) => void;
  userLogged: () => void;
  createUserToken: () => void;
}

interface ILoginProviderProps {
  children: ReactNode;
}

export const UserLoginContext = createContext({} as ILoginProvider);

export const UserLoginProvider = ({ children }: ILoginProviderProps) => {
  // STATE PARA VERIFICAR SE O USUÁRIO ESTÁ LOGADO:
  const [logged, setLogged] = useState(false);

  // STATE PARA VERIFICAR SE O USUÁRIO FEZ PEDIDO DE ALTERAÇÃO DE SENHA POR STATE:
  const [loggedCNPJ, setLoggedCNPJ] = useState("");

  // API:
  const getDataByEmail = (email: string) => {
    api
      .get(`ask/${email}`)
      .then((response) => {
        setLoggedCNPJ(response.data.cnpj);
        console.log("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
      value={{
        logged,
        setLogged,
        loggedCNPJ,
        setLoggedCNPJ,
        getDataByEmail,
        userLogged,
        createUserToken,
        // createSuperUserToken,
      }}
    >
      {children}
    </UserLoginContext.Provider>
  );
};

export const useUserLogin = () => useContext(UserLoginContext);
