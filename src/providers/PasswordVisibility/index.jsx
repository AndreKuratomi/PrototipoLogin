import { createContext, useContext, useState } from "react";

export const PasswordVisibleContext = createContext();

export const PasswordVisibleProvider = ({ children }) => {
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
    setVisible(false);
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
