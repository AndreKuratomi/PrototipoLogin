import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IFullScreenProvider {
  fullScreen: boolean;
  setFullScreen: Dispatch<SetStateAction<boolean>>;
  openFullScreen: (elem: any) => void;
  closeFullScreen: (elem: any) => void;
}

interface IFullScreenProviderProps {
  children: ReactNode;
}

export const FullScreenContext = createContext({} as IFullScreenProvider);

export const FullScreenProvider = ({ children }: IFullScreenProviderProps) => {
  // STATE PARA DEFINIR TELA CHEIA:
  const [fullScreen, setFullScreen] = useState(false);

  // FUNÇÕES PARA ATIVAR E DESATIVAR FULLSCREEN:
  const activateFullscreen = (elem: any) => {
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

  const openFullScreen = (elem: any) => {
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
