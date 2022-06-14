import { createContext, useContext, useState } from "react";

export const FullScreenContext = createContext();

export const FullScrenProvider = ({ children }) => {
  // STATE PARA DEFINIR TELA CHEIA:
  const [fullScreen, setFullScreen] = useState(false);
  const allowFullScreen = () => {
    setFullScreen(true);
  };

  return (
    <FullScreenContext.Provider
      value={{ fullScreen, setFullScreen, allowFullScreen }}
    >
      {children}
    </FullScreenContext.Provider>
  );
};

export const useFullScreen = () => useContext(FullScreenContext);
