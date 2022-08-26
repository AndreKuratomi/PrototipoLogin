import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IOpenModalProvider {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

interface IOpenModalProviderProps {
  children: ReactNode;
}

export const OpenModalContext = createContext({} as IOpenModalProvider);

export const OpenModalProvider = ({ children }: IOpenModalProviderProps) => {
  // STATE ABERTURA MODAL:
  const [open, setOpen] = useState(false);

  return (
    <OpenModalContext.Provider value={{ open, setOpen }}>
      {children}
    </OpenModalContext.Provider>
  );
};

export const useOpenModal = () => useContext(OpenModalContext);
