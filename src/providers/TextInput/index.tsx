import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ITextProvider {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  setUsername: (event: string) => void;
}

interface ITextProviderProps {
  children: ReactNode;
}

export const TextInputContext = createContext({} as ITextProvider);

export const TextInputProvider = ({ children }: ITextProviderProps) => {
  const [text, setText] = useState("");

  // ALTERAÇÃO STATE CONFORME USUÁRIO DIGITA:
  const setUsername = (event: string) => {
    // setText(event.target.value);
  };

  return (
    <TextInputContext.Provider value={{ text, setText, setUsername }}>
      {children}
    </TextInputContext.Provider>
  );
};

export const useTextInput = () => useContext(TextInputContext);
