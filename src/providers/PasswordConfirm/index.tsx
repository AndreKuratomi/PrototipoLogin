import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IConfirmProvider {
  loading: boolean;
  LoadPage: () => void;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

interface IConfirmProviderProps {
  children: ReactNode;
}

export const PasswordConfirmContext = createContext({} as IConfirmProvider);

export const PasswordConfirmProvider = ({
  children,
}: IConfirmProviderProps) => {
  // STATE PARA PROCESSAMENTO INFORMAÇÕES FORMULÁRIO:
  const [loading, setLoading] = useState(false);

  const LoadPage = () => {
    setLoading(true);
  };

  return (
    <PasswordConfirmContext.Provider value={{ LoadPage, loading, setLoading }}>
      {children}
    </PasswordConfirmContext.Provider>
  );
};

export const usePasswordConfirm = () => useContext(PasswordConfirmContext);
