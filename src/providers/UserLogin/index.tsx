import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

import bcrypt from "bcryptjs";

interface ILoginProvider {
  logged: boolean;
  setLogged: Dispatch<SetStateAction<boolean>>;
  userLogged: () => void;
  createUserToken: (elem: string) => void;
  createSuperUserToken: () => void;
}

interface ILoginProviderProps {
  children: ReactNode;
}

export const UserLoginContext = createContext({} as ILoginProvider);

export const UserLoginProvider = ({ children }: ILoginProviderProps) => {
  // STATE PARA VERIFICAR SE O USUÁRIO ESTÁ LOGADO:
  const [logged, setLogged] = useState(false);

  const userLogged = () => {
    setLogged(true);
  };

  // GERAÇÃO DE TOKEN E ALOCAÇÃO NO LOCALSTORAGE QUANDO USUÁRIO LOGA:
  const createUserToken = (elem: string) => {
    // const cryptoUserToken = bcrypt.genSaltSync(10);
    localStorage.setItem("@UserLoggedToken:cnpj", elem);
  };

  const createSuperUserToken = () => {
    const cryptoUserToken = bcrypt.genSaltSync(10);
    localStorage.setItem(
      "@token: SuperUserLoggedToken",
      JSON.stringify(cryptoUserToken)
    );
  };

  return (
    <UserLoginContext.Provider
      value={{
        logged,
        setLogged,
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
