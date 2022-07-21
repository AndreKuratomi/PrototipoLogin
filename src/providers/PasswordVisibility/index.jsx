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

  return (
    <PasswordVisibleContext.Provider
      value={{ visible, setVisible, userVisible, userUnvisible }}
    >
      {children}
    </PasswordVisibleContext.Provider>
  );
};

export const usePasswordVisible = () => useContext(PasswordVisibleContext);
