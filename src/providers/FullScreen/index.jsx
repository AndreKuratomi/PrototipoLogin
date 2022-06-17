import { createContext, useContext, useState } from "react";

export const FullScreenContext = createContext();

export const FullScreenProvider = ({ children }) => {
  // STATE PARA DEFINIR TELA CHEIA:
  const [fullScreen, setFullScreen] = useState(false);

  // FUNÇÕES PARA ATIVAR E DESATIVAR FULLSCREEN:
  const activateFullscreen = (elem) => {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
      //Safari:
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
      //IE11:
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  };
  const unActivateFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      //Safari:
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
      //IE11:
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  const openFullScreen = (elem) => {
    setFullScreen(true);
    activateFullscreen(elem);
  };

  const closeFullScreen = () => {
    setFullScreen(false);
    unActivateFullscreen();
  };

  return (
    <FullScreenContext.Provider
      value={{
        fullScreen,
        setFullScreen,
        openFullScreen,
        closeFullScreen,
      }}
    >
      {children}
    </FullScreenContext.Provider>
  );
};

export const useFullScreen = () => useContext(FullScreenContext);
