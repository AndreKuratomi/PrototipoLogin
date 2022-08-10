import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IPasswordVisibilityProvider {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  userVisible: Dispatch<SetStateAction<boolean>>;
  userUnvisible: Dispatch<SetStateAction<boolean>>;
  visible1: boolean;
  setVisible1: Dispatch<SetStateAction<boolean>>;
  userVisible1: Dispatch<SetStateAction<boolean>>;
  userUnvisible1: Dispatch<SetStateAction<boolean>>;
  visible2: boolean;
  setVisible2: Dispatch<SetStateAction<boolean>>;
  userVisible2: Dispatch<SetStateAction<boolean>>;
  userUnvisible2: Dispatch<SetStateAction<boolean>>;
  visible3: boolean;
  setVisible3: Dispatch<SetStateAction<boolean>>;
  userVisible3: Dispatch<SetStateAction<boolean>>;
  userUnvisible3: Dispatch<SetStateAction<boolean>>;
}

interface IPasswordVisibilityProviderProps {
  children: ReactNode;
}

export const PasswordVisibleContext = createContext(
  {} as IPasswordVisibilityProvider
);

export const PasswordVisibleProvider = ({
  children,
}: IPasswordVisibilityProviderProps) => {
  // STATE PARA VERIFICAR SE A SENHA ESTÁ VISÍVEL:
  const [visible, setVisible] = useState(false);

  const userVisible = () => {
    setVisible(true);
  };

  const userUnvisible = () => {
    setVisible(false);
  };

  const [visible1, setVisible1] = useState(false);

  const userVisible1 = () => {
    setVisible1(true);
  };

  const userUnvisible1 = () => {
    setVisible1(false);
  };
  const [visible2, setVisible2] = useState(false);

  const userVisible2 = () => {
    setVisible2(true);
  };

  const userUnvisible2 = () => {
    setVisible2(false);
  };
  const [visible3, setVisible3] = useState(false);

  const userVisible3 = () => {
    setVisible3(true);
  };

  const userUnvisible3 = () => {
    setVisible3(false);
  };
  return (
    <PasswordVisibleContext.Provider
      value={{
        visible,
        setVisible,
        userVisible,
        userUnvisible,
        visible1,
        setVisible1,
        userVisible1,
        userUnvisible1,
        visible2,
        setVisible2,
        userVisible2,
        userUnvisible2,
        visible3,
        setVisible3,
        userVisible3,
        userUnvisible3,
      }}
    >
      {children}
    </PasswordVisibleContext.Provider>
  );
};

export const usePasswordVisible = () => useContext(PasswordVisibleContext);
