import { createContext, useContext, useState } from "react";

export const FullScreenContext = createContext();

export const FullScreenProvider = ({ children }) => {
  // STATE PARA DEFINIR TELA CHEIA:
  const [fullScreen, setFullScreen] = useState(false);

  const openFullScreen = () => {
    setFullScreen(true);
  };

  const closeFullScreen = () => {
    setFullScreen(false);
  };

  return (
    <FullScreenContext.Provider
      value={{ fullScreen, setFullScreen, openFullScreen, closeFullScreen }}
    >
      {children}
    </FullScreenContext.Provider>
  );
};

export const useFullScreen = () => useContext(FullScreenContext);
