import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IFullScreen extends Element {
  webkitRequestFullscreen?: () => void;
  msRequestFullscreen?: () => void;
  exitFullscreen?: () => void;
  webkitExitFullscreen?: () => void;
  msExitFullscreen?: () => void;
}

interface IFullScreenProvider {
  fullScreen: boolean;
  setFullScreen: Dispatch<SetStateAction<boolean>>;
  openFullScreen: (elem: IFullScreen) => void;
  closeFullScreen: (elem: IFullScreen) => void;
}

interface IFullScreenProviderProps {
  children: ReactNode;
}

export const FullScreenContext = createContext({} as IFullScreenProvider);

export const FullScreenProvider = ({ children }: IFullScreenProviderProps) => {
  // STATE PARA DEFINIR TELA CHEIA:
  const [fullScreen, setFullScreen] = useState(false);

  // FUNÇÕES PARA ATIVAR E DESATIVAR FULLSCREEN:
  const activateFullscreen = (elem: IFullScreen) => {
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
  const unActivateFullscreen = (elem: IFullScreen) => {
    if (elem.exitFullscreen) {
      elem.exitFullscreen();
      //Safari:
    } else if (elem.webkitExitFullscreen) {
      elem.webkitExitFullscreen();
      //IE11:
    } else if (elem.msExitFullscreen) {
      elem.msExitFullscreen();
    }
  };

  const openFullScreen = (elem: IFullScreen) => {
    setFullScreen(true);
    activateFullscreen(elem);
  };

  const closeFullScreen = (elem: IFullScreen) => {
    setFullScreen(false);
    unActivateFullscreen(elem);
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
