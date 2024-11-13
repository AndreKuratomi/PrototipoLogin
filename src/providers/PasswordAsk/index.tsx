import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

import cryptoRandomString from "crypto-random-string";

interface IAskProvider {
  createAuth: () => void;
  LoadPage: () => void;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

interface IAskProviderProps {
  children: ReactNode;
}

export const PasswordAskContext = createContext({} as IAskProvider);

export const PasswordAskProvider = ({ children }: IAskProviderProps) => {
  // STATE PARA PROCESSAMENTO INFORMAÇÕES FORMULÁRIO:
  const [loading, setLoading] = useState(false);

  const LoadPage = () => {
    setLoading(true);
  };

  // GERAÇÂO DE 'TOKEN' E ALOCAÇÃO NO LOCALSTORAGE:
  const createAuth = () => {
    const cryptoken = cryptoRandomString({ length: 20 });
    localStorage.setItem("@token: NewEmailToken", JSON.stringify(cryptoken));
  };

  return (
    <PasswordAskContext.Provider
      value={{ createAuth, loading, setLoading, LoadPage }}
    >
      {children}
    </PasswordAskContext.Provider>
  );
};

export const usePasswordAsk = () => useContext(PasswordAskContext);
