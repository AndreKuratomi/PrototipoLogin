import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

// import { getDashboards } from "../../utils";

interface ITextProvider {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  finalText: string;
  setFinalText: Dispatch<SetStateAction<string>>;
  // getText: (event: React.FormEvent<HTMLInputElement>) => void;
  // setIndexValue: (text: string) => void;
}

interface ITextProviderProps {
  children: ReactNode;
}

export const TextInputContext = createContext({} as ITextProvider);

export const TextInputProvider = ({ children }: ITextProviderProps) => {
  // STATE PARA O TEXTO ESCRITO NO INPUT:
  const [text, setText] = useState("");

  // STATE PARA O TEXTO ESCRITO NO INPUT:
  const [finalText, setFinalText] = useState("");

  return (
    <TextInputContext.Provider
      value={{ finalText, setFinalText, text, setText }}
    >
      {children}
    </TextInputContext.Provider>
  );
};

export const useTextInput = () => useContext(TextInputContext);
