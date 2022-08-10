import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IAuthProvider {
  auth: boolean;
  setAuth: Dispatch<SetStateAction<boolean>>;
}

interface IAuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as IAuthProvider);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  // STATE VERIFICAÇÃO SE USUÁRIO ESTÁ HABILITADO PARA TROCAR SENHA:
  const [auth, setAuth] = useState(false);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
